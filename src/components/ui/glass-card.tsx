import type { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 ${className}`}>{children}</div>;
}
