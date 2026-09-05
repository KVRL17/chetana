// Zod schema for callback request form
import { z } from "zod";

export const callbackSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Please enter your name." })
    .max(80, { message: "Name must be at most 80 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only alphabetic characters." })
    .trim(),
  phone: z
    .string()
    .min(1, { message: "Phone number is required." })
    .refine(
      (val) => {
        const normalized = val.replace(/\D/g, "");
        return /^[6-9]\d{9}$/.test(normalized);
      },
      { message: "Enter a valid 10-digit mobile number." }
    ),
  interestedService: z.enum(
    [
      "individual-counselling",
      "student-counselling",
      "career-counselling",
      "family-counselling",
      "parent-guidance",
      "workshops-training",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select a service." }),
    }
  ),
  preferredCallbackTime: z.enum(
    ["morning", "afternoon", "evening", "anytime"],
    {
      errorMap: () => ({ message: "Please select a preferred time." }),
    }
  ),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to be contacted regarding your enquiry.",
    }),
});

export type CallbackFormValues = z.infer<typeof callbackSchema>;

export const callbackDefaultValues = {
  name: "",
  phone: "",
  interestedService: "other",
  preferredCallbackTime: "anytime",
  consent: false,
};