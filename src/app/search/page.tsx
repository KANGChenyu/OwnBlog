import Link from "next/link";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts, projects } from "@/lib/content";
import { searchContent } from "@/lib/content-query";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "RAG" } = await searchParams;
  const results = searchContent(q, posts, projects);
  return (
    <PageShell>
      <SectionHeading eyebrow="Search" title="全站搜索" description="命令面板风格搜索，覆盖文章标题、摘要、正文、标签、分类和项目。" />
      <GlassCard><form><input name="q" defaultValue={q} className="w-full rounded-2xl border border-cyan-300/20 bg-slate-950/70 px-5 py-4 text-lg outline-none" placeholder="搜索 RAG、Redis、向量、项目..." /></form></GlassCard>
      <div className="mt-6 grid gap-4">{results.map((item) => <Link href={item.url} key={`${item.type}-${item.slug}`}><GlassCard><p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{item.type}</p><h2 className="mt-2 text-xl font-semibold">{item.title}</h2><p className="mt-2 text-sm text-slate-400">{item.excerpt}</p></GlassCard></Link>)}</div>
    </PageShell>
  );
}
