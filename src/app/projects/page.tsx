import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/project/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Projects" title="项目作品集" description="每个项目都按简历项目说明的粒度组织，突出背景、架构、难点和成果。" />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </PageShell>
  );
}
