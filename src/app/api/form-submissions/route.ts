import { NextRequest, NextResponse } from "next/server";
import { addSubmission, readStore, updateSubmission } from "@/lib/server/form-store";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { syncSubmissionToCentre } from "@/lib/server/submission-centre-sync";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    if (rawBody.length > 100_000) {
      return NextResponse.json({ error: "Submission is too large." }, { status: 413 });
    }

    const body = JSON.parse(rawBody);
    let record = await addSubmission(body);

    // Keep the website form resilient: the enquiry is saved first. For every
    // counselling/service form, mirror that same record into Command Centre CRM.
    // Contact-form messages deliberately stay in the separate Contact Inbox.
    if (record.formType !== "contact") {
      try {
        const workflow = await syncSubmissionToCentre(record);
        if (workflow) record = (await updateSubmission(record.id, { workflow })) || record;
      } catch (syncError) {
        console.error("Submission saved but Command Centre sync failed", syncError);
      }
    }

    return NextResponse.json({ ok: true, id: record.id }, { status: 201 });
  } catch (error) {
    console.error("Failed to save form submission", error);
    return NextResponse.json({ error: "Unable to save submission." }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let store = await readStore();
    let backfilled = false;
    for (const submission of store.submissions) {
      if (submission.formType === "contact") continue;
      const needsSync = !submission.workflow?.centreLeadId
        || (submission.status === "scheduled" && !submission.workflow?.appointmentId);
      if (!needsSync) continue;
      try {
        const workflow = await syncSubmissionToCentre(submission);
        if (workflow) {
          await updateSubmission(submission.id, { workflow });
          backfilled = true;
        }
      } catch (syncError) {
        console.error("Unable to backfill one website enquiry into Command Centre", syncError);
      }
    }
    if (backfilled) store = await readStore();
    return NextResponse.json({
      ...store,
      submissions: [...store.submissions].sort(
        (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      ),
    });
  } catch (error) {
    console.error("Failed to read form submissions", error);
    return NextResponse.json({ error: "Unable to read submissions." }, { status: 500 });
  }
}
