# Nebula Blog P1 CMS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a real local Prisma-backed CMS loop for blog posts.

**Architecture:** Use SQLite in local development, Prisma for persistence, server actions for admin writes, and mapper/repository helpers to keep UI components stable.

**Tech Stack:** Next.js server actions, Prisma, SQLite, TypeScript, Vitest.

---

## Tasks

### Task 1: Database Foundation

- [ ] Switch Prisma datasource to SQLite.
- [ ] Make schema SQLite-compatible.
- [ ] Add local `.env`.
- [ ] Rewrite seed script to import P0 content.

### Task 2: Repository and Tests

- [ ] Add post mapper tests.
- [ ] Implement Prisma client, mapper, and repository helpers.
- [ ] Verify tests turn green.

### Task 3: Admin Post CRUD

- [ ] Add server actions for create, update, delete.
- [ ] Replace prototype editor with form-backed editor.
- [ ] Read `/admin/posts` from Prisma.
- [ ] Wire `/admin/posts/new` and `/admin/posts/[id]/edit`.

### Task 4: Migrate and Verify

- [ ] Run Prisma migrate and seed.
- [ ] Run tests, lint, and build.
- [ ] Browser-check admin post pages.

## Self Review

- Scope is deliberately limited to the first real CMS loop.
- No production auth claim is made in this phase.
- Frontend public pages can keep static content until the database-backed post loop is stable.
