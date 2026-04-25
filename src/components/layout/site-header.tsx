import Link from "next/link";
import { Menu } from "lucide-react";

const nav = [
  ["文章", "/posts"],
  ["分类", "/categories"],
  ["标签", "/tags"],
  ["项目", "/projects"],
  ["简历", "/resume"],
  ["后台", "/admin"],
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-300/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">N</span>
          <span>Nebula Blog</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl border border-slate-300/15 bg-white/5">
            <Menu size={18} />
          </summary>
          <div className="glass absolute right-0 mt-3 grid w-44 gap-1 rounded-2xl p-2">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-white/8">
                {label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
