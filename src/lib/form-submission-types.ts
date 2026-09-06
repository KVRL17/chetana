export const formTypeLabels = {
  appointment: "Appointment Form",
  contact: "Contact Form",
  career: "Career Counselling Form",
  student: "Student Counselling Form",
  family: "Family Counselling Form",
  workshop: "Workshop / Training Form",
  callback: "Callback Request Form",
} as const;

export type FormType = keyof typeof formTypeLabels;
export type SubmissionStatus = "new" | "contacted" | "scheduled" | "closed";

export interface SubmissionWorkflow {
  centreLeadId?: string;
  centreLeadCode?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  scheduledMode?: string;
  nextActionDate?: string;
  centreClientId?: string;
  centreClientCode?: string;
  appointmentId?: string;
  promotedAt?: string;
  contactNextActionDate?: string;
}

export interface FormSubmissionRecord {
  id: string;
  clientSubmissionId?: string;
  formType: FormType;
  formName: string;
  subject: string;
  submittedAt: string;
  updatedAt: string;
  status: SubmissionStatus;
  adminNotes: string;
  workflow?: SubmissionWorkflow;
  sourcePath: string;
  data: Record<string, string | number | boolean | null>;
}

export interface FormSubmissionStore {
  version: 1;
  updatedAt: string | null;
  submissions: FormSubmissionRecord[];
}
