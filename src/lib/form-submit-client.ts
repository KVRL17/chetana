"use client";

import { siteConfig } from "@/config/site";

type FormSubmitFields = Record<string, string>;

/** Submit to FormSubmit without navigating away from the current page. */
export async function submitToFormSubmit(fields: FormSubmitFields) {
  const endpoint = siteConfig.formSubmitEndpoint.replace(
    "https://formsubmit.co/",
    "https://formsubmit.co/ajax/"
  );

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      ...fields,
      _template: "table",
      _captcha: "false",
      _honey: "",
    }),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean | string; message?: string }
    | null;

  if (!response.ok || result?.success === false || result?.success === "false") {
    throw new Error(result?.message || "Form submission failed");
  }
}
