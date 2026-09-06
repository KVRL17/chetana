"use client";

import { useEffect } from "react";
import { flushPendingFormSubmissions } from "@/lib/form-storage-client";

export default function PendingSubmissionRecovery() {
  useEffect(() => {
    flushPendingFormSubmissions().catch(() => undefined);
  }, []);
  return null;
}
