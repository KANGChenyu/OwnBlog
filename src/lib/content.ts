import type {
  Category,
  FriendLink,
  GuestbookMessage,
  Post,
  Project,
  Skill,
  Tag,
  TimelineItem,
} from "@/types/content";

export const categories: Category[] = [
  { name: "RAG", slug: "rag", description: "检索增强生成、向量检索与知识库工程。", color: "#06B6D4", icon: "Network" },
  { name: "Spring Boot", slug: "spring-boot", description: "Java 后端工程、认证、服务治理与业务架构。", color: "#22C55E", icon: "Leaf" },
  { name: "Redis", slug: "redis", description: "缓存、分布式锁、高并发性能实践。", color: "#EF4444", icon: "Database" },
  { name: "Kafka", slug: "kafka", description: "异步任务、消息队列与事件驱动系统。", color: "#A855F7", icon: "Radio" },
  { name: "Elasticsearch", slug: "elasticsearch", description: "全文检索、混合搜索与性能优化。", color: "#F59E0B", icon: "Search" },
  { name: "前端", slug: "frontend", description: "Next.js、React、TypeScript 与交互体验。", color: "#EC4899", icon: "Sparkles" },
];

export const tags: Tag[] = [
  { name: "Java", slug: "java", color: "#F97316" },
  { name: "Spring Boot", slug: "spring-boot", color: "#22C55E" },
  { name: "Redis", slug: "redis", color: "#EF4444" },
  { name: "Kafka", slug: "kafka", color: "#A855F7" },
  { name: "RAG", slug: "rag", color: "#06B6D4" },
  { name: "向量检索", slug: "vector-search", color: "#38BDF8" },
  { name: "大模型", slug: "llm", color: "#EC4899" },
  { name: "Next.js", slug: "nextjs", color: "#F8FAFC" },
  { name: "TypeScript", slug: "typescript", color: "#60A5FA" },
  { name: "面试", slug: "interview", color: "#FACC15" },
];

export const posts: Post[] = [
  {
    title: "从零实现一个 RAG 知识库问答系统",
    slug: "rag-knowledge-base",
    excerpt: "从文档解析、切分、向量化、召回到重排，完整拆解 RAG 系统的工程路径。",
    cover: "linear-gradient(135deg, rgba(6,182,212,.35), rgba(139,92,246,.28))",
    category: "rag",
    tags: ["rag", "vector-search", "llm"],
    author: "KCY",
    publishedAt: "2026-04-20",
    updatedAt: "2026-04-22",
    status: "published",
    featured: true,
    pinned: true,
    views: 12880,
    likes: 942,
    comments: 58,
    seoTitle: "RAG 知识库问答系统实战",
    seoDescription: "RAG 应用从 0 到 1 的完整工程实践。",
    content: `# 从零实现一个 RAG 知识库问答系统

## 架构总览

一个稳定的 RAG 系统通常由文档解析、文本切分、向量索引、混合召回、重排、上下文组装和流式回答组成。

:::tip
RAG 的关键不是把模型接上数据库，而是让检索结果稳定、可解释、可观察。
:::

## 文档解析

PDF、Word、Markdown 和网页内容需要进入统一的 Document Chunk 管线。每个 chunk 都应该保留来源、页码、标题路径和更新时间。

## 混合检索

Elasticsearch 的 BM25 可以补足关键词精确匹配，向量检索负责语义召回。

\`\`\`ts
const score = bm25Score * 0.45 + vectorScore * 0.55;
return rerank(chunks, query, score);
\`\`\`

## 评估

| 指标 | 说明 |
| --- | --- |
| Recall@K | 目标片段是否进入候选集 |
| Faithfulness | 回答是否忠于引用上下文 |
| Latency | 端到端响应耗时 |
`,
  },
  {
    title: "Elasticsearch KNN + BM25 混合检索实践",
    slug: "elasticsearch-hybrid-search",
    excerpt: "用 KNN 向量召回结合 BM25 关键词匹配，构建可调权重的混合搜索链路。",
    cover: "linear-gradient(135deg, rgba(245,158,11,.3), rgba(6,182,212,.25))",
    category: "elasticsearch",
    tags: ["rag", "vector-search"],
    author: "KCY",
    publishedAt: "2026-03-28",
    updatedAt: "2026-04-01",
    status: "published",
    featured: true,
    pinned: false,
    views: 9840,
    likes: 711,
    comments: 34,
    seoTitle: "Elasticsearch 混合检索",
    seoDescription: "KNN + BM25 的混合搜索工程实践。",
    content: "# Elasticsearch KNN + BM25 混合检索实践\n\n## 为什么要混合检索\n\n向量检索理解语义，BM25 保留关键词精确性。\n\n## 权重策略\n\n不同业务可以调整召回权重。",
  },
  {
    title: "Redis 在项目中的常见使用场景",
    slug: "redis-production-patterns",
    excerpt: "缓存穿透、击穿、雪崩、分布式锁、限流和热点 Key 的工程处理。",
    cover: "linear-gradient(135deg, rgba(239,68,68,.28), rgba(236,72,153,.2))",
    category: "redis",
    tags: ["redis", "java"],
    author: "KCY",
    publishedAt: "2026-02-18",
    updatedAt: "2026-02-20",
    status: "published",
    featured: true,
    pinned: false,
    views: 11620,
    likes: 805,
    comments: 49,
    seoTitle: "Redis 项目实践",
    seoDescription: "Redis 在高并发系统中的典型用法。",
    content: "# Redis 在项目中的常见使用场景\n\n## 缓存穿透\n\n可以通过参数校验、空值缓存和布隆过滤器处理。\n\n:::warning\n分布式锁必须设置过期时间，并保证释放锁的原子性。\n:::",
  },
  {
    title: "Kafka 异步处理文档解析任务实践",
    slug: "kafka-document-pipeline",
    excerpt: "把耗时文档解析拆成事件流，提升任务吞吐与失败恢复能力。",
    cover: "linear-gradient(135deg, rgba(168,85,247,.32), rgba(59,130,246,.22))",
    category: "kafka",
    tags: ["kafka", "java"],
    author: "KCY",
    publishedAt: "2026-01-30",
    updatedAt: "2026-02-02",
    status: "published",
    featured: false,
    pinned: false,
    views: 7650,
    likes: 463,
    comments: 21,
    seoTitle: "Kafka 文档解析任务",
    seoDescription: "Kafka 异步任务管线实践。",
    content: "# Kafka 异步处理文档解析任务实践\n\n## 任务拆分\n\n上传、解析、切分、向量化和索引写入应拆成可重试的事件。",
  },
  {
    title: "Spring Security + JWT 实现无状态认证",
    slug: "spring-security-jwt",
    excerpt: "面向面试与项目落地的 JWT 认证链路、刷新机制和权限控制整理。",
    cover: "linear-gradient(135deg, rgba(34,197,94,.26), rgba(6,182,212,.2))",
    category: "spring-boot",
    tags: ["spring-boot", "java", "interview"],
    author: "KCY",
    publishedAt: "2025-12-16",
    updatedAt: "2025-12-18",
    status: "published",
    featured: false,
    pinned: false,
    views: 13880,
    likes: 1001,
    comments: 77,
    seoTitle: "Spring Security JWT 认证",
    seoDescription: "无状态认证与权限控制实践。",
    content: "# Spring Security + JWT 实现无状态认证\n\n## 面试视角\n\n认证、授权、刷新令牌、黑名单和风控是常见问题。",
  },
  {
    title: "WebSocket 实现大模型流式输出",
    slug: "websocket-llm-streaming",
    excerpt: "把大模型 token 流实时推送到前端，处理取消、错误和重连。",
    cover: "linear-gradient(135deg, rgba(236,72,153,.3), rgba(139,92,246,.25))",
    category: "spring-boot",
    tags: ["llm", "java"],
    author: "KCY",
    publishedAt: "2025-11-08",
    updatedAt: "2025-11-12",
    status: "published",
    featured: false,
    pinned: false,
    views: 6240,
    likes: 388,
    comments: 19,
    seoTitle: "WebSocket 大模型流式输出",
    seoDescription: "LLM 流式响应工程实践。",
    content: "# WebSocket 实现大模型流式输出\n\n## 流式体验\n\n前端需要处理逐字输出、取消生成和错误提示。",
  },
  {
    title: "MySQL 索引优化实战",
    slug: "mysql-index-optimization",
    excerpt: "从 explain、联合索引、回表和覆盖索引理解慢查询优化。",
    cover: "linear-gradient(135deg, rgba(59,130,246,.28), rgba(245,158,11,.18))",
    category: "spring-boot",
    tags: ["java", "interview"],
    author: "KCY",
    publishedAt: "2025-10-21",
    updatedAt: "2025-10-22",
    status: "published",
    featured: false,
    pinned: false,
    views: 10900,
    likes: 720,
    comments: 45,
    seoTitle: "MySQL 索引优化",
    seoDescription: "慢查询与索引优化实践。",
    content: "# MySQL 索引优化实战\n\n## Explain\n\n优化前先确认访问类型、扫描行数和是否回表。",
  },
  {
    title: "个人博客系统从 0 到 1 搭建记录",
    slug: "nebula-blog-from-zero",
    excerpt: "记录 Nebula Blog 的需求拆解、架构选择、页面规划和后续演进。",
    cover: "linear-gradient(135deg, rgba(139,92,246,.34), rgba(6,182,212,.25), rgba(236,72,153,.2))",
    category: "frontend",
    tags: ["nextjs", "typescript"],
    author: "KCY",
    publishedAt: "2026-04-25",
    updatedAt: "2026-04-25",
    status: "published",
    featured: true,
    pinned: true,
    views: 1560,
    likes: 188,
    comments: 12,
    seoTitle: "Nebula Blog 搭建记录",
    seoDescription: "个人博客系统从 0 到 1 的建设记录。",
    content: "# 个人博客系统从 0 到 1 搭建记录\n\n## 产品定位\n\n它既是博客，也是作品集、简历入口和内容管理系统。\n\n## 技术选择\n\nNext.js 全栈方案便于快速上线和后续扩展。",
  },
];

export const projects: Project[] = [
  {
    title: "RAG 知识库智能问答系统",
    slug: "rag-qa-system",
    summary: "支持多格式文档解析、向量检索、混合召回和流式问答的企业知识库。",
    cover: "linear-gradient(135deg, rgba(6,182,212,.38), rgba(139,92,246,.24))",
    techStack: ["Spring Boot", "Elasticsearch", "PostgreSQL", "Redis", "LLM"],
    status: "maintained",
    highlights: ["文档解析异步化", "向量 + BM25 混合检索", "引用溯源", "可观测评估面板"],
    github: "https://github.com/example/rag-qa",
    demo: "https://example.com/rag",
    content: "该项目围绕企业文档问答构建，从上传、解析、切分、索引到问答形成完整链路。",
    publishedAt: "2026-03-18",
  },
  {
    title: "体检预约管理系统",
    slug: "medical-checkup-system",
    summary: "面向体检中心的套餐、预约、报告和后台运营管理系统。",
    cover: "linear-gradient(135deg, rgba(34,197,94,.34), rgba(6,182,212,.2))",
    techStack: ["Java", "Spring Boot", "MySQL", "Redis", "Vue"],
    status: "completed",
    highlights: ["预约排班", "权限控制", "报表统计", "Redis 缓存优化"],
    github: "https://github.com/example/medical",
    demo: "https://example.com/medical",
    content: "系统聚焦高频业务流程，提升预约、订单、报告和运营统计效率。",
    publishedAt: "2025-12-10",
  },
  {
    title: "Nebula Blog 个人博客系统",
    slug: "nebula-blog",
    summary: "暗黑科技风个人品牌官网、技术博客、作品集与后台 CMS 原型。",
    cover: "linear-gradient(135deg, rgba(139,92,246,.36), rgba(236,72,153,.24))",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Prisma"],
    status: "building",
    highlights: ["沉浸首页", "Markdown 阅读体验", "后台编辑器", "SEO 结构"],
    github: "https://github.com/example/nebula-blog",
    demo: "https://example.com/blog",
    content: "Nebula Blog 是当前作品集的核心入口，承载技术沉淀和个人品牌展示。",
    publishedAt: "2026-04-25",
  },
  {
    title: "AI 图片生成工具",
    slug: "ai-image-studio",
    summary: "聚合提示词、风格模板和历史记录的轻量 AI 图片生成工作台。",
    cover: "linear-gradient(135deg, rgba(236,72,153,.34), rgba(245,158,11,.18))",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "S3"],
    status: "building",
    highlights: ["提示词模板", "风格预设", "生成历史", "资产管理"],
    github: "https://github.com/example/image-studio",
    demo: "https://example.com/image",
    content: "工具面向内容创作者，提供从提示词到资产管理的一站式体验。",
    publishedAt: "2026-02-14",
  },
];

export const skills: Skill[] = [
  { name: "Java", group: "Backend", description: "业务建模、并发、JVM 与工程化。", level: 92 },
  { name: "Spring Boot", group: "Backend", description: "REST API、认证授权、任务调度。", level: 90 },
  { name: "Redis", group: "Infrastructure", description: "缓存、锁、限流和热点治理。", level: 86 },
  { name: "Kafka", group: "Infrastructure", description: "异步消息、事件流和任务解耦。", level: 82 },
  { name: "Elasticsearch", group: "Search", description: "全文检索、混合搜索、聚合分析。", level: 84 },
  { name: "RAG", group: "AI", description: "文档问答、向量检索、重排和评估。", level: 88 },
  { name: "Next.js", group: "Frontend", description: "App Router、SSR、内容站点。", level: 78 },
  { name: "TypeScript", group: "Frontend", description: "类型建模和前端工程质量。", level: 80 },
];

export const timeline: TimelineItem[] = [
  { date: "2026.04", title: "启动 Nebula Blog", description: "把博客、作品集、简历与 CMS 整合成个人品牌系统。", type: "project" },
  { date: "2026.03", title: "RAG 知识库迭代", description: "完成混合检索、引用溯源和异步文档处理链路。", type: "project" },
  { date: "2025.12", title: "后端工程强化", description: "系统复盘认证、缓存、消息队列和数据库性能优化。", type: "learning" },
  { date: "2025.09", title: "项目实战沉淀", description: "完成体检预约管理系统等业务型项目。", type: "work" },
];

export const friends: FriendLink[] = [
  { name: "Vector Lab", description: "检索、向量数据库与 AI 工程笔记。", url: "https://example.com/vector", logo: "VL", owner: "Alex", status: "approved" },
  { name: "Backend Notes", description: "Java 后端架构与面试复盘。", url: "https://example.com/backend", logo: "BN", owner: "Ming", status: "approved" },
  { name: "Frontend Orbit", description: "Next.js 与交互动效实验。", url: "https://example.com/frontend", logo: "FO", owner: "Nora", status: "approved" },
];

export const guestbookMessages: GuestbookMessage[] = [
  { name: "KCY", avatar: "K", content: "欢迎来到 Nebula Blog，愿每一次复盘都能留下更清晰的轨迹。", createdAt: "2026-04-25", likes: 36, pinned: true },
  { name: "Async Dev", avatar: "A", content: "RAG 系列写得很扎实，尤其喜欢混合检索那篇。", createdAt: "2026-04-21", likes: 18 },
  { name: "Null Pointer", avatar: "N", content: "后台编辑器的设计很有 CMS 的感觉，期待数据库版本。", createdAt: "2026-04-19", likes: 12 },
];
