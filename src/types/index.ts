// Common types used across the application

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface ServiceType {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  benefits: string[];
  whoCanBenefit: string[];
  seo: {
    title: string;
    description: string;
  };
}

export interface TrainingProgram {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  duration?: string;
  participants?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relationship: string;
  content: string;
  rating?: number;
  image?: string;
  isPlaceholder: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readingTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WorkingHour {
  id: string;
  day: string;
  isOpen: boolean;
  hours: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  googleMapsUrl: string;
}

export interface Counsellor {
  name: string;
  position: string;
  experience: string;
  languages: string[];
  image: string;
  bio: string;
  specialties: string[];
}

export type FormStatus = "idle" | "validating" | "sending" | "success" | "error";

export interface FormData {
  [key: string]: unknown;
}

export interface FormFieldConfig {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}
