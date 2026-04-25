"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

function requiredString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`${key} is required`);
  return value;
}

function optionalString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  return value || null;
}

function readBoolean(formData: FormData, key: string) {
  return formData.get(key) === "on";
}

function readStatus(formData: FormData) {
  return formData.get("status") === "PUBLISHED" ? "PUBLISHED" : "DRAFT";
}

async function syncTags(postId: string, tagSlugs: string[]) {
  await prisma.postTag.deleteMany({ where: { postId } });
  const tags = await prisma.tag.findMany({ where: { slug: { in: tagSlugs } } });

  if (tags.length) {
    await prisma.postTag.createMany({
      data: tags.map((tag) => ({ postId, tagId: tag.id })),
    });
  }
}

function revalidatePostPaths(slug?: string) {
  revalidatePath("/admin/posts");
  revalidatePath("/posts");
  revalidatePath("/search");
  if (slug) revalidatePath(`/posts/${slug}`);
}

export async function createPostAction(formData: FormData) {
  const title = requiredString(formData, "title");
  const slug = requiredString(formData, "slug");
  const excerpt = requiredString(formData, "excerpt");
  const content = requiredString(formData, "content");
  const categoryId = requiredString(formData, "categoryId");
  const tagSlugs = formData.getAll("tagSlugs").map(String);
  const admin = await prisma.user.findFirstOrThrow({ where: { role: "ADMIN" } });

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      content,
      cover: optionalString(formData, "cover"),
      status: readStatus(formData),
      featured: readBoolean(formData, "featured"),
      pinned: readBoolean(formData, "pinned"),
      seoTitle: optionalString(formData, "seoTitle"),
      seoDescription: optionalString(formData, "seoDescription"),
      authorId: admin.id,
      categoryId,
      publishedAt: readStatus(formData) === "PUBLISHED" ? new Date() : null,
    },
  });

  await syncTags(post.id, tagSlugs);
  revalidatePostPaths(slug);
  redirect("/admin/posts");
}

export async function updatePostAction(id: string, formData: FormData) {
  const title = requiredString(formData, "title");
  const slug = requiredString(formData, "slug");
  const excerpt = requiredString(formData, "excerpt");
  const content = requiredString(formData, "content");
  const categoryId = requiredString(formData, "categoryId");
  const status = readStatus(formData);
  const existing = await prisma.post.findUniqueOrThrow({ where: { id } });

  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      excerpt,
      content,
      cover: optionalString(formData, "cover"),
      status,
      featured: readBoolean(formData, "featured"),
      pinned: readBoolean(formData, "pinned"),
      seoTitle: optionalString(formData, "seoTitle"),
      seoDescription: optionalString(formData, "seoDescription"),
      categoryId,
      publishedAt: status === "PUBLISHED" ? existing.publishedAt ?? new Date() : null,
    },
  });

  await syncTags(post.id, formData.getAll("tagSlugs").map(String));
  revalidatePostPaths(existing.slug);
  revalidatePostPaths(post.slug);
  redirect("/admin/posts");
}

export async function deletePostAction(id: string) {
  const post = await prisma.post.delete({ where: { id } });
  revalidatePostPaths(post.slug);
  redirect("/admin/posts");
}
