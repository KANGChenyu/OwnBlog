import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "KCY",
      password: "replace-with-hashed-password",
    },
  });

  const category = await prisma.category.upsert({
    where: { slug: "rag" },
    update: {},
    create: {
      name: "RAG",
      slug: "rag",
      description: "检索增强生成与知识库工程。",
      color: "#06B6D4",
      icon: "Network",
    },
  });

  await prisma.post.upsert({
    where: { slug: "rag-knowledge-base" },
    update: {},
    create: {
      title: "从零实现一个 RAG 知识库问答系统",
      slug: "rag-knowledge-base",
      excerpt: "从文档解析、切分、向量化、召回到重排，完整拆解 RAG 系统的工程路径。",
      content: "# 从零实现一个 RAG 知识库问答系统\n\n这是数据库 seed 示例。",
      status: "PUBLISHED",
      featured: true,
      pinned: true,
      authorId: admin.id,
      categoryId: category.id,
      publishedAt: new Date(),
    },
  });
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
