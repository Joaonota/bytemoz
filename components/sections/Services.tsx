import { AppWindow, Blocks, Building2, CodeXml, Lightbulb, Workflow } from "lucide-react";
import { SERVICES } from "@/lib/site";
import { SectionHeader } from "../SectionHeader";

const ICONS = {
  web: CodeXml,
  apps: AppWindow,
  automation: Workflow,
  enterprise: Building2,
  product: Blocks,
  consulting: Lightbulb,
} as const;

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="border-t border-line bg-sunken py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            id="servicos-titulo"
            eyebrow="O que fazemos"
            title="Soluções digitais do conceito à operação."
          />
          <p className="lead max-w-md lg:pb-1" data-reveal>
            Desenvolvemos tecnologia que se adapta ao seu negócio — e não o contrário.
          </p>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                style={{ ["--d" as string]: `${(i % 3) * 80}ms` }}
                className="card group relative flex flex-col p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl border border-line bg-bg text-brand-ink transition-colors duration-300 group-hover:border-brand-ink group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-subtle">/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold leading-snug tracking-[-0.01em] text-fg">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{s.desc}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-7">
                  {s.items.map((it) => (
                    <li key={it} className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted">
                      {it}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
