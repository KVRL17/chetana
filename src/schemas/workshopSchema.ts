// Zod schema for workshop/trainings enquiry form
import { z } from "zod";

export const workshopSchema = z.object({
  contactPerson: z
    .string()
    .min(2, { message: "Please enter contact person name." })
    .max(80, { message: "Name must be at most 80 characters." })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name should contain only alphabetic characters." })
    .trim(),
  organizationName: z
    .string()
    .min(2, { message: "Please enter organization name." })
    .max(100, { message: "Organization name must be at most 100 characters." })
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
    .max(100, { message: "Email must be at most 100 characters." }),
  organizationType: z.enum([
    "school",
    "college",
    "company",
    "ngo",
    "community-organization",
    "other",
  ], {
    errorMap: () => ({ message: "Please select organization type." }),
  }),
  programInterested: z
    .string()
    .min(2, { message: "Please specify the program of interest." })
    .max(150, { message: "Program name must be at most 150 characters." })
    .trim(),
  expectedParticipants: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      const num = Number(val);
      return num >= 1 && num <= 10000;
    }, { message: "Please enter a valid number of participants." }),
  preferredDate: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      const selectedDate = new Date(`${val}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return !Number.isNaN(selectedDate.getTime()) && selectedDate >= today;
    }, { message: "Please select a future date." }),
  location: z
    .string()
    .min(2, { message: "Please enter the location for the program." })
    .max(100, { message: "Location must be at most 100 characters." })
    .trim(),
  requirements: z
    .string()
    .min(10, { message: "Please describe your requirements (minimum 10 characters)." })
    .max(1500, { message: "Requirements must be at most 1500 characters." }),
});

export type WorkshopFormValues = z.infer<typeof workshopSchema>;

export const workshopDefaultValues = {
  contactPerson: "",
  organizationName: "",
  phone: "",
  email: "",
  organizationType: "school",
  programInterested: "",
  expectedParticipants: "",
  preferredDate: "",
  location: "",
  requirements: "",
};