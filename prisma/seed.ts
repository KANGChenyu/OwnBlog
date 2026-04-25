import { PrismaClient } from "@prisma/client";
import {
  categories,
  friends,
  guestbookMessages,
  posts,
  projects,
  tags,
} from "../src/lib/content";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { name: "KCY" },
    create: {
      email: "admin@example.com",
      name: "KCY",
      password: "replace-with-hashed-password",
    },
  });

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
        color: category.color,
        icon: category.icon,
      },
      create: category,
    });
  }

  for (const tag of tags) {
    await prisma.tag.upsert({
      where: { slug: tag.slug },
      update: {
        name: tag.name,
        color: tag.color,
      },
      create: tag,
    });
  }

  for (const post of posts) {
    const category = await prisma.category.findUniqueOrThrow({
      where: { slug: post.category },
    });

    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        cover: post.cover,
        status: post.status.toUpperCase() as "DRAFT" | "PUBLISHED" | "HIDDEN" | "ARCHIVED",
        featured: post.featured,
        pinned: post.pinned,
        views: post.views,
        likes: post.likes,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        categoryId: category.id,
        publishedAt: new Date(post.publishedAt),
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        cover: post.cover,
        status: post.status.toUpperCase() as "DRAFT" | "PUBLISHED" | "HIDDEN" | "ARCHIVED",
        featured: post.featured,
        pinned: post.pinned,
        views: post.views,
        likes: post.likes,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        authorId: admin.id,
        categoryId: category.id,
        publishedAt: new Date(post.publishedAt),
      },
    });

    const savedPost = await prisma.post.findUniqueOrThrow({ where: { slug: post.slug } });
    await prisma.postTag.deleteMany({ where: { postId: savedPost.id } });
    for (const tagSlug of post.tags) {
      const tag = await prisma.tag.findUnique({ where: { slug: tagSlug } });
      if (tag) {
        await prisma.postTag.create({
          data: { postId: savedPost.id, tagId: tag.id },
        });
      }
    }
  }

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        summary: project.summary,
        content: project.content,
        cover: project.cover,
        techStack: project.techStack.join(","),
        status: project.status.toUpperCase() as "BUILDING" | "COMPLETED" | "MAINTAINED" | "ARCHIVED",
        github: project.github,
        demo: project.demo,
        highlights: project.highlights.join("\n"),
        publishedAt: new Date(project.publishedAt),
      },
      create: {
        title: project.title,
        slug: project.slug,
        summary: project.summary,
        content: project.content,
        cover: project.cover,
        techStack: project.techStack.join(","),
        status: project.status.toUpperCase() as "BUILDING" | "COMPLETED" | "MAINTAINED" | "ARCHIVED",
        github: project.github,
        demo: project.demo,
        highlights: project.highlights.join("\n"),
        publishedAt: new Date(project.publishedAt),
      },
    });
  }

  for (const message of guestbookMessages) {
    await prisma.guestbookMessage.upsert({
      where: { id: `${message.name}-${message.createdAt}` },
      update: {},
      create: {
        id: `${message.name}-${message.createdAt}`,
        nickname: message.name,
        avatar: message.avatar,
        content: message.content,
        likes: message.likes,
        pinned: Boolean(message.pinned),
        approved: true,
      },
    });
  }

  for (const friend of friends) {
    await prisma.friendLink.upsert({
      where: { url: friend.url },
      update: {
        name: friend.name,
        description: friend.description,
        logo: friend.logo,
        owner: friend.owner,
        approved: friend.status === "approved",
      },
      create: {
        name: friend.name,
        description: friend.description,
        url: friend.url,
        logo: friend.logo,
        owner: friend.owner,
        approved: friend.status === "approved",
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
