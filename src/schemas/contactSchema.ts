// Zod schema for contact form
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Please enter your full name." })
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
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be at most 100 characters." })
    .optional()
    .or(z.literal("").transform(() => undefined)),
  subject: z.enum(
    [
      "general",
      "counselling",
      "career",
      "student",
      "family",
      "workshop",
      "institutional",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select a subject." }),
    }
  ),
  message: z
    .string()
    .min(10, { message: "Please enter a message (minimum 10 characters)." })
    .max(1500, { message: "Message must be at most 1500 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "Please agree to be contacted regarding your enquiry.",
  }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const contactDefaultValues = {
  fullName: "",
  phone: "",
  email: "",
  subject: "general",
  message: "",
  consent: false,
};