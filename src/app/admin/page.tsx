import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { posts, projects, guestbookMessages } from "@/lib/content";

export default function AdminPage() {
  const metrics = [
    ["总文章数", posts.length],
    ["总阅读量", posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()],
    ["项目数", projects.length],
    ["留言数", guestbookMessages.length],
  ];
  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-4 md:grid-cols-4">{metrics.map(([label, value]) => <GlassCard key={label.toString()}><p className="text-sm text-slate-400">{label}</p><p className="mt-2 text-3xl font-semibold">{value}</p></GlassCard>)}</div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <GlassCard><h2 className="text-xl font-semibold">访问趋势</h2><div className="mt-6 flex h-56 items-end gap-3">{[42, 68, 54, 88, 76, 96, 112].map((value) => <div key={value} className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-400/35 to-violet-400/75" style={{ height: `${value}%` }} />)}</div></GlassCard>
        <GlassCard><h2 className="text-xl font-semibold">热门文章</h2><div className="mt-4 grid gap-3">{posts.slice(0, 5).map((post) => <div key={post.slug} className="flex justify-between rounded-xl border border-slate-300/10 p-3 text-sm"><span>{post.title}</span><span className="text-cyan-200">{post.views}</span></div>)}</div></GlassCard>
      </div>
    </AdminShell>
  );
}
