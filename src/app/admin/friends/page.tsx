import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";
import { friends } from "@/lib/content";

export default function AdminFriendsPage() {
  return <AdminShell title="友链管理"><AdminTable title="友链列表" rows={friends.map((friend) => ({ 站点: friend.name, 站长: friend.owner, 状态: friend.status, 地址: friend.url }))} /></AdminShell>;
}
