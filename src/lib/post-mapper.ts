import type { ContentStatus } from "@/types/content";
import type { Post } from "@/types/content";

type DbPost = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover: string | null;
  status: string;
  featured: boolean;
  pinned: boolean;
  views: number;
  likes: number;
  seoTitle: string | null;
  seoDescription: string | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  author: { name: string };
  category: { slug: string };
  tags: Array<{ tag: { slug: string } }>;
  comments: Array<unknown>;
};

const fallbackCover = "linear-gradient(135deg, rgba(6,182,212,.25), rgba(139,92,246,.2))";

export function mapDbPostToPost(post: DbPost): Post {
  const publishedAt = post.publishedAt ?? post.createdAt;

  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    cover: post.cover ?? fallbackCover,
    category: post.category.slug,
    tags: post.tags.map((item) => item.tag.slug),
    author: post.author.name,
    publishedAt: toDateInput(publishedAt),
    updatedAt: toDateInput(post.updatedAt),
    status: post.status.toLowerCase() as ContentStatus,
    featured: post.featured,
    pinned: post.pinned,
    views: post.views,
    likes: post.likes,
    comments: post.comments.length,
    seoTitle: post.seoTitle ?? post.title,
    seoDescription: post.seoDescription ?? post.excerpt,
  };
}

export function toDateInput(date: Date) {
  return date.toISOString().slice(0, 10);
}
