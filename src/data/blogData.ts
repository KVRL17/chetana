// Educational article content for the Chetana resources section.
// Do not make medical/legal claims or guaranteed outcome statements

import { BlogPost } from "@/types";

export const blogData: BlogPost[] = [
  {
    id: "1",
    slug: "what-is-counselling",
    title: "What is Counselling and How Can It Help?",
    excerpt:
      "Understanding what counselling is and how professional guidance can support students, parents, and individuals seeking personal growth, emotional wellbeing, and clearer decision-making.",
    content: `
      <p>Counselling is a professional relationship that supports people in achieving personal, social or psychological goals. It provides a safe, confidential space to explore thoughts, feelings and behaviours with a qualified counsellor who offers guidance and practical support.</p>
      <p>The counselling process helps people develop coping strategies, improve communication, build confidence, set goals, and make informed decisions about their personal, academic, and professional lives. Whether you're a student facing academic pressure, a parent seeking guidance for your child, or an individual navigating personal challenges, counselling can provide the support you need.</p>
      <p>We focus on helping you understand yourself better, identify your strengths, overcome challenges, and move forward with confidence. Contact us to discuss how counselling might benefit you.</p>
    `,
    category: "General",
    image: "",
    author: "Chetana Team",
    publishedAt: "2026-01-15",
    readingTime: "5 min read",
  },
  {
    id: "2",
    slug: "exam-stress-management",
    title: "Managing Exam Stress: Practical Strategies for Students",
    excerpt:
      "Practical strategies for students to manage exam stress, improve concentration, build confidence, and approach examinations with a calmer, more prepared mindset.",
    content: `
      <p>Examinations can be a significant source of stress for students at all levels. Understanding how to manage this stress is crucial for both performance and wellbeing.</p>
      <p>Some practical approaches include developing a structured study schedule, practicing mindfulness and breathing exercises, ensuring adequate rest and nutrition, and breaking revision into manageable chunks. It's also important to maintain perspective - examinations are one measure of learning, not a reflection of your entire worth or future potential.</p>
      <p>If exam stress feels overwhelming, professional support is available. We help students develop personalized strategies for managing academic pressure while maintaining emotional wellbeing.</p>
    `,
    category: "Student Development",
    image: "",
    author: "Chetana Team",
    publishedAt: "2026-02-10",
    readingTime: "6 min read",
  },
  {
    id: "3",
    slug: "career-guidance-students",
    title: "Career Guidance for Students: Finding Your Path",
    excerpt:
      "How students can explore their interests, identify strengths, and make informed decisions about future careers and educational paths.",
    content: `
      <p>Choosing a career path can feel overwhelming with so many options available. The key is systematic exploration - understanding your interests, values, and strengths, and researching different career areas.</p>
      <p>We support students through career counselling that includes interests assessment, stream and course selection guidance, higher education planning, and vocational exploration. Starting these conversations early - even in Class 8 or 9 - can make the transition to higher education smoother.</p>
      <p>Our approach helps students make career decisions with clarity, confidence, and a practical roadmap for the future.</p>
    `,
    category: "Career Guidance",
    image: "",
    author: "Chetana Team",
    publishedAt: "2026-03-01",
    readingTime: "7 min read",
  },
  {
    id: "4",
    slug: "parenting-teens",
    title: "Understanding Adolescents: A Guide for Parents",
    excerpt:
      "How parents can support teenagers through the challenges of adolescence while building stronger relationships and communication.",
    content: `
      <p>Adolescence is a time of significant change - physically, emotionally, and socially. Understanding these changes helps parents provide the right support while maintaining a strong parent-child relationship.</p>
      <p>Key areas include open communication, respecting growing autonomy, managing academic expectations, supporting emotional wellbeing, and navigating peer relationships. The goal is to create an environment where teenagers feel heard, respected, and supported as they grow into adulthood.</p>
      <p>Professional parent guidance is available if you're facing specific challenges or want to improve family dynamics.</p>
    `,
    category: "Parenting",
    image: "",
    author: "Chetana Team",
    publishedAt: "2026-04-12",
    readingTime: "6 min read",
  },
  {
    id: "5",
    slug: "work-life-balance",
    title: "Achieving Work-Life Balance in Your Professional Life",
    excerpt:
      "Strategies for working professionals to manage stress, set boundaries, and prioritize wellbeing while building their careers.",
    content: `
      <p>Work-life balance is not about equal time division but about feeling fulfilled and energized in both professional and personal domains. Key strategies include setting clear boundaries, prioritizing tasks, scheduling regular breaks, and maintaining supportive relationships.</p>
      <p>Signs that you might need better balance include constant fatigue, decreased productivity, relationship strain, and loss of interest in activities you once enjoyed. Professional support can help you develop personalized strategies.</p>
      <p>We work with professionals to identify stress triggers, build emotional regulation skills, and create sustainable approaches to work-life integration.</p>
    `,
    category: "Personal Development",
    image: "",
    author: "Chetana Team",
    publishedAt: "2026-05-20",
    readingTime: "5 min read",
  },
];

export const blogCategories = [
  "General",
  "Student Development",
  "Career Guidance",
  "Parenting",
  "Personal Development",
];