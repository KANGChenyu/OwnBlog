import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const styles =
    variant === "primary"
      ? "border-cyan-300/35 bg-cyan-300/15 text-cyan-50 shadow-[0_0_32px_rgba(6,182,212,.18)] hover:bg-cyan-300/22"
      : "border-slate-300/18 bg-slate-900/40 text-slate-100 hover:border-violet-300/35 hover:bg-violet-300/10";

  return (
    <Link className={`inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles}`} href={href}>
      {children}
    </Link>
  );
}
