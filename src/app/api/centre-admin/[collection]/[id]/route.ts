import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { archiveCentreRecord, isCentreCollection, updateCentreRecord } from "@/lib/server/centre-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = { params: Promise<{ collection: string; id: string }> };

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { collection, id } = await context.params;
    if (!isCentreCollection(collection)) return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
    const data = await request.json();
    const record = await updateCentreRecord(collection, id, data);
    if (!record) return NextResponse.json({ error: "Record not found." }, { status: 404 });
    return NextResponse.json({ ok: true, record });
  } catch (error) {
    console.error("Failed to update centre record", error);
    return NextResponse.json({ error: "Unable to update record." }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { collection, id } = await context.params;
    if (!isCentreCollection(collection)) return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
    const record = await archiveCentreRecord(collection, id);
    if (!record) return NextResponse.json({ error: "Record not found." }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to archive centre record", error);
    return NextResponse.json({ error: "Unable to archive record." }, { status: 400 });
  }
}
