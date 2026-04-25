import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills, timeline } from "@/lib/content";

export default function AboutPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="About" title="关于 KCY" description="专注 Java 后端、RAG 应用、大模型工程化和全栈产品体验的开发者。" />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <GlassCard>
          <div className="mx-auto grid h-36 w-36 place-items-center rounded-3xl border border-cyan-300/25 bg-cyan-300/10 text-5xl font-semibold text-cyan-100">K</div>
          <p className="mt-6 leading-8 text-slate-300">我喜欢把复杂系统拆成可以解释、可以验证、可以持续演进的工程结构。这里记录项目实践、技术复盘和学习路径。</p>
        </GlassCard>
        <GlassCard>
          <h2 className="text-xl font-semibold">技能树</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {skills.map((skill) => <div key={skill.name}><div className="flex justify-between text-sm"><span>{skill.name}</span><span className="text-cyan-200">{skill.level}%</span></div><div className="mt-2 h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${skill.level}%` }} /></div></div>)}
          </div>
        </GlassCard>
      </div>
      <div className="mt-6 grid gap-4">
        {timeline.map((item) => <GlassCard key={item.title}><p className="text-cyan-200">{item.date}</p><h3 className="mt-2 font-semibold">{item.title}</h3><p className="mt-2 text-sm text-slate-400">{item.description}</p></GlassCard>)}
      </div>
    </PageShell>
  );
}
