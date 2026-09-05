import Link from "next/link";
import { ArrowUpRight, BookOpenText } from "lucide-react";
import { BlogPost } from "@/types";

export const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link href={`/blog/${post.slug}`} className="premium-card premium-card-hover group flex h-full flex-col overflow-hidden">
    <div className="relative flex aspect-[16/6.8] items-end overflow-hidden bg-[linear-gradient(135deg,#173f45_0%,#5d8079_70%,#c59a61_140%)] p-4.5 text-white sm:aspect-[16/8.5] sm:p-5">
      <div className="soft-grid absolute inset-0 opacity-10" />
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-[0.8rem] border border-white/12 bg-white/10 sm:right-5 sm:top-5 sm:h-10 sm:w-10 sm:rounded-xl"><BookOpenText className="h-4 w-4 sm:h-4.5 sm:w-4.5" /></div>
      <div className="relative text-[9.5px] font-extrabold uppercase tracking-[.12em] text-white/75 sm:text-[11px]">{post.category}</div>
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <div className="text-[10.5px] font-semibold text-muted sm:text-xs">{post.readingTime}</div>
      <h3 className="mt-2.5 text-[1.08rem] font-extrabold leading-tight text-primary transition group-hover:text-secondary sm:mt-3 sm:text-xl">{post.title}</h3>
      <p className="mt-2.5 line-clamp-3 text-[12.5px] leading-5.5 text-muted sm:mt-3 sm:text-sm sm:leading-6">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between border-t border-primary/7 pt-3.5 text-[10.5px] font-extrabold text-secondary sm:mt-auto sm:border-0 sm:pt-6 sm:text-xs">
        Read article <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </div>
  </Link>
);
