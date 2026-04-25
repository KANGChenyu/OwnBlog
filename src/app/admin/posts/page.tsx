import Link from "next/link";
import { deletePostAction } from "@/app/admin/posts/actions";
import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { getAdminPosts } from "@/lib/post-repository";

export default async function AdminPostsPage() {
  const posts = await getAdminPosts();

  return (
    <AdminShell title="文章管理">
      <div className="mb-4">
        <Link href="/admin/posts/new" className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
          新建文章
        </Link>
      </div>
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="text-slate-500">
              <tr>
                {["标题", "分类", "状态", "阅读", "更新", "操作"].map((header) => (
                  <th key={header} className="border-b border-slate-300/10 px-3 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="text-slate-300">
                  <td className="border-b border-slate-300/8 px-3 py-3">{post.title}</td>
                  <td className="border-b border-slate-300/8 px-3 py-3">{post.category.name}</td>
                  <td className="border-b border-slate-300/8 px-3 py-3">{post.status}</td>
                  <td className="border-b border-slate-300/8 px-3 py-3">{post.views}</td>
                  <td className="border-b border-slate-300/8 px-3 py-3">{post.updatedAt.toISOString().slice(0, 10)}</td>
                  <td className="border-b border-slate-300/8 px-3 py-3">
                    <div className="flex items-center gap-3">
                      <Link href={`/admin/posts/${post.id}/edit`} className="text-cyan-200">
                        编辑
                      </Link>
                      <form action={deletePostAction.bind(null, post.id)}>
                        <button className="text-pink-200">删除</button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </AdminShell>
  );
}
