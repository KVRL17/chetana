"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { careerCounsellingSchema } from "@/schemas/careerCounsellingSchema";
import type { CareerCounsellingFormValues } from "@/schemas/careerCounsellingSchema";
import { cn } from "@/lib/utils";
import { saveFormSubmission } from "@/lib/form-storage-client";
import { siteConfig, formSubjects, successMessages } from "@/config/site";
import { useState } from "react";
import { CheckCircle, XCircle, User, Phone, Mail, GraduationCap, MapPin, MessageSquare } from "lucide-react";

interface CareerFormProps {
  onSuccess?: () => void;
}

export const CareerForm = ({ onSuccess }: CareerFormProps) => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const methods = useForm<CareerCounsellingFormValues>({
    resolver: zodResolver(careerCounsellingSchema),
  });

  const onSubmit = async (data: CareerCounsellingFormValues) => {
    setSubmitStatus("sending");
    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = siteConfig.formSubmitEndpoint;
      form.className = "hidden";

      const addField = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField("_subject", formSubjects.career);
      addField("_template", "table");
      addField("_captcha", "true");
      addField("Form Name", "Career Counselling Form");

      const hp = document.createElement("input");
      hp.type = "text";
      hp.name = "_gotcha";
      hp.style.display = "none";
      form.appendChild(hp);

      addField("Student Name", String(data.studentName));
      addField("Parent Name", String(data.parentName || ""));
      addField("Mobile Number", String(data.phone));
      addField("Email Address", String(data.email || ""));
      addField("Current Qualification", String(data.currentClass));
      addField("School / College", String(data.schoolCollege));
      addField("Career Area of Interest", String(data.careerArea || ""));
      addField("Current Stream", String(data.currentStream || ""));
      addField("Preferred Course", String(data.preferredCourse || ""));
      addField("Career Concern", String(data.mainConcern || ""));
      addField("City", String(data.city || ""));
      addField("Message", String(data.message));

      await saveFormSubmission({
        formType: "career",
        formName: "Career Counselling Form",
        subject: formSubjects.career,
        data,
      });

      document.body.appendChild(form);
      form.submit();

      setSubmitStatus("success");
      onSuccess?.();
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 mx-auto mb-4 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">Thank You!</h3>
        <p className="text-muted">{successMessages.career}</p>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-red-100 mx-auto mb-4 flex items-center justify-center">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">Submission Failed</h3>
        <p className="text-muted">Please try again or contact us directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="form-shell space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-muted mb-2">Student Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("studentName")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Enter student name"
            />
          </div>
          {methods.formState.errors.studentName && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.studentName.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Parent Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("parentName")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Parent/Guardian name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Phone *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("phone")}
              type="tel"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="+91 99494 54939"
            />
          </div>
          {methods.formState.errors.phone && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("email")}
              type="email"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-muted mb-2">Current Class / Qualification *</label>
          <div className="relative">
            <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("currentClass")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="e.g. Class 10, B.Com, etc."
            />
          </div>
          {methods.formState.errors.currentClass && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.currentClass.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">School / College</label>
          <input
            {...methods.register("schoolCollege")}
            type="text"
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
            placeholder="School or college name"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Career Area of Interest</label>
          <input
            {...methods.register("careerArea")}
            type="text"
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
            placeholder="e.g. Engineering, Medicine, etc."
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Current Stream</label>
          <select
            {...methods.register("currentStream")}
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10")}
          >
            <option value="">Select stream</option>
            <option value="science">Science</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Preferred Course</label>
          <input
            {...methods.register("preferredCourse")}
            type="text"
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
            placeholder="Course name"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Main Career Concern *</label>
          <select
            {...methods.register("mainConcern")}
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10")}
          >
            <option value="">Select concern</option>
            <option value="stream-selection">Stream Selection</option>
            <option value="course-selection">Course Selection</option>
            <option value="career-interest">Career Interest Identification</option>
            <option value="higher-education">Higher Education Planning</option>
            <option value="vocational">Vocational Guidance</option>
            <option value="future-planning">Future Planning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">City</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("city")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Your city"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-muted mb-2">Message *</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted" />
            <textarea
              {...methods.register("message")}
              rows={4}
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 resize-y", "focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]")}
              placeholder="Describe your main career concern..."
            />
          </div>
          {methods.formState.errors.message && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.message.message}</p>}
        </div>
      </div>

      <p className="text-xs text-muted/80">Your information will be used only to respond to your counselling enquiry and will be treated respectfully and confidentially.</p>

      <button
        type="submit"
        disabled={methods.formState.isSubmitting}
        className={cn("w-full rounded-full px-8 py-4 text-sm font-medium text-white", "bg-primary hover:bg-primary/90 disabled:opacity-60", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary")}
      >
        {methods.formState.isSubmitting ? "Sending..." : "Request Career Guidance"}
      </button>
    </form>
  );
};