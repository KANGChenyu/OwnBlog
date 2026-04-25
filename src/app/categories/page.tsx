import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories, posts } from "@/lib/content";

export default function CategoriesPage() {
  return (
    <PageShell>
      <SectionHeading eyebrow="Categories" title="文章分类" description="按知识领域组织文章，快速进入系统化复盘。" />
      <div className="grid gap-5 md:grid-cols-3">
        {categories.map((category) => (
          <a href={`/categories/${category.slug}`} key={category.slug}>
            <GlassCard>
              <div className="h-24 rounded-2xl" style={{ background: `linear-gradient(135deg, ${category.color}55, rgba(15,23,42,.35))` }} />
              <h2 className="mt-5 text-xl font-semibold">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{category.description}</p>
              <p className="mt-4 text-sm text-cyan-200">{posts.filter((post) => post.category === category.slug).length} 篇文章</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
