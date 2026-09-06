"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contactSchema";
import type { ContactFormValues } from "@/schemas/contactSchema";
import { cn } from "@/lib/utils";
import { saveFormSubmission } from "@/lib/form-storage-client";
import { siteConfig, formSubjects, successMessages, errorMessages, privacyNote } from "@/config/site";
import { useState } from "react";
import { CheckCircle, XCircle, User, Mail, Phone, MessageSquare } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm = ({ onSuccess }: ContactFormProps) => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const methods = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
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

      addField("_subject", formSubjects.contact);
      addField("_template", "table");
      addField("_captcha", "true");
      addField("Form Name", "Contact Form");

      const hp = document.createElement("input");
      hp.type = "text";
      hp.name = "_gotcha";
      hp.style.display = "none";
      form.appendChild(hp);

      addField("Full Name", data.fullName);
      addField("Mobile Number", data.phone);
      addField("Email Address", data.email || "");

      const subjectMap: Record<string, string> = {
        general: "General Enquiry",
        counselling: "Counselling Enquiry",
        career: "Career Guidance",
        student: "Student Counselling",
        family: "Family Counselling",
        workshop: "Workshop / Training",
        institutional: "Institutional Program",
        other: "Other",
      };
      addField("Subject", subjectMap[data.subject] || "General Enquiry");
      addField("Message", data.message);

      await saveFormSubmission({
        formType: "contact",
        formName: "Contact Form",
        subject: formSubjects.contact,
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
        <p className="text-muted">{successMessages.contact}</p>
      </div>
    );
  }

  if (submitStatus === "error") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-red-100 mx-auto mb-4 flex items-center justify-center">
          <XCircle className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-xl font-bold text-primary mb-3">
          {errorMessages.submit}
        </h3>
        <p className="text-muted">Please try again or call us directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="form-shell space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm text-muted mb-2">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              id="fullName"
              {...methods.register("fullName")}
              type="text"
              className={cn(
                "w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-colors"
              )}
              placeholder="Enter your full name"
            />
          </div>
          {methods.formState.errors.fullName && (
            <p className="mt-1 text-xs text-red-500">{methods.formState.errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm text-muted mb-2">Phone *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              id="phone"
              {...methods.register("phone")}
              type="tel"
              className={cn(
                "w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-colors"
              )}
              placeholder="+91 99494 54939"
            />
          </div>
          {methods.formState.errors.phone && (
            <p className="mt-1 text-xs text-red-500">{methods.formState.errors.phone.message}</p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm text-muted mb-2">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              id="email"
              {...methods.register("email")}
              type="email"
              className={cn(
                "w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 text-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary",
                "transition-colors"
              )}
              placeholder="name@example.com"
            />
          </div>
          {methods.formState.errors.email && (
            <p className="mt-1 text-xs text-red-500">{methods.formState.errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-muted mb-2">Subject *</label>
        <select
          id="subject"
          {...methods.register("subject")}
          className={cn(
            "w-full rounded-xl px-4 py-3 bg-card border border-border/30 text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            "appearance-none pr-10 transition-colors"
          )}
        >
          <option value="">Select a subject</option>
          <option value="general">General Enquiry</option>
          <option value="counselling">Counselling Enquiry</option>
          <option value="career">Career Guidance</option>
          <option value="student">Student Counselling</option>
          <option value="family">Family Counselling</option>
          <option value="workshop">Workshop / Training</option>
          <option value="institutional">Institutional Program</option>
          <option value="other">Other</option>
        </select>
        {methods.formState.errors.subject && (
          <p className="mt-1 text-xs text-red-500">{methods.formState.errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-2">Message *</label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted" />
          <textarea
            id="message"
            {...methods.register("message")}
            rows={5}
            className={cn(
              "w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 text-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary",
              "resize-y min-h-[120px] transition-colors"
            )}
            placeholder="How can we help you?"
          />
        </div>
        {methods.formState.errors.message && (
          <p className="mt-1 text-xs text-red-500">{methods.formState.errors.message.message}</p>
        )}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          {...methods.register("consent")}
          className="mt-1 w-4 h-4 rounded border-primary/30 text-primary"
        />
        <span className="text-sm text-foreground/80">
          I agree to be contacted by Chetana Psychological Counselling Centre regarding my enquiry.
        </span>
      </div>
      {methods.formState.errors.consent && (
        <p className="mt-1 text-xs text-red-500">{methods.formState.errors.consent.message}</p>
      )}

      <p className="text-xs text-muted/80">{privacyNote}</p>

      <button
        type="submit"
        disabled={methods.formState.isSubmitting}
        className={cn(
          "w-full rounded-full px-8 py-4 text-sm font-medium text-white transition-colors",
          "bg-primary hover:bg-primary/90 disabled:opacity-60",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {methods.formState.isSubmitting ? (
            <>
              <span>Validating...</span>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              </svg>
            </>
          ) : (
            <>
              <span>Send Enquiry</span>
            </>
          )}
        </span>
      </button>
    </form>
  );
};