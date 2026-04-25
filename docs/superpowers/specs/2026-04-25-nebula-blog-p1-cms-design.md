# Nebula Blog P1 CMS Design

## Goal

Turn the P0 admin post prototype into a real local CMS loop: Prisma-backed storage, seeded content, admin post list from the database, and create/edit/delete actions.

## Scope

This phase uses SQLite for local development so the app runs immediately on this machine. The schema keeps the same entity boundaries as the P0 PostgreSQL plan, but stores list-like project fields as text to stay SQLite-compatible. PostgreSQL can be restored later by changing the datasource provider and normalizing list fields.

Included:

- Prisma datasource switched to SQLite.
- Local `.env` with `DATABASE_URL="file:./dev.db"`.
- Seed script imports the existing P0 content into real tables.
- Prisma client singleton.
- Mapping helpers from Prisma records to the existing `Post` view model.
- Admin post list reads from Prisma.
- New/edit post forms use server actions.
- Delete action is available from the admin table.

Deferred:

- Auth.js route protection.
- Categories/tags CRUD.
- Frontend fully switching to database data.
- File upload and comment moderation.

## Design

`src/lib/prisma.ts` owns the Prisma client. `src/lib/post-repository.ts` owns database reads and maps database rows into the existing `Post` shape through `src/lib/post-mapper.ts`.

Admin write paths live in `src/app/admin/posts/actions.ts`. Forms post directly to server actions. On success, actions revalidate the admin and public post routes, then redirect back to the relevant admin page.

## Testing

Add Vitest coverage for post mapping so the UI can keep using the existing `Post` type while the database model evolves. Existing content-query and Markdown tests remain unchanged.

## Acceptance Criteria

- `npx prisma migrate dev --name init` succeeds.
- `npx prisma db seed` populates posts, categories, tags, projects, friends, and guestbook.
- `/admin/posts` renders database posts.
- `/admin/posts/new` can create a post.
- `/admin/posts/[id]/edit` can update a post.
- `npm run test`, `npm run lint`, and `npm run build` pass.
