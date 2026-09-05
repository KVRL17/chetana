// Zod schema for family counselling form
import { z } from "zod";

export const familyCounsellingSchema = z.object({
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
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .max(100, { message: "Email must be at most 100 characters." })
    .optional()
    .or(z.literal("").transform(() => undefined)),
  primaryConcern: z
    .enum([
      "communication-problems",
      "relationship-challenges",
      "emotional-disconnect",
      "adjustment-difficulties",
      "parent-child-concerns",
      "conflict-management",
      "other",
    ]),
  familyMembers: z
    .number()
    .int()
    .min(1, { message: "Please enter number of family members involved." })
    .max(20, { message: "Please enter a valid number." }),
  preferredLanguage: z.enum(["telugu", "english", "hindi"]),
  message: z
    .string()
    .min(10, { message: "Please describe how we can help (minimum 10 characters)." })
    .max(1500, { message: "Message must be at most 1500 characters." }),
});

export type FamilyCounsellingFormValues = z.infer<typeof familyCounsellingSchema>;

export const familyCounsellingDefaultValues = {
  name: "",
  phone: "",
  email: "",
  primaryConcern: "communication-problems",
  familyMembers: 1,
  preferredLanguage: "english",
  message: "",
};