import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function AdminLoginPage() {
  return (
    <AdminShell title="管理员登录">
      <div className="mx-auto max-w-md">
        <GlassCard>
          <label className="text-sm text-slate-400">邮箱</label>
          <input className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 outline-none" defaultValue="admin@example.com" />
          <label className="mt-4 block text-sm text-slate-400">密码</label>
          <input type="password" className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 outline-none" defaultValue="123456" />
          <button className="mt-5 w-full rounded-full border border-cyan-300/25 bg-cyan-300/12 px-5 py-3 text-cyan-100">登录控制台</button>
          <p className="mt-4 text-xs leading-5 text-slate-500">P0 为 UI 原型，真实 Auth.js 权限控制将在数据库阶段接入。</p>
        </GlassCard>
      </div>
    </AdminShell>
  );
}
