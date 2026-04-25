import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { PostCard } from "@/components/post/post-card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, posts, tags } from "@/lib/content";
import { searchPosts } from "@/lib/content-query";

export default async function PostsPage({ searchParams }: { searchParams: Promise<{ category?: string; tag?: string; q?: string; sort?: "latest" | "views" | "likes" | "comments" }> }) {
  const params = await searchParams;
  const result = searchPosts(posts, { keyword: params.q, category: params.category, tag: params.tag, sort: params.sort });
  return (
    <PageShell>
      <SectionHeading eyebrow="Posts" title="技术文章" description="支持关键词、分类、标签和排序筛选，P0 使用 URL 查询参数驱动。" />
      <div className="mb-8 grid gap-4 rounded-2xl border border-slate-300/10 bg-slate-900/35 p-4">
        <div className="flex flex-wrap gap-2">
          <Link href="/posts"><Badge tone="slate">全部</Badge></Link>
          {categories.map((category) => <Link key={category.slug} href={`/posts?category=${category.slug}`}><Badge>{category.name}</Badge></Link>)}
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => <Link key={tag.slug} href={`/posts?tag=${tag.slug}`}><Badge tone="violet">{tag.name}</Badge></Link>)}
        </div>
        <div className="flex flex-wrap gap-2">
          {(["latest", "views", "likes", "comments"] as const).map((sort) => <Link key={sort} href={`/posts?sort=${sort}`}><Badge tone="pink">{sort}</Badge></Link>)}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {result.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </PageShell>
  );
}
