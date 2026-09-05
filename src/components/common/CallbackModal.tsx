"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { callbackSchema } from "@/schemas/callbackSchema";
import type { CallbackFormValues } from "@/schemas/callbackSchema";
import { cn } from "@/lib/utils";
import { siteConfig, formSubjects, successMessages } from "@/config/site";
import { X, CheckCircle } from "lucide-react";
import { useState } from "react";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallbackModal = ({ isOpen, onClose }: CallbackModalProps) => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const methods = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
  });

  const onSubmit = async (data: CallbackFormValues) => {
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

      addField("_subject", formSubjects.callback);
      addField("_template", "table");
      addField("_captcha", "true");

      const hp = document.createElement("input");
      hp.type = "text";
      hp.name = "_gotcha";
      hp.style.display = "none";
      form.appendChild(hp);

      addField("Name", data.name);
      addField("Phone Number", data.phone);
      addField("Interested Service", data.interestedService);
      addField("Preferred Callback Time", data.preferredCallbackTime);

      document.body.appendChild(form);
      form.submit();

      setSubmitStatus("success");
      setTimeout(onClose, 2000);
    } catch {
      setSubmitStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full mx-4">
        <div className="p-6 border-b border-border/20 flex items-center justify-between">
          <h3 className="text-xl font-bold text-primary">Request a Callback</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-muted/10 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-muted" />
          </button>
        </div>

        <div className="p-6">
          {submitStatus === "success" ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <p className="text-muted">{successMessages.callback}</p>
            </div>
          ) : (
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm text-muted mb-2">Name *</label>
                <input
                  {...methods.register("name")}
                  type="text"
                  className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
                  placeholder="Your name"
                />
                {methods.formState.errors.name && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Phone *</label>
                <input
                  {...methods.register("phone")}
                  type="tel"
                  className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary")}
                  placeholder="+91 99494 54939"
                />
                {methods.formState.errors.phone && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Interested Service *</label>
                <select
                  {...methods.register("interestedService")}
                  className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10")}
                >
                  <option value="other">Select a service</option>
                  <option value="individual-counselling">Individual Counselling</option>
                  <option value="student-counselling">Student Counselling</option>
                  <option value="career-counselling">Career Counselling</option>
                  <option value="family-counselling">Family Counselling</option>
                  <option value="parent-guidance">Parent Guidance</option>
                  <option value="workshops-training">Workshops & Training</option>
                </select>
                {methods.formState.errors.interestedService && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.interestedService.message}</p>}
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Preferred Callback Time *</label>
                <select
                  {...methods.register("preferredCallbackTime")}
                  className={cn("w-full rounded-xl px-4 py-3 bg-card border border-border/30", "focus:outline-none focus:ring-2 focus:ring-primary appearance-none pr-10")}
                >
                  <option value="anytime">Anytime</option>
                  <option value="morning">Morning (9 AM – 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
                  <option value="evening">Evening (3 PM – 5 PM)</option>
                </select>
                {methods.formState.errors.preferredCallbackTime && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.preferredCallbackTime.message}</p>}
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
              {methods.formState.errors.consent && <p className="text-xs text-red-500 mt-1">{methods.formState.errors.consent.message}</p>}

              <button
                type="submit"
                disabled={methods.formState.isSubmitting}
                className={cn("w-full rounded-full px-6 py-3 text-sm font-medium text-white", "bg-primary hover:bg-primary/90 disabled:opacity-60", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary")}
              >
                {methods.formState.isSubmitting ? "Sending..." : "Request Callback"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};