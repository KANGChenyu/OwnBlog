import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { projects } from "@/lib/content";

export default function AdminProjectsPage() {
  return <AdminShell title="项目管理"><AdminTable title="项目列表" rows={projects.map((project) => ({ 名称: project.title, 状态: project.status, 技术栈: project.techStack.join(" / "), 更新时间: project.publishedAt }))} /></AdminShell>;
}
