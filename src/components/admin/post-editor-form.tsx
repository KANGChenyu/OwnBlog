"use client";

import { useMemo, useState } from "react";
import type { Category, ContentStatus, Tag } from "@prisma/client";
import { MarkdownView } from "@/components/post/markdown-view";

type PostWithTags =
  | {
      id: string;
      title: string;
      slug: string;
      excerpt: string;
      content: string;
      cover: string | null;
      status: ContentStatus;
      featured: boolean;
      pinned: boolean;
      seoTitle: string | null;
      seoDescription: string | null;
      categoryId: string;
      tags: Array<{ tag: Pick<Tag, "slug"> }>;
    }
  | null;

type Props = {
  post?: PostWithTags;
  categories: Category[];
  tags: Tag[];
  action: (formData: FormData) => void | Promise<void>;
};

const initialContent = `# 新文章草稿

## 写作目标

记录一个清晰、可复用的工程问题。

:::tip
现在这篇文章会保存到 Prisma SQLite 数据库。
:::
`;

export function PostEditorForm({ post = null, categories, tags, action }: Props) {
  const [content, setContent] = useState(post?.content ?? initialContent);
  const selectedTags = new Set(post?.tags.map((item) => item.tag.slug) ?? []);
  const words = useMemo(() => content.trim().length, [content]);

  return (
    <form action={action} className="space-y-5">
      <div className="glass grid gap-4 rounded-2xl p-5 md:grid-cols-2">
        <label className="text-sm text-slate-400">
          标题
          <input name="title" required defaultValue={post?.title} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <label className="text-sm text-slate-400">
          Slug
          <input name="slug" required defaultValue={post?.slug} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <label className="text-sm text-slate-400 md:col-span-2">
          摘要
          <textarea name="excerpt" required defaultValue={post?.excerpt} className="mt-2 min-h-24 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <label className="text-sm text-slate-400">
          分类
          <select name="categoryId" required defaultValue={post?.categoryId ?? categories[0]?.id} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-400">
          状态
          <select name="status" defaultValue={post?.status ?? "DRAFT"} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none">
            <option value="DRAFT">草稿</option>
            <option value="PUBLISHED">发布</option>
          </select>
        </label>
        <label className="text-sm text-slate-400 md:col-span-2">
          封面渐变 / 图片 URL
          <input name="cover" defaultValue={post?.cover ?? ""} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <div className="md:col-span-2">
          <p className="mb-3 text-sm text-slate-400">标签</p>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <label key={tag.id} className="rounded-full border border-slate-300/15 px-3 py-2 text-sm text-slate-300">
                <input name="tagSlugs" value={tag.slug} type="checkbox" defaultChecked={selectedTags.has(tag.slug)} className="mr-2" />
                {tag.name}
              </label>
            ))}
          </div>
        </div>
        <label className="text-sm text-slate-300"><input name="featured" type="checkbox" defaultChecked={post?.featured} className="mr-2" />精选文章</label>
        <label className="text-sm text-slate-300"><input name="pinned" type="checkbox" defaultChecked={post?.pinned} className="mr-2" />置顶文章</label>
      </div>

      <div className="grid gap-5 lg:grid-cols-[.95fr_1.05fr]">
        <textarea name="content" className="min-h-[560px] rounded-2xl border border-slate-300/15 bg-slate-950/70 p-5 font-mono text-sm leading-7 text-slate-100 outline-none" value={content} onChange={(event) => setContent(event.target.value)} />
        <div className="glass min-h-[560px] overflow-auto rounded-2xl p-5">
          <div className="mb-4 flex justify-between border-b border-slate-300/10 pb-3 text-sm text-slate-400">
            <span>实时预览</span>
            <span>{words} 字符</span>
          </div>
          <MarkdownView content={content} />
        </div>
      </div>

      <div className="glass grid gap-4 rounded-2xl p-5 md:grid-cols-2">
        <label className="text-sm text-slate-400">
          SEO 标题
          <input name="seoTitle" defaultValue={post?.seoTitle ?? ""} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <label className="text-sm text-slate-400">
          SEO 描述
          <input name="seoDescription" defaultValue={post?.seoDescription ?? ""} className="mt-2 w-full rounded-xl border border-slate-300/15 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none" />
        </label>
        <button className="rounded-xl border border-cyan-300/25 bg-cyan-300/12 py-3 text-cyan-100 md:col-span-2">
          保存文章
        </button>
      </div>
    </form>
  );
}
