import { NextRequest, NextResponse } from "next/server";
import { getAdminConfig, isAdminConfigured, isAdminRequest } from "@/lib/server/admin-auth";

export async function GET(request: NextRequest) {
  const configured = isAdminConfigured();
  return NextResponse.json({
    configured,
    authenticated: configured && isAdminRequest(request),
    username: getAdminConfig().username,
  });
}
