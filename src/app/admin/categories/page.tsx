import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { categories, posts } from "@/lib/content";

export default function AdminCategoriesPage() {
  return <AdminShell title="分类管理"><AdminTable title="分类列表" rows={categories.map((item) => ({ 名称: item.name, Slug: item.slug, 文章数: posts.filter((post) => post.category === item.slug).length, 颜色: item.color }))} /></AdminShell>;
}
