import Link from "next/link";
import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { posts } from "@/lib/content";

export default function AdminPostsPage() {
  return (
    <AdminShell title="文章管理">
      <div className="mb-4"><Link href="/admin/posts/new" className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">新建文章</Link></div>
      <AdminTable title="文章列表" rows={posts.map((post) => ({ 标题: post.title, 分类: post.category, 状态: post.status, 阅读: post.views, 更新: post.updatedAt }))} />
    </AdminShell>
  );
}
