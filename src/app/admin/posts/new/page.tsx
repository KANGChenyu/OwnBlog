import { createPostAction } from "@/app/admin/posts/actions";
import { PostEditorForm } from "@/components/admin/post-editor-form";
import { AdminShell } from "@/components/layout/admin-shell";
import { getPostEditorOptions } from "@/lib/post-repository";

export default async function NewPostPage() {
  const { categories, tags } = await getPostEditorOptions();

  return (
    <AdminShell title="新建文章">
      <PostEditorForm categories={categories} tags={tags} action={createPostAction} />
    </AdminShell>
  );
}
