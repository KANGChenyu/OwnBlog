import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts } from "@/lib/content";
import { getArchiveGroups } from "@/lib/content-query";

export default function ArchivesPage() {
  const groups = getArchiveGroups(posts);
  return (
    <PageShell>
      <SectionHeading eyebrow="Archives" title="文章归档" description="按年份和月份回看技术沉淀轨迹。" />
      <div className="grid gap-5">
        {groups.map((group) => <GlassCard key={group.year}><h2 className="text-2xl font-semibold text-cyan-100">{group.year}</h2>{group.months.map((month) => <div key={month.month} className="mt-5"><h3 className="text-sm text-slate-400">{month.month} 月 · {month.items.length} 篇</h3><div className="mt-3 grid gap-2">{month.items.map((post) => <Link key={post.slug} href={`/posts/${post.slug}`} className="rounded-xl border border-slate-300/10 px-4 py-3 text-sm hover:bg-white/6">{post.publishedAt} · {post.title}</Link>)}</div></div>)}</GlassCard>)}
      </div>
    </PageShell>
  );
}
