import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { PostCard } from "@/components/post/post-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts, tags } from "@/lib/content";
import { getTag, searchPosts } from "@/lib/content-query";

export function generateStaticParams() {
  return tags.map((tag) => ({ slug: tag.slug }));
}

export default async function TagDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tag = getTag(slug);
  if (!tag) notFound();
  const result = searchPosts(posts, { tag: slug });
  return (
    <PageShell>
      <SectionHeading eyebrow="Tag" title={`# ${tag.name}`} description="同一技术主题下的文章集合。" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{result.map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </PageShell>
  );
}
