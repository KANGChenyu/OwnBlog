import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function AdminSettingsPage() {
  return <AdminShell title="系统设置"><GlassCard className="grid gap-4 md:grid-cols-2">{["站点名称", "站点描述", "作者名称", "GitHub", "邮箱", "默认主题"].map((label) => <label key={label} className="text-sm text-slate-400">{label}<input className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" defaultValue={label === "站点名称" ? "Nebula Blog" : ""} /></label>)}<button className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 py-3 text-cyan-100 md:col-span-2">保存设置</button></GlassCard></AdminShell>;
}
