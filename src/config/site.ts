// Centralized site configuration - single source of truth for all business data
// Do NOT duplicate contact info or business details across components

export const siteConfig = {
  // Business identity
  businessName: "Chetana Psychological Counselling Centre",
  extendedBusinessName:
    "Chetana Psychological Counselling Centre & Human Resource Development Training Centre",
  shortName: "Chetana",

  // Counsellor details
  counsellorName: "Mr. Suri Babu Saragadam",
  counsellorPosition:
    "Educator, Trainer & Counselling Psychologist",
  counsellorExperience: "30+ Years",

  // Contact information
  phone: "+91 99494 54939",
  phoneRaw: "919949454939",
  whatsapp: "919949454939",
  email: "suribabu.psychologist@gmail.com",

  // Address
  address: {
    line1: "D/No: 4-12, Satya Sadhan,",
    line2: "Thimmarajupeta Village and Post,",
    line3: "Atchutapuram Mandal,",
    line4: "Anakapalli District,",
    line5: "Andhra Pradesh – 531033,",
    line6: "India",
    country: "India",
    full:
      "D/No: 4-12, Satya Sadhan, Thimmarajupeta Village and Post, Atchutapuram Mandal, Anakapalli District, Andhra Pradesh – 531033, India",
  },

  // Google Maps
  googleMapsUrl: "https://maps.app.goo.gl/UgSEUqiSxNReQKNY6",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.439330327279!2d83.3421951!3d17.6769227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1le0x1948f7b1a6c1e6c5:0x8eaa1c807d09e4d1!8m2!3d17.6769227!4d83.34477!3m2!1m1!3f1debe2a9b1f91b9e7b0e8e3d3b3a3a3!2m2!1d83.34477!2d17.6769227",

  // Working hours
  workingHours: {
    appointmentOnly: true,
    note: "Online and offline counselling by prior appointment only",
    weekdays: {
      days: "Monday – Saturday",
      hours: "6:00 PM – 9:00 PM",
    },
    weekend: {
      days: "Sunday",
      hours: "10:00 AM – 5:00 PM",
    },
  },

  // Languages
  languages: ["Telugu", "English", "Hindi"],

  // Primary location target
  locationTarget: {
    primary: "Atchutapuram",
    district: "Anakapalli",
    region: "Visakhapatnam",
    state: "Andhra Pradesh",
  },

  // FormSubmit configuration
  formSubmitEmail: "suribabu.psychologist@gmail.com",
  formSubmitEndpoint: "https://formsubmit.co/suribabu.psychologist@gmail.com",

  // Google rating (manually configured - not scraped)
  googleRating: 4.8,
  googleReviewCount: 0,

  // WhatsApp messages by context
  whatsappMessages: {
    general:
      "Hello, I would like to know more about counselling services at Chetana Psychological Counselling Centre.",
    career:
      "Hello, I would like to enquire about career counselling at Chetana Psychological Counselling Centre.",
    student:
      "Hello, I would like to enquire about student counselling at Chetana Psychological Counselling Centre.",
    family:
      "Hello, I would like to enquire about family counselling at Chetana Psychological Counselling Centre.",
    parent:
      "Hello, I would like to enquire about parent guidance at Chetana Psychological Counselling Centre.",
    workshop:
      "Hello, I would like to enquire about workshops/training programs at Chetana Psychological Counselling Centre.",
    bookSession:
      "Hello, I would like to book a counselling session at Chetana Psychological Counselling Centre.",
  },

  // Session types
  sessionTypes: {
    inPerson: {
      name: "In-Person Counselling",
      description: "Face-to-face sessions at our centre in Atchutapuram",
      enabled: true,
    },
    phone: {
      name: "Phone Consultation",
      description: "Professional guidance via phone call",
      enabled: true,
    },
    online: {
      name: "Online Counselling",
      description: "Secure video consultation from your home",
      enabled: true,
    },
  },

  // Brand message
  brandMessage:
    "Empowering Your Journey to Emotional Well-being & Human Resource Development.",
  ctaTagline: "Come, let us talk.",
  initiativeName: "Society for Quality Education and Sustainable Growth",
  heroSupportingLine:
    "Professional counselling and guidance for students, individuals, parents and families — helping people understand themselves, overcome challenges and move forward with confidence.",

  // SEO
  seo: {
    title: "Chetana Psychological Counselling Centre | Atchutapuram, Anakapalli",
    description:
      "Professional psychological counselling, student counselling, career guidance, family counselling, parent guidance and personal development support in Atchutapuram, Anakapalli. 30+ years experience.",
    keywords: [
      "Psychological Counselling in Atchutapuram",
      "Counselling Centre in Atchutapuram",
      "Counsellor in Atchutapuram",
      "Counselling Centre in Anakapalli",
      "Psychological Counselling in Anakapalli",
      "Student Counselling in Anakapalli",
      "Career Counselling in Atchutapuram",
      "Career Counsellor in Anakapalli",
      "Family Counselling in Anakapalli",
      "Student Counsellor near Atchutapuram",
      "Parent Counselling in Anakapalli",
      "Career Guidance for Students in Anakapalli",
      "counselling psychologist",
      "student counselling",
      "career guidance",
      "family counselling",
      "parent guidance",
      "personal development",
      "psychological counselling",
      "workshops and training",
    ],
  },

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Training", href: "/training" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ] as const,

  // Social links
  socialLinks: {},

  // Footer navigation groups
  footerNav: {
    counselling: [
      { label: "Individual Counselling", href: "/services/individual-counselling" },
      { label: "Student Counselling", href: "/services/student-counselling" },
      { label: "Career Counselling", href: "/services/career-counselling" },
      { label: "Family Counselling", href: "/services/family-counselling" },
      { label: "Parent Guidance", href: "/services/parent-guidance" },
    ],
    programs: [
      { label: "Student Development", href: "/training" },
      { label: "Career Workshops", href: "/training" },
      { label: "Parent Programs", href: "/training" },
      { label: "HRD Training", href: "/training/hrd" },
      { label: "Institutional Programs", href: "/training/schools-colleges" },
    ],
    quickLinks: [
      { label: "About", href: "/about" },
      { label: "Counsellor", href: "/about/counsellor" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Resources", href: "/resources" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },

  // Theme colors
  colors: {
    primary: "hsl(225, 70%, 15%)",
    secondary: "hsl(160, 25%, 40%)",
    accent: "hsl(35, 80%, 60%)",
    background: "hsl(0, 0%, 98%)",
    text: "hsl(220, 20%, 15%)",
    success: "hsl(150, 40%, 45%)",
  },
};

export type SiteConfig = typeof siteConfig;

// Form email subjects
export const formSubjects = {
  appointment: "New Counselling Appointment - Chetana Website",
  contact: "New General Enquiry - Chetana Website",
  career: "New Career Counselling Enquiry - Chetana Website",
  student: "New Student Counselling Enquiry - Chetana Website",
  family: "New Family Counselling Enquiry - Chetana Website",
  parent: "New Parent Guidance Enquiry - Chetana Website",
  individual: "New Individual Counselling Enquiry - Chetana Website",
  workshop: "New Workshop / Training Enquiry - Chetana Website",
  institution: "New School / College Program Enquiry - Chetana Website",
  callback: "New Callback Request - Chetana Website",
};

// Privacy note for forms
export const privacyNote =
  "Your information will be used only to respond to your counselling enquiry and will be treated respectfully and confidentially.";

// Success messages
export const successMessages = {
  appointment:
    "Thank you for contacting Chetana Psychological Counselling Centre. Your enquiry has been received and our team will contact you shortly.",
  contact: "Thank you for your enquiry. We will get back to you soon.",
  career: "Thank you for your career counselling enquiry. We will contact you shortly.",
  student: "Thank you for reaching out. We will contact you regarding student counselling shortly.",
  family: "Thank you for your enquiry. We will contact you regarding family counselling shortly.",
  workshop: "Thank you for your workshop enquiry. We will contact you shortly with program details.",
  callback: "Thank you. We will call you back at the requested time.",
};

// Error messages
export const errorMessages = {
  submit: "We couldn't submit your enquiry. Please try again or contact us directly by phone or WhatsApp.",
};