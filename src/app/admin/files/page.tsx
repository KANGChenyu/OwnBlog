import { AdminShell } from "@/components/layout/admin-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function AdminFilesPage() {
  return <AdminShell title="文件管理"><GlassCard><h2 className="text-xl font-semibold">图片上传</h2><div className="mt-5 rounded-2xl border border-dashed border-cyan-300/25 p-10 text-center text-slate-400">拖拽图片到这里。P0 使用本地占位，后续接入 UploadThing / S3 / MinIO。</div></GlassCard></AdminShell>;
}
