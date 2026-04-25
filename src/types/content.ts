export type ContentStatus = "draft" | "published" | "hidden" | "archived";
export type ProjectStatus = "building" | "completed" | "maintained" | "archived";

export type Category = {
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
};

export type Tag = {
  name: string;
  slug: string;
  color: string;
};

export type Post = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover: string;
  category: string;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  status: ContentStatus;
  featured: boolean;
  pinned: boolean;
  views: number;
  likes: number;
  comments: number;
  seoTitle: string;
  seoDescription: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  cover: string;
  techStack: string[];
  status: ProjectStatus;
  highlights: string[];
  github: string;
  demo: string;
  content: string;
  publishedAt: string;
};

export type Skill = {
  name: string;
  group: string;
  description: string;
  level: number;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  type: "education" | "project" | "competition" | "learning" | "work";
};

export type FriendLink = {
  name: string;
  description: string;
  url: string;
  logo: string;
  owner: string;
  status: "approved" | "pending";
};

export type GuestbookMessage = {
  name: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  pinned?: boolean;
};

export type SearchResult = {
  type: "post" | "project";
  slug: string;
  title: string;
  excerpt: string;
  url: string;
};
