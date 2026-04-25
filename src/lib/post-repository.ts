import { prisma } from "@/lib/prisma";
import { mapDbPostToPost } from "@/lib/post-mapper";

const postInclude = {
  author: { select: { name: true } },
  category: { select: { slug: true, name: true } },
  tags: { include: { tag: { select: { slug: true, name: true } } } },
  comments: { select: { id: true } },
};

export async function getAdminPosts() {
  return prisma.post.findMany({
    include: postInclude,
    orderBy: [{ pinned: "desc" }, { updatedAt: "desc" }],
  });
}

export async function getAdminPostById(id: string) {
  return prisma.post.findUnique({
    where: { id },
    include: postInclude,
  });
}

export async function getDatabasePosts() {
  const rows = await prisma.post.findMany({
    where: { status: "PUBLISHED" },
    include: postInclude,
    orderBy: [{ pinned: "desc" }, { publishedAt: "desc" }],
  });

  return rows.map(mapDbPostToPost);
}

export async function getPostEditorOptions() {
  const [categories, tags] = await Promise.all([
    prisma.category.findMany({ orderBy: { sort: "asc" } }),
    prisma.tag.findMany({ orderBy: { name: "asc" } }),
  ]);

  return { categories, tags };
}
