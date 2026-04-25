import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      <Badge tone="violet">{eyebrow}</Badge>
      <h2 className="mt-4 text-2xl font-semibold tracking-normal text-slate-50 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-slate-400 md:text-base">{description}</p> : null}
    </div>
  );
}
