import { Cctv, CodeXml, DatabaseZap, Globe, Headset, Lightbulb, Network } from "lucide-react";
import { SERVICE_GROUPS, SERVICES } from "@/lib/site";
import { SectionHeader } from "../SectionHeader";

const ICONS = {
  network: Network,
  helpdesk: Headset,
  data: DatabaseZap,
  cctv: Cctv,
  software: CodeXml,
  web: Globe,
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
            title="Tecnologia para cada área da sua organização."
          />
          <p className="lead max-w-md lg:pb-1" data-reveal>
            Da infraestrutura ao software, cuidamos da tecnologia de que a sua empresa precisa para funcionar e crescer.
          </p>
        </div>

        {SERVICE_GROUPS.map((group, g) => {
          const items = SERVICES.filter((s) => s.group === group.id);
          const offset = SERVICES.findIndex((s) => s.group === group.id);
          return (
            <div key={group.id} className={g === 0 ? "mt-16" : "mt-20"}>
              <div
                data-reveal
                className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <h3 className="flex items-baseline gap-3 text-lg font-semibold text-fg">
                  <span className="font-mono text-xs font-medium text-brand-ink">0{g + 1}</span>
                  {group.title}
                </h3>
                <p className="max-w-md text-sm text-muted sm:text-right">{group.desc}</p>
              </div>

              <ul
                className={`mt-6 grid gap-4 sm:grid-cols-2 ${
                  items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                }`}
              >
                {items.map((s, i) => {
                  const Icon = ICONS[s.icon];
                  return (
                    <li
                      key={s.title}
                      data-reveal
                      style={{ ["--d" as string]: `${i * 70}ms` }}
                      className={`card group flex flex-col p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-line-strong ${
                        items.length === 3 && i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="grid size-11 place-items-center rounded-xl border border-line bg-bg text-brand-ink transition-colors duration-300 group-hover:border-brand-ink group-hover:bg-brand group-hover:text-white">
                          <Icon className="size-5" strokeWidth={1.8} aria-hidden="true" />
                        </span>
                        <span className="font-mono text-xs text-subtle">/{String(offset + i + 1).padStart(2, "0")}</span>
                      </div>
                      <h4 className="mt-7 text-lg font-semibold leading-snug tracking-[-0.01em] text-fg [text-wrap:balance]">{s.title}</h4>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{s.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
