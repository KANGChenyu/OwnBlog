import Image from "next/image";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { PostCard } from "@/components/post/post-card";
import { ProjectCard } from "@/components/project/project-card";
import { getFeaturedPosts } from "@/lib/content-query";
import { posts, projects, skills, timeline } from "@/lib/content";

export default function Home() {
  const featured = getFeaturedPosts(4);
  const metrics = [
    ["文章", posts.length],
    ["项目", projects.length],
    ["技术标签", skills.length],
    ["阅读量", posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()],
  ];

  return (
    <PageShell>
      <section className="grid items-center gap-10 py-8 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} /> Backend Developer · RAG Builder · Full-stack Explorer
          </div>
          <h1 className="neon-text mt-6 max-w-4xl text-4xl font-semibold tracking-normal md:text-6xl">
            构建智能系统，沉淀技术思考。
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Hi, I&apos;m KCY. A Backend Developer building intelligent systems, RAG applications and beautiful digital experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/posts">查看文章 <ArrowRight className="ml-2" size={16} /></ButtonLink>
            <ButtonLink href="/projects" variant="ghost">查看作品</ButtonLink>
            <ButtonLink href="/resume" variant="ghost"><Download className="mr-2" size={16} />简历</ButtonLink>
          </div>
        </div>
        <GlassCard className="floaty overflow-hidden p-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/blog-preview.png" alt="Nebula Blog visual preview" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-cyan-500/10" />
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
              <p className="font-mono text-xs text-cyan-100">const focus = [&quot;RAG&quot;, &quot;Java&quot;, &quot;Next.js&quot;];</p>
            </div>
          </div>
        </GlassCard>
      </section>

      <section className="py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map(([label, value]) => (
            <GlassCard key={label.toString()}>
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-50">{value}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Tech Stack" title="技术栈雷达" description="后端工程、AI 应用、搜索系统和全栈交互是当前的主航道。" />
        <div className="grid gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <GlassCard key={skill.name}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-cyan-200">{skill.level}%</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{skill.description}</p>
              <div className="mt-4 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${skill.level}%` }} />
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Featured" title="精选文章" description="从工程实践到系统复盘，记录可复用的技术判断。" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Portfolio" title="项目作品集" description="偏工程落地的项目说明，适合放进简历和面试项目复盘。" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="py-12">
        <SectionHeading eyebrow="Timeline" title="成长时间轴" />
        <div className="grid gap-4">
          {timeline.map((item) => (
            <GlassCard key={`${item.date}-${item.title}`} className="grid gap-3 md:grid-cols-[120px_1fr]">
              <p className="text-cyan-200">{item.date}</p>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
