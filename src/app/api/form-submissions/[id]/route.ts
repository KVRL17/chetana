import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { updateSubmission } from "@/lib/server/form-store";
import { syncSubmissionToCentre } from "@/lib/server/submission-centre-sync";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    let updated = await updateSubmission(id, body);
    if (!updated) return NextResponse.json({ error: "Submission not found." }, { status: 404 });

    if (updated.formType !== "contact") {
      const workflow = await syncSubmissionToCentre(updated);
      if (workflow) updated = await updateSubmission(id, { workflow }) || updated;
    }

    return NextResponse.json({ ok: true, submission: updated });
  } catch (error) {
    console.error("Failed to update submission", error);
    const message = error instanceof Error ? error.message : "Unable to update submission.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
