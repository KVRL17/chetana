import PageWrapper from "@/components/layouts/PageWrapper";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHero } from "@/components/ui/PageHero";
import { BlogCard } from "@/components/ui/BlogCard";
import { blogData, blogCategories } from "@/data/blogData";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Counselling, Career & Wellbeing Articles",
  description: "Helpful articles about counselling, exam stress, student career guidance, parenting teenagers, relationships and work-life balance.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: "Blog" }]} />
      <PageHero eyebrow="Chetana articles" title="Ideas for wellbeing, learning, career decisions and relationships" description="Short educational articles designed to help you understand common concerns and think about useful next steps." />
      <section className="section-space"><div className="container-shell"><div className="-mx-1 mb-7 no-scrollbar flex gap-2 overflow-x-auto px-1 pb-1 sm:mb-8 sm:flex-wrap sm:overflow-visible sm:pb-0">{blogCategories.map((category) => <span key={category} className="shrink-0 rounded-full border border-primary/8 bg-white px-3.5 py-2 text-[10.5px] font-extrabold text-secondary shadow-sm sm:px-4 sm:text-xs sm:shadow-none">{category}</span>)}</div><div className="grid gap-3.5 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">{blogData.map((post) => <BlogCard key={post.id} post={post} />)}</div></div></section>
    </PageWrapper>
  );
}
