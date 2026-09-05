"use client";

import type { FormType } from "@/lib/form-submission-types";

interface SaveSubmissionInput {
  formType: FormType;
  formName: string;
  subject: string;
  data: Record<string, unknown>;
}

const PENDING_KEY = "chetana_pending_form_submissions";

type PendingSubmission = SaveSubmissionInput & {
  clientSubmissionId: string;
  sourcePath: string;
  clientSubmittedAt: string;
};

function createClientId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getPending(): PendingSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const value = window.localStorage.getItem(PENDING_KEY);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

function setPending(items: PendingSubmission[]) {
  if (typeof window === "undefined") return;
  try {
    if (items.length === 0) window.localStorage.removeItem(PENDING_KEY);
    else window.localStorage.setItem(PENDING_KEY, JSON.stringify(items.slice(-20)));
  } catch {
    // Local queue is only a fallback; primary persistence is the server JSON file.
  }
}

async function postSubmission(payload: PendingSubmission) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 2500);
  try {
    const response = await fetch("/api/form-submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: "no-store",
    });
    return response.ok;
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function flushPendingFormSubmissions() {
  const pending = getPending();
  if (pending.length === 0) return;

  const remaining: PendingSubmission[] = [];
  for (const item of pending) {
    try {
      const saved = await postSubmission(item);
      if (!saved) remaining.push(item);
    } catch {
      remaining.push(item);
    }
  }
  setPending(remaining);
}

export async function saveFormSubmission(input: SaveSubmissionInput) {
  const payload: PendingSubmission = {
    ...input,
    clientSubmissionId: createClientId(),
    sourcePath: typeof window !== "undefined" ? window.location.pathname : "",
    clientSubmittedAt: new Date().toISOString(),
  };

  try {
    const saved = await postSubmission(payload);
    if (saved) return true;
  } catch {
    // Preserve the existing FormSubmit flow and use two fallback mechanisms below.
  }

  // A beacon gets one more chance to reach the JSON API while FormSubmit navigates away.
  try {
    if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      navigator.sendBeacon(
        "/api/form-submissions",
        new Blob([JSON.stringify(payload)], { type: "application/json" })
      );
    }
  } catch {
    // The local queue below remains available for a later visit.
  }

  setPending([...getPending(), payload]);
  return false;
}
