"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { workshopSchema } from "@/schemas/workshopSchema";
import type { WorkshopFormValues } from "@/schemas/workshopSchema";
import { cn, getTodayDate } from "@/lib/utils";
import { saveFormSubmission } from "@/lib/form-storage-client";
import { siteConfig, formSubjects, successMessages } from "@/config/site";
import { useState } from "react";
import { CheckCircle, User, Phone, Mail, Building, Users, Calendar, MapPin, MessageSquare } from "lucide-react";

interface WorkshopFormProps {
  onSuccess?: () => void;
}

export const WorkshopForm = ({ onSuccess }: WorkshopFormProps) => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const methods = useForm<WorkshopFormValues>({
    resolver: zodResolver(workshopSchema),
  });

  const onSubmit = async (data: WorkshopFormValues) => {
    setSubmitStatus("sending");
    try {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = siteConfig.formSubmitEndpoint;

      const addField = (name: string, value: string) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };

      addField("_subject", formSubjects.workshop);
      addField("_template", "table");
      addField("_captcha", "true");
      addField("Form Name", "Workshop / Training Form");

      const hp = document.createElement("input");
      hp.type = "text";
      hp.name = "_gotcha";
      hp.style.display = "none";
      form.appendChild(hp);

      addField("Contact Person", data.contactPerson);
      addField("Organization Name", data.organizationName);
      addField("Mobile Number", data.phone);
      addField("Email Address", data.email);

      const orgTypeMap: Record<string, string> = {
        school: "School",
        college: "College",
        company: "Company",
        ngo: "NGO",
        "community-organization": "Community Organization",
        other: "Other",
      };
      addField("Organization Type", orgTypeMap[data.organizationType]);
      addField("Program Interested", data.programInterested);
      addField("Expected Participants", data.expectedParticipants?.toString() || "");
      addField("Preferred Date", data.preferredDate || "");
      addField("Location", data.location);
      addField("Requirements", data.requirements);

      await saveFormSubmission({
        formType: "workshop",
        formName: "Workshop / Training Form",
        subject: formSubjects.workshop,
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
        <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
        <h3 className="text-xl font-bold text-primary mb-3">Thank You!</h3>
        <p className="text-muted">{successMessages.workshop}</p>
      </div>
    );
  }

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="form-shell space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-muted mb-2">Contact Person *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("contactPerson")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Your name"
            />
          </div>
          {methods.formState.errors.contactPerson && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.contactPerson.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Organization *  </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("organizationName")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Organization name"
            />
          </div>
          {methods.formState.errors.organizationName && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.organizationName.message}</p>}
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
          <label className="block text-sm text-muted mb-2">Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("email")}
              type="email"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="name@example.com"
            />
          </div>
          {methods.formState.errors.email && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Organization Type *</label>
          <select
            {...methods.register("organizationType")}
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10")}
          >
            <option value="">Select type</option>
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="company">Company</option>
            <option value="ngo">NGO</option>
            <option value="community-organization">Community Organization</option>
            <option value="other">Other</option>
          </select>
          {methods.formState.errors.organizationType && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.organizationType.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Program Interested In *</label>
          <input
            {...methods.register("programInterested")}
            type="text"
            className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
            placeholder="e.g. Career Guidance Workshop"
          />
          {methods.formState.errors.programInterested && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.programInterested.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Expected Participants</label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("expectedParticipants")}
              type="number"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="e.g. 50"
              min={1}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Preferred Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("preferredDate")}
              type="date"
              min={getTodayDate()}
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Location *</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              {...methods.register("location")}
              type="text"
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
              placeholder="Event location"
            />
          </div>
          {methods.formState.errors.location && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.location.message}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-muted mb-2">Requirements *</label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-muted" />
            <textarea
              {...methods.register("requirements")}
              rows={4}
              className={cn("w-full rounded-xl pl-10 pr-4 py-3 bg-card border border-border/30 resize-y", "focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]")}
              placeholder="Describe your requirements..."
            />
          </div>
          {methods.formState.errors.requirements && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.requirements.message}</p>}
        </div>
      </div>

      <p className="text-xs text-muted/80">Your information will be used only to respond to your counselling enquiry and will be treated respectfully and confidentially.</p>

      <button
        type="submit"
        disabled={methods.formState.isSubmitting}
        className={cn("w-full rounded-full px-8 py-4 text-sm font-medium text-white", "bg-primary hover:bg-primary/90 disabled:opacity-60", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary")}
      >
        {methods.formState.isSubmitting ? "Sending..." : "Request Workshop Details"}
      </button>
    </form>
  );
};