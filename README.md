# OwnBlog / Nebula Blog

Nebula Blog 是一个面向个人品牌展示、技术文章沉淀、项目作品集和后台内容管理的暗黑科技风个人博客系统。

当前版本是 P1 本地 CMS 原型：前台页面、文章阅读、项目展示、搜索/归档、后台 Dashboard、Markdown 编辑器已经具备完整界面；后台文章管理已接入 Prisma + SQLite，可从数据库读取、创建、编辑和删除文章。

## 技术栈

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- React Markdown + remark-gfm + rehype-highlight
- Lucide React
- Vitest
- Prisma + SQLite local CMS storage

## 功能

- 首页：沉浸式 Hero、视觉资产、技术栈、精选文章、项目作品、成长时间轴。
- 文章：列表、分类、标签、排序、详情、Markdown、代码块、提示块、目录、相关文章。
- 作品集：项目列表、项目详情、技术栈、亮点、仓库和预览入口。
- 个人页：关于我、在线简历、技能树、时间轴。
- 内容发现：搜索、归档、友链、留言板。
- 后台：Dashboard、登录 UI、文章管理、Markdown 编辑器、分类/标签/评论/项目/留言/友链/文件/设置管理页面。
- SEO：基础 metadata、robots.txt、sitemap.xml。

## 本地运行

```bash
npm install
npm run dev
```

默认访问：

```txt
http://localhost:3000
```

## 常用命令

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run db:init
npm run db:seed
npm run db:reset
```

当前 Node 24 + Prisma 6 Windows 环境下，`npx prisma migrate dev` 会触发 schema-engine 异常；项目提供 `npm run db:init` 作为本地 SQLite 建表脚本，`npm run db:reset` 会重建 `prisma/dev.db` 并写入 seed 数据。

## 环境变量

参考 `.env.example`：

```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"
NEXTAUTH_URL="http://localhost:3000"
ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="123456"
UPLOAD_PROVIDER="local"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

## 目录结构

```txt
src
├─ app                 # Next.js App Router 页面
├─ components
│  ├─ admin            # 后台组件
│  ├─ layout           # 前台/后台布局
│  ├─ post             # 文章组件
│  ├─ project          # 项目组件
│  └─ ui               # 通用 UI primitives
├─ lib
│  ├─ content.ts       # P0 本地 seed 数据
│  ├─ content-query.ts # 查询、搜索、归档、相关文章
│  └─ markdown.ts      # Markdown 辅助函数
├─ test                # Vitest 测试
└─ types               # 内容类型
```

## 数据库

`prisma/schema.prisma` 已定义 CMS 所需模型：用户、文章、分类、标签、评论、项目、留言和友链。

后台文章管理已经读取 Prisma SQLite 数据库。P0 的部分前台页面仍读取 `src/lib/content.ts`，后续可以逐步把 `src/lib/content-query.ts` 的数据源替换为 Prisma 查询。

## 后续计划

- 接入 Auth.js 管理员登录。
- 将文章、分类、标签、项目、留言、评论替换为 Prisma/PostgreSQL 持久化。
- 实现图片上传到本地存储、S3 或 MinIO。
- 增加评论审核、点赞、收藏和访问统计。
- 扩展 AI 摘要、AI 写作助手和全站语义搜索。
