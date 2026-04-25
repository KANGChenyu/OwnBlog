# 利用 Codex / ChatGPT 5.5 开发个人博客系统需求文档

## 1. 项目名称

**Nebula Blog / 星河个人博客系统**

一个面向个人品牌展示、技术文章沉淀、作品集展示、AI 辅助创作、沉浸式阅读体验的现代化个人博客系统。

要求整体风格：  
**极致炫酷、绝美、未来感、科技感、动效丰富、交互丝滑、暗黑高级、适合程序员个人 IP 展示。**

---

## 2. 项目目标

本项目不是普通博客，而是一个具备视觉冲击力、内容管理能力、作品展示能力、AI 交互能力和个人品牌展示能力的高级个人主页系统。

核心目标：

1. 打造一个极具辨识度的个人博客首页。
2. 支持发布、管理、分类、搜索技术文章。
3. 支持 Markdown / MDX 写作。
4. 支持代码高亮、目录导航、阅读进度、评论、点赞、收藏。
5. 支持项目作品集展示。
6. 支持个人简历页面。
7. 支持时间轴、技术栈、成长记录。
8. 支持后台管理系统。
9. 支持响应式布局，适配 PC、平板、手机。
10. 支持极致动效、粒子背景、3D 卡片、霓虹渐变、玻璃拟态。
11. 支持 SEO 优化。
12. 支持后续扩展 AI 写作助手、AI 摘要、AI 搜索等能力。

---

## 3. 技术栈要求

### 3.1 前端技术栈

优先使用：

- Next.js 15+
- React 19+
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Lucide React
- MDX
- React Markdown
- Rehype / Remark 插件
- Three.js 或 React Three Fiber
- GSAP，可选
- Zustand 或 Jotai
- TanStack Query
- Monaco Editor，可选，用于后台 Markdown 编辑器
- Prism.js 或 Shiki，用于代码高亮

### 3.2 后端技术栈

推荐两种方案，优先使用方案 A。

#### 方案 A：全栈 Next.js

- Next.js App Router
- Server Actions
- Route Handlers
- Prisma ORM
- PostgreSQL
- Redis，可选
- NextAuth / Auth.js
- UploadThing / S3 / MinIO，用于图片上传

#### 方案 B：前后端分离

- 前端：Next.js
- 后端：Spring Boot 3 / NestJS
- 数据库：PostgreSQL / MySQL
- Redis
- JWT
- MinIO / S3

本项目优先选择 **Next.js 全栈方案**，便于快速开发和部署。

---

## 4. 整体视觉风格

### 4.1 设计关键词

整体 UI 必须具备以下关键词：

- 暗黑科技
- 赛博朋克
- 星云宇宙
- 玻璃拟态
- 霓虹渐变
- 高级磨砂
- 动态粒子
- 流光边框
- 3D 悬浮卡片
- 磁吸按钮
- 细腻微交互
- 页面转场动画
- 沉浸式阅读

### 4.2 主色调

默认使用暗色主题：

- 背景色：`#050816` / `#020617`
- 主渐变色：紫色、蓝色、青色、粉色
- 强调色：`#8B5CF6`、`#06B6D4`、`#EC4899`
- 文字主色：`#F8FAFC`
- 文字次色：`#94A3B8`
- 卡片背景：半透明深色玻璃拟态
- 边框：半透明霓虹线条

### 4.3 背景效果

首页背景需要实现：

1. 星空粒子背景。
2. 鼠标移动时粒子轻微响应。
3. 柔和渐变光斑。
4. 局部动态噪声纹理。
5. 可选 3D 星球、网格地平线、流动光带。

### 4.4 UI 组件风格

所有组件要求：

- 圆角：`rounded-2xl` 或 `rounded-3xl`
- 阴影：柔和霓虹阴影
- 边框：半透明渐变边框
- Hover：上浮、发光、缩放、边框流光
- 按钮：磁吸感、流光渐变、点击反馈
- 卡片：玻璃拟态、轻微 3D 倾斜
- 弹窗：模糊背景、丝滑进入动画
- 页面切换：淡入、上移、模糊过渡

---

## 5. 页面规划

系统至少包含以下页面：

- 首页 `/`
- 文章列表页 `/posts`
- 文章详情页 `/posts/[slug]`
- 分类页 `/categories`
- 分类文章页 `/categories/[slug]`
- 标签页 `/tags`
- 标签文章页 `/tags/[slug]`
- 项目作品页 `/projects`
- 项目详情页 `/projects/[slug]`
- 关于我页面 `/about`
- 简历页面 `/resume`
- 留言板页面 `/guestbook`
- 归档页面 `/archives`
- 搜索页面 `/search`
- 友链页面 `/friends`
- 后台首页 `/admin`
- 后台登录 `/admin/login`
- 后台文章管理 `/admin/posts`
- 后台分类管理 `/admin/categories`
- 后台标签管理 `/admin/tags`
- 后台评论管理 `/admin/comments`
- 后台项目管理 `/admin/projects`
- 后台留言管理 `/admin/guestbook`
- 后台友链管理 `/admin/friends`
- 后台文件管理 `/admin/files`
- 后台系统设置 `/admin/settings`

---

## 6. 前台页面需求

### 6.1 首页 `/`

首页是整个博客的核心展示页，要非常炫酷。

#### 模块 1：Hero 首屏

内容：

- 个人名称 / 昵称
- 一句强有力的个人 Slogan
- 动态打字机效果
- 个人头像或 3D 形象
- 粒子背景
- 霓虹渐变按钮

示例文案：

```txt
Hi, I'm KCY.
A Backend Developer building intelligent systems, RAG applications and beautiful digital experiences.
```

按钮：

- 查看文章
- 查看作品
- 关于我
- 下载简历

效果要求：

- 标题文字使用渐变色。
- Slogan 有打字机动画。
- 头像卡片有悬浮 3D 效果。
- 背景有星云粒子和柔光。

---

### 6.2 首页模块：精选文章

展示最新或推荐文章。

字段：

- 标题
- 摘要
- 封面图
- 标签
- 发布时间
- 阅读量
- 点赞量
- 评论数

交互：

- Hover 卡片上浮
- 封面图轻微放大
- 标签发光
- 点击进入文章详情

---

### 6.3 首页模块：技术栈展示

展示个人掌握的技术。

分类：

- Java
- Spring Boot
- MyBatis Plus
- Redis
- Kafka
- Elasticsearch
- MySQL
- PostgreSQL
- Docker
- Linux
- RAG
- 大模型应用开发
- Next.js
- React
- TypeScript

效果：

- 技术图标墙
- 鼠标悬停显示说明
- 技术卡片环形漂浮
- 可使用 Marquee 无限滚动

---

### 6.4 首页模块：项目作品集

展示个人项目。

每个项目包含：

- 项目名称
- 项目简介
- 技术栈
- 项目亮点
- GitHub 地址
- 在线预览地址
- 封面图
- 项目状态

示例项目：

1. RAG 知识库智能问答系统
2. 体检预约管理系统
3. 个人博客系统
4. AI 图片生成工具
5. 文档解析与向量检索系统

卡片效果：

- 3D 倾斜
- 流光边框
- Hover 展开项目亮点
- 点击进入项目详情页

---

### 6.5 首页模块：个人数据面板

展示个人成长数据。

例如：

- 文章数量
- 项目数量
- 代码提交次数
- 技术标签数量
- 访问量
- 学习天数

效果：

- 数字滚动动画
- 霓虹统计卡片
- 动态仪表盘感

---

### 6.6 首页模块：时间轴

展示个人成长经历。

时间轴内容：

- 本科 / 研究生阶段
- 项目经历
- 比赛经历
- 技术学习节点
- 实习经历
- 获奖经历

效果：

- 纵向时间轴
- 节点发光
- 滚动进入动画
- 当前节点高亮

---

### 6.7 文章列表页 `/posts`

功能：

1. 展示所有文章。
2. 支持分类筛选。
3. 支持标签筛选。
4. 支持关键词搜索。
5. 支持排序：
   - 最新发布
   - 最多阅读
   - 最多点赞
   - 最多评论
6. 支持分页或无限滚动。

文章卡片字段：

- 标题
- 摘要
- 封面
- 分类
- 标签
- 作者
- 发布时间
- 更新时间
- 阅读量
- 点赞量
- 评论数

页面效果：

- 搜索框带发光边框。
- 标签点击时有选中动效。
- 列表切换时有动画。
- 空状态页面要美观。

---

### 6.8 文章详情页 `/posts/[slug]`

这是博客最核心的阅读页面。

#### 基础功能

文章详情包含：

- 标题
- 摘要
- 封面图
- 作者信息
- 发布时间
- 更新时间
- 分类
- 标签
- 阅读量
- 点赞量
- 收藏量
- 评论数
- 正文内容
- 上一篇 / 下一篇
- 相关文章推荐

#### Markdown 支持

必须支持：

- 标题
- 段落
- 加粗
- 引用
- 列表
- 表格
- 图片
- 代码块
- 数学公式，可选
- Mermaid 图表，可选
- 自定义提示块

例如：

```md
:::tip
这是一个提示块
:::

:::warning
这是一个警告块
:::

:::danger
这是一个危险提示
:::
```

#### 代码块功能

代码块必须支持：

- 语法高亮
- 代码复制
- 文件名显示
- 行号显示
- 高亮指定行
- 代码块顶部工具栏
- 深色主题

#### 阅读增强

文章详情页需要：

1. 左侧文章目录 TOC。
2. 右侧作者信息或推荐文章。
3. 顶部阅读进度条。
4. 返回顶部按钮。
5. 代码复制按钮。
6. 图片点击放大预览。
7. 长文章自动生成目录。
8. 滚动到当前标题时目录高亮。
9. 支持沉浸式阅读模式。
10. 支持字体大小调整，可选。
11. 支持明暗主题切换。

---

### 6.9 分类页 `/categories`

功能：

- 展示所有分类。
- 每个分类显示文章数量。
- 点击分类进入该分类文章列表。
- 分类卡片使用炫酷渐变背景。

分类示例：

- Java
- Spring Boot
- Redis
- Kafka
- Elasticsearch
- MySQL
- RAG
- 大模型
- 前端
- 项目复盘
- 面试八股
- 随笔

---

### 6.10 标签页 `/tags`

功能：

- 标签云展示。
- 标签大小根据文章数量变化。
- 标签颜色随机但保持高级感。
- 点击标签进入对应文章列表。

效果：

- 标签云漂浮
- Hover 发光
- 点击有粒子扩散效果，可选

---

### 6.11 项目作品页 `/projects`

展示所有项目。

功能：

- 项目筛选
- 技术栈筛选
- 项目状态筛选
- GitHub 链接
- 在线预览
- 项目详情页

项目状态：

- 开发中
- 已完成
- 维护中
- 已归档

---

### 6.12 项目详情页 `/projects/[slug]`

内容：

- 项目名称
- 项目封面
- 项目简介
- 背景介绍
- 核心功能
- 技术架构
- 系统架构图
- 数据库设计
- 项目难点
- 解决方案
- 项目亮点
- 项目截图
- 代码仓库
- 在线演示
- 复盘总结

特别要求：

项目详情页要适合放入简历项目说明，内容排版要专业。

---

### 6.13 关于我页面 `/about`

内容：

- 个人介绍
- 技术方向
- 教育背景
- 技能树
- 经历时间轴
- 兴趣爱好
- 联系方式
- GitHub
- 邮箱
- 微信二维码，可选

效果：

- 技能树可视化
- 头像悬浮卡片
- 个人介绍打字机
- 时间轴动效

---

### 6.14 简历页面 `/resume`

功能：

1. 在线展示简历。
2. 支持下载 PDF 简历。
3. 支持打印。
4. 支持切换中文 / 英文，可选。
5. 支持项目经历展示。
6. 支持技能矩阵。

简历模块：

- 基本信息
- 教育经历
- 技术技能
- 项目经历
- 实习经历
- 竞赛经历
- 荣誉奖项
- 自我评价

---

### 6.15 留言板页面 `/guestbook`

功能：

- 用户留言
- 昵称
- 邮箱
- 头像
- 留言内容
- 回复留言
- 点赞留言
- 管理员置顶留言
- 管理员删除留言

要求：

- 支持未登录留言，但需要验证码或防刷机制。
- 留言卡片要有玻璃拟态效果。
- 可以支持弹幕墙效果，可选。

---

### 6.16 归档页面 `/archives`

功能：

- 按年份和月份归档文章。
- 展示每个月文章数量。
- 点击文章跳转详情。
- 时间线风格。

---

### 6.17 搜索页面 `/search`

功能：

- 全站搜索文章。
- 支持标题、摘要、正文、标签搜索。
- 搜索结果高亮关键词。
- 支持搜索历史。
- 支持热门搜索。
- 支持快捷键打开搜索框，例如 `Ctrl + K`。

效果：

- 命令面板风格 Command Palette。
- 输入时实时搜索。
- 结果出现动画。

---

### 6.18 友链页面 `/friends`

功能：

- 展示友情链接。
- 申请友链表单。
- 友链审核后台。

友链字段：

- 网站名称
- 网站描述
- 网站地址
- Logo
- 站长名称
- 状态

---

## 7. 后台管理系统需求

后台路径：`/admin`

后台需要登录后访问。

### 7.1 后台首页 Dashboard

展示系统数据：

- 总文章数
- 总阅读量
- 总点赞量
- 总评论数
- 今日访问量
- 最近发布文章
- 最近评论
- 热门文章排行
- 访问趋势图
- 分类文章占比

要求：

- 使用图表组件。
- 数据卡片使用科技风 UI。
- 支持暗色后台主题。

---

### 7.2 文章管理

功能：

1. 新增文章。
2. 编辑文章。
3. 删除文章。
4. 查询文章。
5. 按分类筛选。
6. 按标签筛选。
7. 设置文章状态。
8. 设置推荐文章。
9. 设置置顶文章。
10. 设置文章封面。
11. 设置 SEO 信息。

文章状态：

- 草稿
- 已发布
- 已隐藏
- 已归档

文章字段：

- 标题
- Slug
- 摘要
- 正文
- 封面图
- 分类
- 标签
- 状态
- 是否置顶
- 是否推荐
- 阅读量
- 点赞量
- SEO 标题
- SEO 描述
- SEO 关键词
- 创建时间
- 更新时间

---

### 7.3 Markdown 编辑器

后台必须提供强大的 Markdown 编辑器。

功能：

- Markdown 输入
- 实时预览
- 分屏预览
- 代码高亮
- 图片上传
- 粘贴图片自动上传
- 拖拽图片上传
- 自动保存草稿
- 快捷键保存
- 插入代码块
- 插入表格
- 插入提示块
- 插入 Mermaid，可选
- 字数统计
- 阅读时长估算

---

### 7.4 分类管理

功能：

- 新增分类
- 编辑分类
- 删除分类
- 分类排序
- 分类图标
- 分类描述
- 分类颜色

字段：

- 分类名称
- Slug
- 描述
- 图标
- 颜色
- 排序
- 创建时间
- 更新时间

---

### 7.5 标签管理

功能：

- 新增标签
- 编辑标签
- 删除标签
- 标签颜色
- 标签文章数统计

---

### 7.6 评论管理

功能：

- 查看评论
- 回复评论
- 删除评论
- 审核评论
- 置顶评论
- 拉黑 IP
- 敏感词过滤

评论状态：

- 待审核
- 已通过
- 已拒绝

---

### 7.7 项目管理

功能：

- 新增项目
- 编辑项目
- 删除项目
- 设置项目封面
- 设置项目技术栈
- 设置 GitHub 地址
- 设置在线预览地址
- 设置项目状态
- 设置项目排序

---

### 7.8 留言管理

功能：

- 查看留言
- 回复留言
- 删除留言
- 置顶留言
- 审核留言

---

### 7.9 友链管理

功能：

- 查看友链申请
- 审核友链
- 新增友链
- 编辑友链
- 删除友链

---

### 7.10 文件管理

功能：

- 图片上传
- 图片列表
- 图片删除
- 图片复制链接
- 支持本地存储
- 支持 S3 / MinIO 扩展

---

### 7.11 系统设置

功能：

- 站点名称
- 站点 Logo
- 站点描述
- 站点关键词
- 作者名称
- 作者头像
- GitHub 链接
- 邮箱
- ICP 备案号，可选
- 首页 Slogan
- SEO 默认配置
- 评论开关
- 留言板开关
- 主题配置

---

## 8. 用户角色与权限

### 8.1 角色

系统至少包含：

1. 游客
2. 普通用户
3. 管理员

### 8.2 游客权限

游客可以：

- 浏览首页
- 浏览文章
- 搜索文章
- 查看项目
- 查看关于我
- 查看简历
- 留言，可选
- 评论，可选

### 8.3 普通用户权限

普通用户可以：

- 评论
- 点赞
- 收藏
- 留言
- 修改个人信息

### 8.4 管理员权限

管理员可以：

- 管理文章
- 管理分类
- 管理标签
- 管理评论
- 管理项目
- 管理留言
- 管理友链
- 管理文件
- 管理系统设置

---

## 9. 登录与认证

### 9.1 登录方式

后台必须支持管理员登录。

登录方式：

- 邮箱 + 密码
- GitHub OAuth，可选
- Google OAuth，可选

### 9.2 安全要求

- 密码加密存储。
- 使用 JWT 或 NextAuth Session。
- 后台路由需要鉴权。
- 管理接口需要权限校验。
- 防止 XSS。
- 防止 CSRF。
- Markdown 内容需要安全过滤。
- 评论需要防刷。
- 上传文件需要限制类型和大小。

---

## 10. 数据模型设计

建议使用 Prisma。

### 10.1 User 用户表

```ts
id: string
name: string
email: string
passwordHash?: string
avatar?: string
role: "USER" | "ADMIN"
bio?: string
github?: string
website?: string
createdAt: Date
updatedAt: Date
```

### 10.2 Post 文章表

```ts
id: string
title: string
slug: string
summary: string
content: string
coverImage?: string
status: "DRAFT" | "PUBLISHED" | "HIDDEN" | "ARCHIVED"
isTop: boolean
isFeatured: boolean
viewCount: number
likeCount: number
commentCount: number
readingTime: number
seoTitle?: string
seoDescription?: string
seoKeywords?: string
categoryId: string
authorId: string
createdAt: Date
updatedAt: Date
publishedAt?: Date
```

### 10.3 Category 分类表

```ts
id: string
name: string
slug: string
description?: string
icon?: string
color?: string
sort: number
createdAt: Date
updatedAt: Date
```

### 10.4 Tag 标签表

```ts
id: string
name: string
slug: string
color?: string
createdAt: Date
updatedAt: Date
```

### 10.5 PostTag 文章标签关联表

```ts
postId: string
tagId: string
```

### 10.6 Comment 评论表

```ts
id: string
postId: string
userId?: string
nickname: string
email?: string
avatar?: string
content: string
status: "PENDING" | "APPROVED" | "REJECTED"
parentId?: string
likeCount: number
ip?: string
userAgent?: string
createdAt: Date
updatedAt: Date
```

### 10.7 Project 项目表

```ts
id: string
name: string
slug: string
summary: string
description: string
coverImage?: string
techStack: string[]
githubUrl?: string
demoUrl?: string
status: "DEVELOPING" | "COMPLETED" | "MAINTAINING" | "ARCHIVED"
sort: number
isFeatured: boolean
createdAt: Date
updatedAt: Date
```

### 10.8 Guestbook 留言表

```ts
id: string
nickname: string
email?: string
avatar?: string
content: string
reply?: string
status: "PENDING" | "APPROVED" | "REJECTED"
isPinned: boolean
likeCount: number
ip?: string
createdAt: Date
updatedAt: Date
```

### 10.9 FriendLink 友链表

```ts
id: string
name: string
description: string
url: string
logo?: string
owner?: string
status: "PENDING" | "APPROVED" | "REJECTED"
sort: number
createdAt: Date
updatedAt: Date
```

### 10.10 SiteSetting 站点设置表

```ts
id: string
siteName: string
siteDescription: string
siteKeywords: string
siteLogo?: string
authorName: string
authorAvatar?: string
slogan?: string
githubUrl?: string
email?: string
enableComment: boolean
enableGuestbook: boolean
createdAt: Date
updatedAt: Date
```

---

## 11. API 接口设计

如果使用 Next.js Route Handlers，请按照 REST 风格设计。

### 11.1 文章接口

```txt
GET    /api/posts
GET    /api/posts/:slug
POST   /api/admin/posts
PUT    /api/admin/posts/:id
DELETE /api/admin/posts/:id
POST   /api/posts/:id/like
POST   /api/posts/:id/view
```

### 11.2 分类接口

```txt
GET    /api/categories
POST   /api/admin/categories
PUT    /api/admin/categories/:id
DELETE /api/admin/categories/:id
```

### 11.3 标签接口

```txt
GET    /api/tags
POST   /api/admin/tags
PUT    /api/admin/tags/:id
DELETE /api/admin/tags/:id
```

### 11.4 评论接口

```txt
GET    /api/posts/:postId/comments
POST   /api/posts/:postId/comments
GET    /api/admin/comments
PUT    /api/admin/comments/:id
DELETE /api/admin/comments/:id
```

### 11.5 项目接口

```txt
GET    /api/projects
GET    /api/projects/:slug
POST   /api/admin/projects
PUT    /api/admin/projects/:id
DELETE /api/admin/projects/:id
```

### 11.6 留言接口

```txt
GET    /api/guestbook
POST   /api/guestbook
GET    /api/admin/guestbook
PUT    /api/admin/guestbook/:id
DELETE /api/admin/guestbook/:id
```

### 11.7 文件上传接口

```txt
POST   /api/admin/upload
GET    /api/admin/files
DELETE /api/admin/files/:id
```

### 11.8 搜索接口

```txt
GET /api/search?keyword=xxx
```

搜索范围：

- 文章标题
- 文章摘要
- 文章正文
- 标签
- 分类
- 项目名称

---

## 12. 交互动效需求

### 12.1 页面加载动画

- 首次进入网站显示高级 Loading。
- Loading 可以是星环、粒子、代码雨、霓虹 Logo。
- 加载完成后页面淡入。

### 12.2 页面转场

页面跳转时使用：

- Fade In
- Slide Up
- Blur In
- Scale In

### 12.3 卡片动效

卡片需要：

- Hover 上浮
- 边框发光
- 背景渐变流动
- 鼠标跟随光斑
- 3D 倾斜

### 12.4 按钮动效

按钮需要：

- Hover 发光
- 点击缩放
- 渐变流动
- 图标轻微移动

### 12.5 滚动动画

页面滚动时：

- 模块逐渐出现
- 标题从下方浮现
- 卡片错位进入
- 时间轴节点依次点亮

---

## 13. 主题系统

系统需要支持：

1. 暗黑主题，默认。
2. 明亮主题，可选。
3. 赛博紫主题。
4. 星河蓝主题。
5. 极光绿主题。

用户可以在前台切换主题。

主题配置项：

```ts
theme: "dark" | "light" | "cyberpunk" | "nebula" | "aurora"
```

主题状态需要持久化到 localStorage。

---

## 14. 响应式要求

必须适配：

- 1920px 大屏
- 1440px 笔记本
- 1024px 平板
- 768px 小平板
- 430px 手机
- 375px 小屏手机

移动端要求：

- 顶部导航变为抽屉菜单。
- 首页 Hero 重新排版。
- 文章目录隐藏为悬浮按钮。
- 卡片单列显示。
- 后台表格可横向滚动。

---

## 15. SEO 要求

每个页面都要设置：

- title
- description
- keywords
- Open Graph
- Twitter Card
- canonical URL

文章详情页 SEO：

- 使用文章标题作为 title。
- 使用文章摘要作为 description。
- 使用文章标签作为 keywords。
- 使用文章封面作为 og:image。

需要生成：

- sitemap.xml
- robots.txt

---

## 16. 性能要求

### 16.1 首屏性能

要求：

- 首页首屏加载尽可能快。
- 图片使用 Next Image 优化。
- 组件按需加载。
- 3D 效果和粒子效果不能严重影响性能。
- 移动端可以自动降低粒子数量。
- 使用懒加载。

### 16.2 文章性能

要求：

- 文章详情页静态生成或缓存。
- Markdown 渲染结果可缓存。
- 图片懒加载。
- 代码高亮不要阻塞页面。

---

## 17. 安全要求

必须处理：

1. 后台鉴权。
2. 管理接口权限控制。
3. Markdown XSS 过滤。
4. 评论 XSS 过滤。
5. 文件上传类型校验。
6. 文件大小限制。
7. 防止 SQL 注入。
8. 防止暴力登录。
9. 敏感操作需要管理员权限。
10. 环境变量不能泄漏到前端。

---

## 18. AI 扩展功能，可作为二期开发

如果时间允许，可以加入 AI 功能。

### 18.1 AI 文章摘要

在文章详情页展示：

- AI 摘要
- 核心观点
- 适合人群
- 阅读预计收益

### 18.2 AI 文章问答

用户可以针对当前文章提问。

例如：

```txt
这篇文章讲了什么？
这段代码是什么意思？
帮我总结一下这篇文章的核心知识点。
```

### 18.3 AI 写作助手

后台写文章时支持：

- 生成标题
- 生成摘要
- 优化文章
- 生成 SEO 关键词
- 生成文章大纲
- 改写语气
- 检查错别字

### 18.4 AI 全站语义搜索

用户输入自然语言问题，系统返回相关文章。

例如：

```txt
我想看 Redis 缓存穿透相关的文章
我想了解 RAG 检索优化
我想看 Kafka 异步处理相关项目
```

---

## 19. 初始化数据要求

系统初始化时需要自动生成一些示例数据，方便展示。

### 19.1 示例分类

- Java
- Spring Boot
- Redis
- Kafka
- Elasticsearch
- MySQL
- RAG
- 大模型
- 前端
- 项目复盘
- 面试经验

### 19.2 示例标签

- Java
- Spring Boot
- Redis
- Kafka
- ES
- RAG
- 向量检索
- 大模型
- Next.js
- TypeScript
- 面试
- 项目实战

### 19.3 示例文章

至少生成 8 篇示例文章：

1. 从零实现一个 RAG 知识库问答系统
2. Elasticsearch KNN + BM25 混合检索实践
3. Redis 在项目中的常见使用场景
4. Kafka 异步处理文档解析任务实践
5. Spring Security + JWT 实现无状态认证
6. WebSocket 实现大模型流式输出
7. MySQL 索引优化实战
8. 个人博客系统从 0 到 1 搭建记录

### 19.4 示例项目

至少生成 4 个示例项目：

1. RAG 知识库智能问答系统
2. 体检预约管理系统
3. 个人博客系统
4. AI 图片生成工具

---

## 20. 目录结构建议

推荐项目结构：

```txt
src
├── app
│   ├── page.tsx
│   ├── layout.tsx
│   ├── posts
│   ├── projects
│   ├── about
│   ├── resume
│   ├── guestbook
│   ├── archives
│   ├── search
│   ├── friends
│   ├── admin
│   └── api
├── components
│   ├── common
│   ├── layout
│   ├── ui
│   ├── animation
│   ├── markdown
│   ├── home
│   ├── post
│   ├── project
│   └── admin
├── config
├── constants
├── hooks
├── lib
├── prisma
├── services
├── store
├── styles
├── types
└── utils
```

---

## 21. 核心组件规划

需要开发以下通用组件：

### 布局组件

- `SiteHeader`
- `SiteFooter`
- `MobileNav`
- `AdminSidebar`
- `AdminHeader`
- `PageContainer`

### 动效组件

- `ParticleBackground`
- `AuroraBackground`
- `Spotlight`
- `FloatingCard`
- `GradientBorder`
- `RevealOnScroll`
- `MagneticButton`
- `AnimatedText`
- `TypewriterText`

### 文章组件

- `PostCard`
- `PostList`
- `PostToc`
- `PostHeader`
- `PostContent`
- `CodeBlock`
- `ReadingProgress`
- `PostLikeButton`
- `PostCommentList`

### 项目组件

- `ProjectCard`
- `ProjectGrid`
- `TechStackBadge`
- `ProjectDetail`

### 后台组件

- `AdminDataTable`
- `MarkdownEditor`
- `ImageUploader`
- `StatusBadge`
- `DashboardCard`
- `ChartCard`

---

## 22. 后台 Markdown 编辑器详细要求

编辑器页面布局：

```txt
左侧：文章配置表单
中间：Markdown 编辑区
右侧：实时预览
```

或者：

```txt
上方：文章元信息
下方：左右分屏编辑器
```

功能按钮：

- 保存草稿
- 发布文章
- 预览文章
- 上传封面
- 插入图片
- 插入代码块
- 插入提示块
- 自动生成摘要，可选
- 自动生成 SEO，可选

---

## 23. 首页视觉详细设计

首页布局建议：

```txt
1. Hero 首屏
2. 技术标签滚动墙
3. 精选文章
4. 项目作品集
5. 个人数据面板
6. 成长时间轴
7. 留言 / 联系我 CTA
```

Hero 区域要求：

- 左侧是文字介绍。
- 右侧是 3D 头像卡片或发光代码窗口。
- 背景是星云粒子。
- 下方有滚动提示。
- 鼠标移动时背景光斑跟随。

示例 Hero 文案：

```txt
构建智能系统，沉淀技术思考。

我是一名专注于 Java 后端、RAG 应用、大模型工程化和全栈开发的开发者。
这里记录我的项目实践、技术复盘、学习路径和创造力实验。
```

---

## 24. 文章详情页视觉详细设计

文章页布局：

```txt
顶部：文章封面 + 标题 + 元信息
中间：正文
左侧：目录
右侧：作者卡片 / 推荐文章
底部：评论区 / 相关文章
```

要求：

- 阅读区域宽度适中。
- 正文字体清晰。
- 标题层级明显。
- 代码块美观。
- 引用块有高级边框。
- 图片有圆角和阴影。
- 目录跟随滚动高亮。
- 顶部阅读进度条使用霓虹渐变。

---

## 25. 后台视觉详细设计

后台不需要过度炫酷，但要高级、清晰、现代。

风格：

- 深色仪表盘
- 数据卡片
- 图表可视化
- 表格简洁
- 操作按钮明确
- 表单布局清晰

后台 Dashboard 需要有：

- 数据概览卡片
- 访问趋势图
- 热门文章榜
- 最近评论
- 最近文章
- 快捷操作入口

---

## 26. 开发优先级

### P0 必须完成

1. 项目初始化。
2. 数据库设计。
3. 首页。
4. 文章列表。
5. 文章详情。
6. 分类。
7. 标签。
8. 后台登录。
9. 后台文章管理。
10. Markdown 编辑器。
11. 项目作品页。
12. 响应式适配。

### P1 优先完成

1. 评论系统。
2. 留言板。
3. 归档页。
4. 搜索功能。
5. 文件上传。
6. SEO。
7. 主题切换。
8. 数据统计 Dashboard。

### P2 可选增强

1. AI 文章摘要。
2. AI 写作助手。
3. AI 语义搜索。
4. 3D 星球。
5. 访客地图。
6. 文章收藏。
7. 用户系统。
8. 友链申请。

---

## 27. 开发步骤建议

请按照以下步骤开发：

### 第 1 阶段：基础工程

1. 创建 Next.js + TypeScript 项目。
2. 配置 Tailwind CSS。
3. 配置 shadcn/ui。
4. 配置 ESLint 和 Prettier。
5. 配置 Prisma。
6. 配置 PostgreSQL。
7. 设计数据库 schema。
8. 编写 seed 初始化数据。

### 第 2 阶段：前台页面

1. 实现首页。
2. 实现文章列表页。
3. 实现文章详情页。
4. 实现分类页。
5. 实现标签页。
6. 实现项目页。
7. 实现关于我页。
8. 实现简历页。

### 第 3 阶段：后台系统

1. 实现管理员登录。
2. 实现后台布局。
3. 实现 Dashboard。
4. 实现文章管理。
5. 实现 Markdown 编辑器。
6. 实现分类管理。
7. 实现标签管理。
8. 实现项目管理。

### 第 4 阶段：增强功能

1. 实现评论。
2. 实现留言板。
3. 实现搜索。
4. 实现归档。
5. 实现文件上传。
6. 实现主题切换。
7. 实现 SEO。

### 第 5 阶段：视觉和性能优化

1. 增加动效。
2. 优化首页视觉。
3. 优化文章阅读体验。
4. 优化移动端。
5. 优化加载速度。
6. 优化 SEO。
7. 完成最终测试。

---

## 28. 验收标准

项目完成后必须满足以下标准。

### 28.1 功能验收

- 可以正常访问首页。
- 可以查看文章列表。
- 可以查看文章详情。
- Markdown 可以正确渲染。
- 代码块可以高亮和复制。
- 分类和标签可以正常筛选。
- 项目作品可以正常展示。
- 后台可以登录。
- 后台可以新增、编辑、删除文章。
- 后台可以管理分类和标签。
- 后台可以上传图片。
- 搜索功能可用。
- 评论或留言功能可用。
- 响应式正常。

### 28.2 视觉验收

- 首页足够炫酷，有明显视觉冲击力。
- 暗黑科技风明显。
- 粒子背景正常。
- 卡片有玻璃拟态效果。
- 按钮有渐变和发光效果。
- 页面滚动动画自然。
- 移动端不混乱。
- 后台页面清晰高级。

### 28.3 性能验收

- 首页加载不卡顿。
- 移动端粒子效果不会严重掉帧。
- 图片经过优化。
- 文章详情页加载快速。
- Lighthouse 分数尽量达到：
  - Performance 85+
  - Accessibility 90+
  - Best Practices 90+
  - SEO 90+

### 28.4 代码验收

- 使用 TypeScript。
- 组件拆分清晰。
- API 命名规范。
- 数据库模型合理。
- 没有明显重复代码。
- 没有硬编码敏感信息。
- 环境变量使用 `.env`。
- 代码格式统一。
- 关键逻辑有注释。

---

## 29. 环境变量示例

```env
DATABASE_URL="postgresql://user:password@localhost:5432/nebula_blog"

NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

ADMIN_EMAIL="admin@example.com"
ADMIN_PASSWORD="123456"

UPLOAD_PROVIDER="local"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

---

## 30. 页面路由汇总

```txt
/                         首页
/posts                    文章列表
/posts/[slug]             文章详情
/categories               分类
/categories/[slug]        分类文章
/tags                     标签
/tags/[slug]              标签文章
/projects                 项目作品
/projects/[slug]          项目详情
/about                    关于我
/resume                   简历
/guestbook                留言板
/archives                 归档
/search                   搜索
/friends                  友链
/admin                    后台首页
/admin/login              后台登录
/admin/posts              文章管理
/admin/posts/new          新增文章
/admin/posts/[id]/edit    编辑文章
/admin/categories         分类管理
/admin/tags               标签管理
/admin/comments           评论管理
/admin/projects           项目管理
/admin/guestbook          留言管理
/admin/friends            友链管理
/admin/files              文件管理
/admin/settings           系统设置
```

---

## 31. Codex / AI 开发要求

请严格按照以下要求开发：

1. 先分析需求并给出项目结构。
2. 再初始化项目。
3. 每完成一个模块，保证项目可以运行。
4. 不要一次性堆大量不可运行代码。
5. 优先保证核心功能完整。
6. UI 要尽可能高级，不要默认白底模板。
7. 所有页面都要适配移动端。
8. 所有组件都要使用 TypeScript。
9. 不要使用过时写法。
10. 后台和前台要分层清晰。
11. 数据库 schema 要完整。
12. seed 数据要足够丰富，方便展示。
13. 所有核心页面不能空白。
14. 如果某个高级功能暂时无法完成，请先保留接口和组件结构。
15. 开发完成后提供运行说明。

---

## 32. 运行命令要求

项目最终需要支持以下命令：

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
npx prisma migrate dev
npx prisma db seed
```

---

## 33. 最终交付物

最终需要交付：

1. 完整 Next.js 项目代码。
2. Prisma 数据库模型。
3. 初始化 seed 数据。
4. 前台页面。
5. 后台管理系统。
6. Markdown 编辑器。
7. 响应式适配。
8. README 使用说明。
9. 环境变量示例。
10. 部署说明。

---

## 34. README 要求

README 至少包含：

- 项目介绍
- 技术栈
- 功能列表
- 页面预览截图位置
- 本地运行方式
- 数据库初始化方式
- 环境变量说明
- 项目目录结构
- 部署方式
- 后续计划

---

## 35. 最终效果要求

这个博客系统最终看起来应该像：

- 一个高级程序员的个人品牌官网。
- 一个技术博客。
- 一个作品集网站。
- 一个带后台 CMS 的内容管理系统。
- 一个暗黑科技风的沉浸式数字空间。

视觉上不能普通，不能像模板站，不能像默认后台管理系统。

必须做到：

**首页惊艳，文章页舒服，后台好用，项目页专业，动效丝滑，整体高级。**

---

## 36. 建议发送给 Codex 的开场指令

可以把本文档发给 Codex 后，再补充下面这句话：

```txt
请先不要直接写全部代码，先根据这份需求文档帮我规划项目架构、技术选型、数据库表结构和开发顺序，然后从项目初始化开始逐步实现。每完成一个阶段都要保证项目可以运行。
```
