// Zod schema for student counselling form
import { z } from "zod";

export const studentCounsellingSchema = z.object({
  studentName: z
    .string()
    .min(2, { message: "Please enter student name." })
    .max(80, { message: "Name must be at most 80 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only alphabetic characters." })
    .trim(),
  age: z
    .string()
    .optional()
    .refine((val) => {
      if (val === "" || val === undefined) return true;
      const num = Number(val);
      return num >= 5 && num <= 100;
    }, { message: "Please enter a valid age between 5 and 100." }),
  currentClass: z
    .string()
    .min(1, { message: "Please enter current class." }),
  parentName: z
    .string()
    .min(2, { message: "Please enter parent/guardian name." })
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
  primaryConcern: z.enum(
    [
      "academic-stress",
      "concentration",
      "exam-fear",
      "motivation",
      "confidence",
      "career-confusion",
      "peer-pressure",
      "behavioural-concern",
      "communication",
      "other",
    ],
    {
      errorMap: () => ({ message: "Please select the primary concern." }),
    }
  ),
  message: z
    .string()
    .min(10, { message: "Please describe how we can help (minimum 10 characters)." })
    .max(1500, { message: "Message must be at most 1500 characters." }),
});

export type StudentCounsellingFormValues = z.infer<typeof studentCounsellingSchema>;

export const studentCounsellingDefaultValues = {
  studentName: "",
  age: "",
  currentClass: "",
  parentName: "",
  phone: "",
  email: "",
  primaryConcern: "academic-stress",
  message: "",
};