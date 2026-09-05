// Zod schema for counselling appointment booking form
import { z } from "zod";

export const appointmentSchema = z.object({
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
        // Remove all non-digit characters for validation
        const normalized = val.replace(/\D/g, "");
        // 10-digit number starting with 6-9
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
  age: z
    .string()
    .optional()
    .refine((val) => {
      if (val === "" || val === undefined) return true;
      const num = Number(val);
      return num >= 5 && num <= 100;
    }, { message: "Please enter a valid age between 5 and 100." }),
  gender: z
    .string()
    .optional()
    .refine((val) => val === undefined || typeof val === "string", {
      message: "Please select a valid option.",
    }),
  counsellingFor: z
    .enum([
      "individual-counselling",
      "student-counselling",
      "career-counselling",
      "family-counselling",
      "parent-guidance",
      "child-adolescent-guidance",
      "stress-emotional-wellbeing",
      "personal-development",
    ]),
  preferredLanguage: z.enum(["telugu", "english", "hindi"]),
  preferredSessionType: z
    .enum(["in-person", "phone", "online"]),
  preferredDate: z
    .string()
    .refine((val) => {
      if (!val) return true; // Will be validated by date logic
      const selectedDate = new Date(`${val}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(selectedDate.getTime()) && selectedDate >= today;
    }, { message: "Please select a valid appointment date." })
    .optional(),
  preferredTime: z.string().optional(),
  cityLocation: z.string().optional(),
  briefMessage: z
    .string()
    .min(10, { message: "Please describe how we can help (minimum 10 characters)." })
    .max(1500, { message: "Message must be at most 1500 characters." }),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please agree to be contacted regarding your enquiry.",
    }),
});

// Types inferred from schema
export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

// Default values for the form
export const appointmentDefaultValues = {
  fullName: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  counsellingFor: "individual-counselling",
  preferredLanguage: "english",
  preferredSessionType: "in-person",
  preferredDate: "",
  preferredTime: "",
  cityLocation: "",
  briefMessage: "",
  consent: false,
};

// Helper function to normalize phone number (remove spaces, etc.)
export const normalizePhone = (phone: string): string => {
  return phone.replace(/\s+/g, "");
};

// Validation error message mapping for UI display
export const fieldErrorMessages = {
  fullName: "Please enter your full name.",
  phone: "Enter a valid 10-digit mobile number.",
  email: "Please enter a valid email address.",
  age: "Please enter a valid age between 5 and 100.",
  counsellingFor: "Please select a counselling service.",
  preferredLanguage: "Please select your preferred language.",
  preferredSessionType: "Please select a valid appointment date.",
  consent: "Please agree to be contacted regarding your enquiry.",
};