import { describe, expect, it } from "vitest";

import { mapDbPostToPost } from "@/lib/post-mapper";

describe("post mapper", () => {
  it("maps a Prisma post row into the public Post shape", () => {
    const post = mapDbPostToPost({
      id: "post_1",
      title: "Database backed post",
      slug: "database-backed-post",
      excerpt: "Saved from admin",
      content: "# Hello",
      cover: null,
      status: "PUBLISHED",
      featured: true,
      pinned: false,
      views: 42,
      likes: 7,
      seoTitle: null,
      seoDescription: null,
      createdAt: new Date("2026-04-24T00:00:00.000Z"),
      updatedAt: new Date("2026-04-25T00:00:00.000Z"),
      publishedAt: new Date("2026-04-24T00:00:00.000Z"),
      author: { name: "KCY" },
      category: { slug: "rag" },
      tags: [{ tag: { slug: "rag" } }, { tag: { slug: "llm" } }],
      comments: [{ id: "comment_1" }, { id: "comment_2" }],
    });

    expect(post).toMatchObject({
      title: "Database backed post",
      slug: "database-backed-post",
      cover: "linear-gradient(135deg, rgba(6,182,212,.25), rgba(139,92,246,.2))",
      category: "rag",
      tags: ["rag", "llm"],
      status: "published",
      comments: 2,
      author: "KCY",
    });
    expect(post.publishedAt).toBe("2026-04-24");
    expect(post.updatedAt).toBe("2026-04-25");
  });
});
