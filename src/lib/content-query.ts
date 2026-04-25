import { categories, posts, projects, tags } from "@/lib/content";
import type { Post, Project, SearchResult } from "@/types/content";

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getTag(slug: string) {
  return tags.find((tag) => tag.slug === slug);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug && post.status === "published");
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedPosts(limit = 4) {
  return posts
    .filter((post) => post.status === "published" && post.featured)
    .sort(sortPosts)
    .slice(0, limit);
}

export function searchPosts(
  source: Post[],
  filters: { keyword?: string; category?: string; tag?: string; sort?: "latest" | "views" | "likes" | "comments" },
) {
  const keyword = filters.keyword?.trim().toLowerCase();

  return source
    .filter((post) => post.status === "published")
    .filter((post) => !filters.category || post.category === filters.category)
    .filter((post) => !filters.tag || post.tags.includes(filters.tag))
    .filter((post) => {
      if (!keyword) return true;
      return [post.title, post.excerpt, post.content, post.category, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .sort((a, b) => {
      if (filters.sort === "views") return b.views - a.views;
      if (filters.sort === "likes") return b.likes - a.likes;
      if (filters.sort === "comments") return b.comments - a.comments;
      return sortPosts(a, b);
    });
}

export function getRelatedPosts(current: Post, source: Post[], limit = 3) {
  return source
    .filter((post) => post.status === "published" && post.slug !== current.slug)
    .map((post) => ({
      post,
      score:
        (post.category === current.category ? 3 : 0) +
        post.tags.filter((tag) => current.tags.includes(tag)).length * 2,
    }))
    .sort((a, b) => b.score - a.score || sortPosts(a.post, b.post))
    .slice(0, limit)
    .map((item) => item.post);
}

export function searchContent(keyword: string, postSource: Post[], projectSource: Project[]): SearchResult[] {
  const value = keyword.trim().toLowerCase();
  if (!value) return [];

  const postResults = postSource
    .filter((post) => [post.title, post.excerpt, post.content, post.category, ...post.tags].join(" ").toLowerCase().includes(value))
    .map((post) => ({
      type: "post" as const,
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      url: `/posts/${post.slug}`,
    }));

  const projectResults = projectSource
    .filter((project) => [project.title, project.summary, project.content, ...project.techStack, ...project.highlights].join(" ").toLowerCase().includes(value))
    .map((project) => ({
      type: "project" as const,
      slug: project.slug,
      title: project.title,
      excerpt: project.summary,
      url: `/projects/${project.slug}`,
    }));

  return [...postResults, ...projectResults];
}

export function getArchiveGroups(source: Post[]) {
  const grouped = new Map<number, Map<number, Post[]>>();

  source.filter((post) => post.status === "published").forEach((post) => {
    const date = new Date(post.publishedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    if (!grouped.has(year)) grouped.set(year, new Map());
    const months = grouped.get(year)!;
    if (!months.has(month)) months.set(month, []);
    months.get(month)!.push(post);
  });

  return Array.from(grouped.entries())
    .sort(([a], [b]) => b - a)
    .map(([year, monthMap]) => ({
      year,
      months: Array.from(monthMap.entries())
        .sort(([a], [b]) => b - a)
        .map(([month, items]) => ({ month, items: items.sort(sortPosts) })),
    }));
}

export function sortPosts(a: Post, b: Post) {
  return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
}
