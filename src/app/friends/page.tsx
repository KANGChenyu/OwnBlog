import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { friends } from "@/lib/content";

export default function FriendsPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Friends" title="友情链接" description="展示已审核友链，并保留申请入口。" />
      <div className="grid gap-5 md:grid-cols-3">{friends.map((friend) => <a key={friend.name} href={friend.url}><GlassCard><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/15 text-cyan-100">{friend.logo}</span><h2 className="mt-4 font-semibold">{friend.name}</h2><p className="mt-2 text-sm leading-6 text-slate-400">{friend.description}</p><p className="mt-3 text-xs text-slate-500">站长：{friend.owner}</p></GlassCard></a>)}</div>
    </PageShell>
  );
}
