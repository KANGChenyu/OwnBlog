import type { ReactNode } from "react";

export function Badge({ children, tone = "cyan" }: { children: ReactNode; tone?: "cyan" | "violet" | "pink" | "slate" }) {
  const tones = {
    cyan: "border-cyan-300/25 bg-cyan-400/10 text-cyan-100",
    violet: "border-violet-300/25 bg-violet-400/10 text-violet-100",
    pink: "border-pink-300/25 bg-pink-400/10 text-pink-100",
    slate: "border-slate-300/20 bg-slate-400/10 text-slate-100",
  };
  return <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}
