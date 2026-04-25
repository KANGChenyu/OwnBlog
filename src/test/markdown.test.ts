import { describe, expect, it } from "vitest";

import { estimateReadingTime, extractHeadings, normalizeCallouts } from "@/lib/markdown";

describe("markdown helpers", () => {
  it("extracts nested headings and stable ids", () => {
    const headings = extractHeadings(`
# Main Title
## RAG 检索优化
### KNN + BM25
`);

    expect(headings).toEqual([
      { id: "main-title", level: 1, text: "Main Title" },
      { id: "rag-检索优化", level: 2, text: "RAG 检索优化" },
      { id: "knn-bm25", level: 3, text: "KNN + BM25" },
    ]);
  });

  it("estimates reading time with a minimum of one minute", () => {
    expect(estimateReadingTime("短文")).toBe(1);
    expect(estimateReadingTime("word ".repeat(650))).toBe(4);
  });

  it("normalizes custom callout blocks into markdown blockquotes", () => {
    const markdown = normalizeCallouts(`
:::tip
缓存穿透可以用布隆过滤器处理。
:::
`);

    expect(markdown).toContain("> [!TIP]");
    expect(markdown).toContain("> 缓存穿透可以用布隆过滤器处理。");
  });
});
