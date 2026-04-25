import Link from "next/link";
import { Calendar, Eye, Heart, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import type { Post } from "@/types/content";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <GlassCard className="h-full">
        <div className="mb-5 h-36 rounded-2xl border border-white/10" style={{ background: post.cover }} />
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-normal text-slate-50 group-hover:text-cyan-100">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1"><Calendar size={14} />{post.publishedAt}</span>
          <span className="inline-flex items-center gap-1"><Eye size={14} />{post.views}</span>
          <span className="inline-flex items-center gap-1"><Heart size={14} />{post.likes}</span>
          <span className="inline-flex items-center gap-1"><MessageCircle size={14} />{post.comments}</span>
        </div>
      </GlassCard>
    </Link>
  );
}
