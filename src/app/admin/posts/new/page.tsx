import { MarkdownEditorPrototype } from "@/components/admin/markdown-editor-prototype";
import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function NewPostPage() {
  return (
    <AdminShell title="新建文章">
      <GlassCard className="mb-5 grid gap-4 md:grid-cols-3"><input className="rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 outline-none" placeholder="标题" /><input className="rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 outline-none" placeholder="Slug" /><button className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">保存草稿</button></GlassCard>
      <MarkdownEditorPrototype />
    </AdminShell>
  );
}
