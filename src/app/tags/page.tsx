import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts, tags } from "@/lib/content";

export default function TagsPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Tags" title="标签云" description="从技术关键词进入文章集合。" />
      <GlassCard className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <a key={tag.slug} href={`/tags/${tag.slug}`} className="transition hover:-translate-y-1">
            <Badge tone="violet">{tag.name} · {posts.filter((post) => post.tags.includes(tag.slug)).length}</Badge>
          </a>
        ))}
      </GlassCard>
    </PageShell>
  );
}
