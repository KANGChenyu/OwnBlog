import Link from "next/link";
import type { ReactNode } from "react";
import { LayoutDashboard } from "lucide-react";

const nav = [
  ["Dashboard", "/admin"],
  ["文章", "/admin/posts"],
  ["分类", "/admin/categories"],
  ["标签", "/admin/tags"],
  ["评论", "/admin/comments"],
  ["项目", "/admin/projects"],
  ["留言", "/admin/guestbook"],
  ["友链", "/admin/friends"],
  ["文件", "/admin/files"],
  ["设置", "/admin/settings"],
];

export function AdminShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 md:grid-cols-[240px_1fr] md:px-6">
        <aside className="glass rounded-2xl p-4 md:sticky md:top-5 md:h-[calc(100vh-2.5rem)]">
          <Link href="/" className="mb-6 flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-300/15 text-cyan-100"><LayoutDashboard size={18} /></span>
            Nebula Admin
          </Link>
          <nav className="grid gap-1">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/8 hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Control Center</p>
              <h1 className="mt-2 text-2xl font-semibold md:text-4xl">{title}</h1>
            </div>
            <Link href="/admin/login" className="rounded-full border border-slate-300/15 px-4 py-2 text-sm text-slate-300 hover:bg-white/8">
              登录
            </Link>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}
