import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { updateSubmission } from "@/lib/server/form-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = await request.json();
    const updated = await updateSubmission(id, body);
    if (!updated) return NextResponse.json({ error: "Submission not found." }, { status: 404 });
    return NextResponse.json({ ok: true, submission: updated });
  } catch (error) {
    console.error("Failed to update submission", error);
    return NextResponse.json({ error: "Unable to update submission." }, { status: 400 });
  }
}
