# Nebula Blog P0 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a runnable P0 Next.js personal blog/CMS prototype for Nebula Blog.

**Architecture:** Use typed local seed data with pure query helpers, then render the public and admin routes through reusable Next.js components. Keep persistence boundaries explicit so Prisma/PostgreSQL/Auth.js can replace mock data later.

**Tech Stack:** Next.js 15, React, TypeScript, Tailwind CSS, Vitest, React Markdown, remark-gfm, rehype-highlight, Lucide React.

---

## File Structure

- `package.json`: scripts and dependencies.
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `vitest.config.ts`: project configuration.
- `src/app`: App Router pages and route layouts.
- `src/components/layout`: site and admin shells.
- `src/components/home`, `src/components/post`, `src/components/project`, `src/components/admin`: feature components.
- `src/components/ui`: reusable glass panels, buttons, badges, inputs, empty states.
- `src/lib/content.ts`: seed content.
- `src/lib/content-query.ts`: tested query helpers.
- `src/lib/markdown.ts`: tested Markdown helper functions.
- `src/types/content.ts`: shared TypeScript types.
- `src/test`: Vitest tests.
- `prisma/schema.prisma`, `prisma/seed.ts`: future database model and seed path.
- `.env.example`, `README.md`: setup and delivery documentation.

## Tasks

### Task 1: Scaffold Project

- [ ] Create config files and install dependencies.
- [ ] Add Tailwind global styles and root app layout.
- [ ] Run `npm install`.

### Task 2: Write Query Tests

- [ ] Create Vitest tests for search, filtering, related posts, heading extraction, and reading time.
- [ ] Run `npm run test` and confirm tests fail because helpers do not exist yet.

### Task 3: Implement Data and Helpers

- [ ] Add content types, seed data, content query helpers, and Markdown helpers.
- [ ] Run `npm run test` and confirm tests pass.

### Task 4: Build Shared UI and Layout

- [ ] Add site header, footer, mobile nav, admin shell, particle background, glass panels, buttons, badges, and section headings.
- [ ] Verify layout compiles with `npm run lint`.

### Task 5: Build Public Routes

- [ ] Implement home, posts, post detail, categories, tags, projects, project detail, about, resume, guestbook, archives, search, and friends routes.
- [ ] Ensure every page renders meaningful seed content.

### Task 6: Build Admin Prototype

- [ ] Implement admin dashboard, login, posts list, Markdown editor prototype, and management placeholder pages.
- [ ] Keep UI realistic but clearly mock-backed.

### Task 7: Add Prisma and Docs

- [ ] Add Prisma schema and seed script.
- [ ] Write `.env.example` and complete README.

### Task 8: Verify

- [ ] Run `npm run test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start `npm run dev` and inspect the app in browser at local URL.

## Self Review

- Scope matches the approved P0 design: static data first, database-ready boundaries, public pages, admin prototype, and docs.
- No placeholders are used for required P0 routes; deferred production behaviors are represented by visible prototypes.
- Type names are consistent: `Post`, `Project`, `Category`, `Tag`, `TimelineItem`, `Skill`, `FriendLink`, `GuestbookMessage`.
