import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { PostCard } from "@/components/post/post-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, posts } from "@/lib/content";
import { getCategory, searchPosts } from "@/lib/content-query";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const result = searchPosts(posts, { category: slug });
  return (
    <PageShell>
      <SectionHeading eyebrow="Category" title={category.name} description={category.description} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{result.map((post) => <PostCard key={post.slug} post={post} />)}</div>
    </PageShell>
  );
}
