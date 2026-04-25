import { AdminTable } from "@/components/admin/admin-table";
import { AdminShell } from "@/components/layout/admin-shell";

export default function AdminCommentsPage() {
  return <AdminShell title="评论管理"><AdminTable title="最新评论" rows={[{ 昵称: "Async Dev", 文章: "RAG 知识库", 状态: "已通过", 时间: "2026-04-21" }, { 昵称: "Reader", 文章: "Redis 场景", 状态: "待审核", 时间: "2026-04-20" }]} /></AdminShell>;
}
