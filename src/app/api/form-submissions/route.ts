import { NextRequest, NextResponse } from "next/server";
import { addSubmission, readStore } from "@/lib/server/form-store";
import { isAdminRequest } from "@/lib/server/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    if (rawBody.length > 100_000) {
      return NextResponse.json({ error: "Submission is too large." }, { status: 413 });
    }

    const body = JSON.parse(rawBody);
    const record = await addSubmission(body);
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
    const store = await readStore();
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
