import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import type { Project } from "@/types/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <GlassCard className="h-full">
      <div className="mb-5 h-40 rounded-2xl border border-white/10" style={{ background: project.cover }} />
      <div className="flex items-center justify-between gap-3">
        <Badge tone={project.status === "building" ? "pink" : "cyan"}>{project.status}</Badge>
        <div className="flex gap-2 text-slate-400">
          <a href={project.github} aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
          <a href={project.demo} aria-label="Demo" className="hover:text-white"><ExternalLink size={18} /></a>
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-4 block text-xl font-semibold tracking-normal text-slate-50 hover:text-cyan-100">{project.title}</Link>
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => <Badge key={tech} tone="slate">{tech}</Badge>)}
      </div>
    </GlassCard>
  );
}
