import { createHmac, timingSafeEqual } from "crypto";
import type { NextRequest } from "next/server";

export const ADMIN_COOKIE = "chetana_admin_session";

export function getAdminConfig() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "",
    sessionSecret: process.env.ADMIN_SESSION_SECRET || "",
  };
}

export function isAdminConfigured() {
  const config = getAdminConfig();
  return Boolean(config.password && config.sessionSecret);
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return timingSafeEqual(aBuffer, bBuffer);
}

export function validateAdminCredentials(username: string, password: string) {
  const config = getAdminConfig();
  if (!isAdminConfigured()) return false;
  return safeEqual(username, config.username) && safeEqual(password, config.password);
}

export function createAdminSessionToken() {
  const { sessionSecret } = getAdminConfig();
  return createHmac("sha256", sessionSecret).update("chetana-admin-session-v1").digest("hex");
}

export function isAdminRequest(request: NextRequest) {
  if (!isAdminConfigured()) return false;
  const token = request.cookies.get(ADMIN_COOKIE)?.value || "";
  const expected = createAdminSessionToken();
  return safeEqual(token, expected);
}
