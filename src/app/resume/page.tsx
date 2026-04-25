import { Download, Printer } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, skills } from "@/lib/content";

export default function ResumePage() {
  return (
    <PageShell>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SectionHeading eyebrow="Resume" title="在线简历" description="为招聘和项目复盘场景设计的结构化简历页。" />
        <div className="flex gap-3"><ButtonLink href="#" variant="ghost"><Printer size={16} className="mr-2" />打印</ButtonLink><ButtonLink href="#" variant="ghost"><Download size={16} className="mr-2" />PDF</ButtonLink></div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <GlassCard><h2 className="text-xl font-semibold">基本信息</h2><p className="mt-4 leading-8 text-slate-300">KCY · Backend Developer · RAG Applications · Full-stack Builder</p><p className="mt-3 text-slate-400">GitHub / Email / WeChat QR 位置已预留。</p></GlassCard>
        <GlassCard><h2 className="text-xl font-semibold">技术技能</h2><div className="mt-4 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill.name} className="rounded-full border border-slate-300/15 px-3 py-1 text-sm text-slate-300">{skill.name}</span>)}</div></GlassCard>
      </div>
      <GlassCard className="mt-6"><h2 className="text-xl font-semibold">项目经历</h2><div className="mt-5 grid gap-4">{projects.map((project) => <div key={project.slug} className="rounded-2xl border border-slate-300/10 p-4"><h3 className="font-semibold">{project.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{project.summary}</p></div>)}</div></GlassCard>
    </PageShell>
  );
}
