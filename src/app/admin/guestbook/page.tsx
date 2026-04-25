import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { guestbookMessages } from "@/lib/content";

export default function AdminGuestbookPage() {
  return <AdminShell title="留言管理"><AdminTable title="留言列表" rows={guestbookMessages.map((message) => ({ 昵称: message.name, 内容: message.content, 点赞: message.likes, 时间: message.createdAt }))} /></AdminShell>;
}
