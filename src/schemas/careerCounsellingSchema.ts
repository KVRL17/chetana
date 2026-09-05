// Zod schema for career counselling form
import { z } from "zod";

export const careerCounsellingSchema = z.object({
  studentName: z
    .string()
    .min(2, { message: "Please enter student name." })
    .max(80, { message: "Name must be at most 80 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only alphabetic characters." })
    .trim(),
  parentName: z
    .string()
    .optional()
    .refine((val) => !val || /^[a-zA-Z\s]+$/.test(val), {
      message: "Parent name should contain only alphabetic characters.",
    }),
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
  currentClass: z
    .string()
    .min(1, { message: "Please enter current class/qualification." }),
  schoolCollege: z
    .string()
    .min(2, { message: "Please enter school or college name." })
    .max(100, { message: "Institution name must be at most 100 characters." })
    .trim(),
  careerArea: z.string().optional(),
  currentStream: z.string().optional(),
  preferredCourse: z.string().optional(),
  mainConcern: z.string().optional(),
  city: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Please describe your main career concern (minimum 10 characters)." })
    .max(1500, { message: "Message must be at most 1500 characters." }),
});

export type CareerCounsellingFormValues = z.infer<typeof careerCounsellingSchema>;

export const careerCounsellingDefaultValues = {
  studentName: "",
  parentName: "",
  phone: "",
  email: "",
  currentClass: "",
  schoolCollege: "",
  careerArea: "",
  currentStream: "",
  preferredCourse: "",
  mainConcern: "",
  city: "",
  message: "",
};
