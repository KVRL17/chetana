"use client";

import { useEffect } from "react";

export function useFormSuccessScroll(status: string, confirmationId: string) {
  useEffect(() => {
    if (status !== "success") return;

    const confirmation = document.getElementById(confirmationId);
    confirmation?.focus({ preventScroll: true });
    confirmation?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [confirmationId, status]);
}
