import { notFound } from "next/navigation";
import { updatePostAction } from "@/app/admin/posts/actions";
import { PostEditorForm } from "@/components/admin/post-editor-form";
import { AdminShell } from "@/components/layout/admin-shell";
import { getAdminPostById, getPostEditorOptions } from "@/lib/post-repository";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [post, options] = await Promise.all([getAdminPostById(id), getPostEditorOptions()]);
  if (!post) notFound();

  return (
    <AdminShell title={`编辑文章：${post.title}`}>
      <PostEditorForm post={post} categories={options.categories} tags={options.tags} action={updatePostAction.bind(null, post.id)} />
    </AdminShell>
  );
}
