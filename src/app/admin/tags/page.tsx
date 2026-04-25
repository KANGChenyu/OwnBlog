import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { posts, tags } from "@/lib/content";

export default function AdminTagsPage() {
  return <AdminShell title="标签管理"><AdminTable title="标签列表" rows={tags.map((item) => ({ 名称: item.name, Slug: item.slug, 文章数: posts.filter((post) => post.tags.includes(item.slug)).length, 颜色: item.color }))} /></AdminShell>;
}
