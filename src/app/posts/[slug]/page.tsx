import { notFound } from "next/navigation";
import { Calendar, Eye, Heart } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { MarkdownView } from "@/components/post/markdown-view";
import { PostCard } from "@/components/post/post-card";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { posts } from "@/lib/content";
import { getPostBySlug, getRelatedPosts } from "@/lib/content-query";
import { estimateReadingTime, extractHeadings } from "@/lib/markdown";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return { title: post?.seoTitle ?? "文章", description: post?.seoDescription };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const headings = extractHeadings(post.content).filter((heading) => heading.level > 1);
  const related = getRelatedPosts(post, posts, 3);
  return (
    <PageShell>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-400" />
      <div className="grid gap-8 lg:grid-cols-[220px_1fr_260px]">
        <aside className="hidden lg:block">
          <GlassCard className="sticky top-24">
            <p className="mb-3 text-sm font-semibold text-slate-200">目录</p>
            <nav className="grid gap-2 text-sm text-slate-400">
              {headings.map((heading) => <a key={heading.id} href={`#${heading.id}`} className="hover:text-cyan-100">{heading.text}</a>)}
            </nav>
          </GlassCard>
        </aside>
        <article>
          <div className="mb-8 rounded-3xl border border-white/10 p-6 md:p-10" style={{ background: post.cover }}>
            <div className="flex flex-wrap gap-2">{post.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-normal text-white md:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-slate-200">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2"><Calendar size={16} />{post.publishedAt}</span>
              <span>{estimateReadingTime(post.content)} min read</span>
              <span className="inline-flex items-center gap-2"><Eye size={16} />{post.views}</span>
              <span className="inline-flex items-center gap-2"><Heart size={16} />{post.likes}</span>
            </div>
          </div>
          <GlassCard className="p-6 md:p-9"><MarkdownView content={post.content} /></GlassCard>
        </article>
        <aside className="space-y-5">
          <GlassCard>
            <p className="text-sm text-slate-400">作者</p>
            <h3 className="mt-2 text-xl font-semibold">KCY</h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">专注 Java 后端、RAG 应用和全栈产品体验。</p>
          </GlassCard>
          <div className="grid gap-4">
            {related.map((item) => <PostCard key={item.slug} post={item} />)}
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
