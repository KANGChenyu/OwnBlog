import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { normalizeCallouts, slugifyHeading } from "@/lib/markdown";

export function MarkdownView({ content }: { content: string }) {
  return (
    <article className="prose-nebula">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => <h1 id={slugifyHeading(String(children))}>{children}</h1>,
          h2: ({ children }) => <h2 id={slugifyHeading(String(children))}>{children}</h2>,
          h3: ({ children }) => <h3 id={slugifyHeading(String(children))}>{children}</h3>,
        }}
      >
        {normalizeCallouts(content)}
      </ReactMarkdown>
    </article>
  );
}
