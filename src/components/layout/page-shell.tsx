import type { ReactNode } from "react";
import { ParticleBackground } from "@/components/layout/particle-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ParticleBackground />
      <SiteHeader />
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-10 md:px-6 md:py-14">{children}</main>
      <SiteFooter />
    </>
  );
}
