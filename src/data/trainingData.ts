// Training & workshops programs data
import { TrainingProgram } from "@/types";

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "1",
    title: "Student Development Programs",
    slug: "student-development",
    description:
      "Comprehensive student development programs for schools and colleges focusing on study skills, motivation, examination stress management, goal setting, and personal development.",
    shortDescription:
      "Study skills, motivation, stress management and goal setting for students.",
    image: "",
    category: "Schools & Colleges",
  },
  {
    id: "2",
    title: "Career Guidance Workshops",
    slug: "career-guidance-workshops",
    description:
      "Workshops for students, parents and educators on career exploration, stream selection, course planning, interest identification, and future pathway planning.",
    shortDescription: "Career exploration, stream selection and pathway planning.",
    image: "",
    category: "Schools & Colleges",
  },
  {
    id: "3",
    title: "Parent Awareness Programs",
    slug: "parent-awareness",
    description:
      "Workshops for parents covering adolescent behaviour, communication strategies, managing academic expectations, career guidance, and building stronger parent-child relationships.",
    shortDescription:
      "Understanding adolescents, communication, expectations and relationships.",
    image: "",
    category: "Schools & Colleges",
  },
  {
    id: "4",
    title: "Teacher Training",
    slug: "teacher-training",
    description:
      "Professional development for teachers and educators on student engagement, classroom management, motivation techniques, identifying student concerns, and supporting diverse learning needs.",
    shortDescription: "Student engagement, classroom management and motivation techniques.",
    image: "",
    category: "Schools & Colleges",
  },
  {
    id: "5",
    title: "Communication Skills Training",
    slug: "communication-skills",
    description:
      "Training programs on effective communication, interpersonal skills, active listening, conflict resolution, and building confidence in personal and professional interactions.",
    shortDescription:
      "Interpersonal skills, active listening and confident interaction.",
    image: "",
    category: "HRD Training",
  },
  {
    id: "6",
    title: "Leadership Development",
    slug: "leadership-development",
    description:
      "Leadership development programs focusing on decision-making, team management, motivation, emotional intelligence, and building effective leadership skills for professionals and organizations.",
    shortDescription: "Decision-making, team management and emotional intelligence.",
    image: "",
    category: "HRD Training",
  },
  {
    id: "7",
    title: "Stress Management Programs",
    slug: "stress-management",
    description:
      "Workshops on stress identification, management techniques, burnout prevention, work-life balance, and building resilience for both students and working professionals.",
    shortDescription: "Stress identification, resilience and work-life balance.",
    image: "",
    category: "HRD Training",
  },
  {
    id: "8",
    title: "Emotional Intelligence Training",
    slug: "emotional-intelligence",
    description:
      "Programs on emotional intelligence, self-awareness, empathy, emotional regulation, social awareness, and building stronger relationships in personal and professional contexts.",
    shortDescription: "Self-awareness, empathy and relationship building.",
    image: "",
    category: "HRD Training",
  },
  {
    id: "9",
    title: "Exam Stress Management",
    slug: "exam-stress-management",
    description:
      "Specialized programs for educational institutions addressing exam stress, time management, preparation strategies, maintaining motivation, and supporting student wellbeing during examination periods.",
    shortDescription: "Exam preparation, time management and wellbeing support.",
    image: "",
    category: "Schools & Colleges",
  },
  {
    id: "10",
    title: "Conflict Resolution Training",
    slug: "conflict-resolution",
    description:
      "Workshops on conflict resolution, negotiation skills, dealing with difficult situations, building consensus, and maintaining healthy professional relationships.",
    shortDescription: "Negotiation, consensus and difficult situation management.",
    image: "",
    category: "HRD Training",
  },
  {
    id: "11",
    title: "Decision Making & Goal Setting",
    slug: "decision-making",
    description:
      "Training programs focusing on effective decision-making frameworks, critical thinking, goal setting methodologies, action planning, and achieving personal and professional objectives.",
    shortDescription: "Critical thinking, frameworks and action planning.",
    image: "",
    category: "Student Development",
  },
  {
    id: "12",
    title: "Motivation Programs",
    slug: "motivation-programs",
    description:
      "Engaging motivation sessions for students, employees and teams focusing on building enthusiasm, overcoming obstacles, maintaining momentum, and achieving peak performance.",
    shortDescription: "Building enthusiasm, momentum and peak performance.",
    image: "",
    category: "Student Development",
  },
];

export const trainingCategories = [
  { id: "all", name: "All Programs" },
  { id: "Schools & Colleges", name: "Schools & Colleges" },
  { id: "HRD Training", name: "HRD Training" },
  { id: "Student Development", name: "Student Development" },
];

export const getTrainingByCategory = (category: string) => {
  if (category === "all" || !category) return trainingPrograms;
  return trainingPrograms.filter((p) => p.category === category);
};