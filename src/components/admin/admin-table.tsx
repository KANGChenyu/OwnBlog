import { GlassCard } from "@/components/ui/glass-card";

export function AdminTable({ title, rows }: { title: string; rows: Array<Record<string, string | number>> }) {
  const keys = Object.keys(rows[0] ?? { name: "" });
  return (
    <GlassCard>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">新增</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="text-slate-500">
            <tr>{keys.map((key) => <th key={key} className="border-b border-slate-300/10 px-3 py-3">{key}</th>)}<th className="border-b border-slate-300/10 px-3 py-3">操作</th></tr>
          </thead>
          <tbody>
            {rows.map((row, index) => <tr key={index} className="text-slate-300">{keys.map((key) => <td key={key} className="border-b border-slate-300/8 px-3 py-3">{row[key]}</td>)}<td className="border-b border-slate-300/8 px-3 py-3 text-cyan-200">编辑 · 删除</td></tr>)}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
