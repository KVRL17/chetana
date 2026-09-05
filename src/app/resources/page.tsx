import Link from "next/link";
import { ArrowRight, BookOpenText, Compass, GraduationCap, HeartHandshake, Sparkles } from "lucide-react";
import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogData } from "@/data/blogData";
import { PamphletGallery } from "@/components/common/PamphletGallery";

const topics = [
  { icon: Sparkles, title: "Counselling basics", copy: "Understand what counselling is and when guidance may be useful." },
  { icon: GraduationCap, title: "Student development", copy: "Academic pressure, motivation, exam stress and study wellbeing." },
  { icon: Compass, title: "Career guidance", copy: "Interest, strengths, streams, courses and future planning." },
  { icon: HeartHandshake, title: "Parents & relationships", copy: "Communication, adolescence, expectations and family support." },
];

export default function ResourcesPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Resources" }]} />
      <PageHero eyebrow="Resources" title="Clear, practical reading for common questions and life decisions" description="Explore short articles on counselling, student wellbeing, career planning, parenting and personal development." aside={<div className="rounded-[1.4rem] bg-primary p-5 text-white sm:rounded-[1.7rem] sm:p-7"><BookOpenText className="h-6 w-6 text-accent" /><h2 className="mt-5 text-2xl font-extrabold">Read at your own pace</h2><p className="mt-3 text-sm leading-6 text-white/65">These articles are educational resources and do not replace individual assessment or professional medical care.</p><Link href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-white">Browse all articles <ArrowRight className="h-4 w-4" /></Link></div>} />

      <section className="section-space pb-0"><div className="container-shell grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">{topics.map(({icon:Icon,title,copy}) => <div key={title} className="rounded-[1.15rem] border border-primary/8 bg-white p-4 shadow-[0_10px_30px_rgba(23,63,69,.035)] sm:rounded-[1.4rem] sm:p-5 sm:shadow-none"><Icon className="h-4.5 w-4.5 text-secondary sm:h-5 sm:w-5" /><h2 className="mt-3 text-[13px] font-extrabold leading-tight text-primary sm:mt-4 sm:text-base">{title}</h2><p className="mt-1.5 text-[11px] leading-4.5 text-muted sm:mt-2 sm:text-sm sm:leading-6">{copy}</p></div>)}</div></section>

      <PamphletGallery />

      <section className="section-space"><div className="container-shell"><div className="mb-7 flex items-end justify-between gap-6 text-left sm:mb-9"><div><div className="eyebrow mb-4">Latest reading</div><h2 className="section-title">Featured articles</h2></div><Link href="/blog" className="hidden items-center gap-2 text-sm font-extrabold text-primary sm:inline-flex">View all <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">{blogData.map((post) => <BlogCard key={post.id} post={post} />)}</div></div></section>
    </PageWrapper>
  );
}
