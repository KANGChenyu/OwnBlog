import { notFound } from "next/navigation";
import { Github, Link as LinkIcon } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content";
import { getProjectBySlug } from "@/lib/content-query";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <PageShell>
      <section className="rounded-3xl border border-white/10 p-8 md:p-12" style={{ background: project.cover }}>
        <Badge tone="pink">{project.status}</Badge>
        <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-normal md:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-slate-200">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.techStack.map((tech) => <Badge key={tech} tone="slate">{tech}</Badge>)}
        </div>
      </section>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <GlassCard>
            <SectionHeading eyebrow="Background" title="项目背景" />
            <p className="text-slate-300 leading-8">{project.content}</p>
          </GlassCard>
          <GlassCard>
            <SectionHeading eyebrow="Highlights" title="核心亮点" />
            <div className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((item) => <div key={item} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/8 p-4 text-sm text-slate-200">{item}</div>)}
            </div>
          </GlassCard>
          <GlassCard>
            <SectionHeading eyebrow="Architecture" title="技术架构" />
            <p className="leading-8 text-slate-300">采用分层架构组织 API、业务服务、异步任务、搜索索引和前端展示。P0 页面保留系统架构图区域，后续可接入真实截图与 ER 图。</p>
          </GlassCard>
        </div>
        <aside className="space-y-4">
          <a href={project.github} className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-300/35"><Github size={18} /> GitHub 仓库</a>
          <a href={project.demo} className="glass flex items-center gap-3 rounded-2xl p-4 hover:border-cyan-300/35"><LinkIcon size={18} /> 在线预览</a>
          <GlassCard><p className="text-sm text-slate-400">发布时间</p><p className="mt-2">{project.publishedAt}</p></GlassCard>
        </aside>
      </div>
    </PageShell>
  );
}
