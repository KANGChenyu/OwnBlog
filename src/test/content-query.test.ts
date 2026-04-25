import { describe, expect, it } from "vitest";

import { posts, projects } from "@/lib/content";
import {
  getArchiveGroups,
  getPostBySlug,
  getRelatedPosts,
  searchContent,
  searchPosts,
} from "@/lib/content-query";

describe("content query helpers", () => {
  it("searches posts by title, excerpt, body, category, and tags", () => {
    expect(searchPosts(posts, { keyword: "RAG" }).map((post) => post.slug)).toContain(
      "rag-knowledge-base",
    );
    expect(searchPosts(posts, { keyword: "Kafka" }).map((post) => post.slug)).toContain(
      "kafka-document-pipeline",
    );
    expect(searchPosts(posts, { keyword: "面试" }).map((post) => post.slug)).toContain(
      "spring-security-jwt",
    );
  });

  it("filters posts by category", () => {
    const result = searchPosts(posts, { category: "rag" });

    expect(result.map((post) => post.slug)).toEqual(["rag-knowledge-base"]);
  });

  it("filters posts by tag", () => {
    const result = searchPosts(posts, { tag: "vector-search" });

    expect(result.map((post) => post.slug)).toEqual(["rag-knowledge-base", "elasticsearch-hybrid-search"]);
  });

  it("returns related posts without the current article", () => {
    const current = getPostBySlug("rag-knowledge-base");
    expect(current).toBeDefined();

    const related = getRelatedPosts(current!, posts, 3);

    expect(related).toHaveLength(3);
    expect(related.map((post) => post.slug)).not.toContain("rag-knowledge-base");
    expect(related[0].tags.some((tag) => current!.tags.includes(tag))).toBe(true);
  });

  it("searches across posts and projects", () => {
    const result = searchContent("向量", posts, projects);

    expect(result.some((item) => item.type === "post" && item.slug === "rag-knowledge-base")).toBe(
      true,
    );
    expect(result.some((item) => item.type === "project" && item.slug === "rag-qa-system")).toBe(
      true,
    );
  });

  it("groups archives by year and month", () => {
    const groups = getArchiveGroups(posts);

    expect(groups[0].year).toBe(2026);
    expect(groups[0].months[0].items.length).toBeGreaterThan(0);
  });
});
