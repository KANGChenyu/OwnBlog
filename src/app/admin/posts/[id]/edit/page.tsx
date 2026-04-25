import { MarkdownEditorPrototype } from "@/components/admin/markdown-editor-prototype";
import { AdminShell } from "@/components/layout/admin-shell";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AdminShell title={`编辑文章 ${id}`}>
      <MarkdownEditorPrototype />
    </AdminShell>
  );
}
