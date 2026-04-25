import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { guestbookMessages } from "@/lib/content";

export default function GuestbookPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Guestbook" title="留言板" description="P0 展示留言体验和审核模型，后续接入验证码、审核和后台回复。" />
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <GlassCard><h2 className="text-xl font-semibold">留下想法</h2><input className="mt-5 w-full rounded-xl border border-slate-300/15 bg-slate-950/60 px-4 py-3 text-sm outline-none" placeholder="昵称" /><textarea className="mt-3 min-h-32 w-full rounded-xl border border-slate-300/15 bg-slate-950/60 px-4 py-3 text-sm outline-none" placeholder="留言内容" /><button className="mt-3 rounded-full border border-cyan-300/25 bg-cyan-300/12 px-5 py-2 text-sm">提交审核</button></GlassCard>
        <div className="grid gap-4">{guestbookMessages.map((message) => <GlassCard key={`${message.name}-${message.createdAt}`}><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-violet-300/15">{message.avatar}</span><div><h3 className="font-semibold">{message.name}</h3><p className="text-xs text-slate-500">{message.createdAt}</p></div></div><p className="mt-4 text-slate-300">{message.content}</p></GlassCard>)}</div>
      </div>
    </PageShell>
  );
}
