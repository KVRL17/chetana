import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { restoreCentreRecord } from "@/lib/server/centre-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { id } = await context.params;
    const record = await restoreCentreRecord(id);
    if (!record) return NextResponse.json({ error: "Archived record not found." }, { status: 404 });
    return NextResponse.json({ ok: true, record });
  } catch (error) {
    console.error("Failed to restore centre record", error);
    return NextResponse.json({ error: "Unable to restore record." }, { status: 400 });
  }
}
