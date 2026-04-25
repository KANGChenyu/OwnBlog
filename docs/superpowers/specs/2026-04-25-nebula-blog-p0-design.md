# Nebula Blog P0 Design

## Goal

Build a runnable first version of Nebula Blog: a dark, futuristic personal blog and portfolio with rich front-end pages, local seed content, Markdown rendering, search/filter behavior, and an admin-facing content management prototype.

## Scope

P0 focuses on a complete interactive product shell rather than a production database-backed CMS. The app will use typed local seed data and clear service boundaries so Prisma, PostgreSQL, Auth.js, uploads, and real CRUD can be added next without rewriting the UI.

Included:

- Next.js App Router project with TypeScript, Tailwind CSS, ESLint, and Vitest.
- Public pages: home, posts, post detail, categories, category detail, tags, tag detail, projects, project detail, about, resume, guestbook, archives, search, friends.
- Admin pages: dashboard, login, posts, new/edit article editor, categories, tags, comments, projects, guestbook, friends, files, settings.
- Markdown rendering with custom callout blocks, code blocks, table support, reading time, table of contents, and reading progress.
- Static seed content for posts, projects, categories, tags, timeline, skills, friends, guestbook, and dashboard metrics.
- Dark cyber-nebula visual language with responsive navigation, particle background, glass panels, neon accents, animated cards, and mobile layouts.
- README, environment example, and placeholder Prisma schema/seed to document the intended full-stack path.

Deferred:

- Real authentication, real database persistence, file upload storage, comments moderation workflow, and AI features.
- These get stable UI routes and type-safe placeholders in P0.

## Architecture

The app uses Next.js Server Components for static content pages and small client components for interaction-heavy features such as search controls, theme switching, mobile nav, reading progress, Markdown copy buttons, and the admin editor preview.

Data lives in `src/lib/content.ts` and is exposed through pure query helpers in `src/lib/content-query.ts`. UI components are split by responsibility under `src/components`, with reusable layout and visual primitives shared across public and admin routes.

## Data Model

Seed data models:

- `Post`: title, slug, excerpt, content, category, tags, cover, status, featured, pinned, counts, dates, SEO fields.
- `Project`: title, slug, summary, content sections, tech stack, status, links, highlights, screenshots.
- `Category` and `Tag`: name, slug, description, color, count.
- `TimelineItem`, `Skill`, `FriendLink`, `GuestbookMessage`, `DashboardMetric`.

The Prisma schema mirrors these models with future-ready entities for users, comments, likes, bookmarks, files, and settings.

## Pages

Public pages share `SiteHeader`, `SiteFooter`, `ParticleBackground`, and `PageShell`.

- `/`: immersive hero, skill marquee, featured posts, projects, metrics, timeline, contact CTA.
- `/posts`: searchable and filterable post list.
- `/posts/[slug]`: Markdown article with TOC, progress bar, metadata, related posts, previous/next navigation.
- `/categories`, `/categories/[slug]`, `/tags`, `/tags/[slug]`: discovery surfaces for content taxonomy.
- `/projects`, `/projects/[slug]`: project portfolio and professional project detail pages.
- `/about`, `/resume`: personal brand, skills, timeline, downloadable-resume placeholder.
- `/guestbook`, `/friends`: interactive-looking forms and published seed content.
- `/archives`, `/search`: chronological browsing and command-palette-inspired search.

Admin pages share `AdminShell`.

- `/admin`: dashboard cards, charts-as-CSS panels, recent content.
- `/admin/login`: login UI with documented demo credentials.
- `/admin/posts`, `/admin/posts/new`, `/admin/posts/[id]/edit`: list and Markdown editor prototype.
- `/admin/categories`, `/admin/tags`, `/admin/comments`, `/admin/projects`, `/admin/guestbook`, `/admin/friends`, `/admin/files`, `/admin/settings`: management tables/forms with clear empty and action states.

## Visual Design

Use a dark base (`#020617`, `#050816`) with cyan, violet, blue, and magenta accents. Avoid a single-hue look by mixing cool gradients with sparse warm rose highlights. Cards are compact glass panels with restrained radius, neon borders, and subtle hover motion.

The interface should feel like a polished developer portfolio, not a marketing landing page. The home page is the first screen of the product and leads directly into articles, projects, and personal data.

## Testing

Use Vitest for pure content behavior:

- Search matches title, excerpt, body, category, tags, and project names.
- Category and tag filters return correct posts.
- Related posts exclude the current article and prefer shared tags/category.
- Markdown helpers extract headings and reading time.

Use `npm run lint`, `npm run test`, and `npm run build` as the completion gate.

## Acceptance Criteria

- `npm install`, `npm run dev`, `npm run build`, `npm run lint`, and `npm run test` are supported.
- All required P0 routes render non-empty pages.
- Public pages are responsive at desktop, tablet, and phone widths.
- Markdown article rendering includes code blocks, callouts, headings, table, and TOC data.
- Admin routes render usable prototypes with clear future integration boundaries.
- README explains setup, environment variables, database path, and feature scope.
