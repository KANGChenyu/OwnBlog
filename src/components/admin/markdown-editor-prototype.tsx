"use client";

import { useMemo, useState } from "react";
import { MarkdownView } from "@/components/post/markdown-view";

const initial = `# 新文章草稿

## 写作目标

记录一个清晰、可复用的工程问题。

:::tip
保存草稿、发布文章和图片上传会在接入数据库与文件服务后启用。
:::

\`\`\`ts
export const status = "draft";
\`\`\`
`;

export function MarkdownEditorPrototype() {
  const [content, setContent] = useState(initial);
  const words = useMemo(() => content.trim().length, [content]);
  return (
    <div className="grid gap-5 lg:grid-cols-[.95fr_1.05fr]">
      <textarea className="min-h-[560px] rounded-2xl border border-slate-300/15 bg-slate-950/70 p-5 font-mono text-sm leading-7 text-slate-100 outline-none" value={content} onChange={(event) => setContent(event.target.value)} />
      <div className="glass min-h-[560px] overflow-auto rounded-2xl p-5">
        <div className="mb-4 flex justify-between border-b border-slate-300/10 pb-3 text-sm text-slate-400"><span>实时预览</span><span>{words} 字符</span></div>
        <MarkdownView content={content} />
      </div>
    </div>
  );
}
