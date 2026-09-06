import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { createCentreRecord, isCentreCollection, readCentreStore } from "@/lib/server/centre-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    return NextResponse.json(await readCentreStore());
  } catch (error) {
    console.error("Failed to read centre admin store", error);
    return NextResponse.json({ error: "Unable to read centre records." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const raw = await request.text();
    if (raw.length > 150_000) return NextResponse.json({ error: "Record is too large." }, { status: 413 });
    const body = JSON.parse(raw) as { collection?: unknown; data?: unknown };
    if (!isCentreCollection(body.collection)) return NextResponse.json({ error: "Invalid collection." }, { status: 400 });
    const record = await createCentreRecord(body.collection, body.data);
    return NextResponse.json({ ok: true, record }, { status: 201 });
  } catch (error) {
    console.error("Failed to create centre record", error);
    return NextResponse.json({ error: "Unable to create record." }, { status: 400 });
  }
}
