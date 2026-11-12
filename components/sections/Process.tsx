import { PROCESS } from "@/lib/site";
import { SectionHeader } from "../SectionHeader";

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="processo-titulo"
          eyebrow="Como trabalhamos"
          title="Um processo simples, transparente e colaborativo."
          lead="Envolvemos o cliente em cada etapa, para que a solução final responda exatamente ao que o negócio precisa."
        />

        <ol className="relative mt-16 grid gap-0 lg:grid-cols-5 lg:gap-6">
          {/* linha de ligação (desktop) */}
          <span aria-hidden="true" className="absolute left-0 right-0 top-[1.1rem] hidden h-px bg-line lg:block" />
          {PROCESS.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              style={{ ["--d" as string]: `${i * 90}ms` }}
              className="group relative grid grid-cols-[2.25rem_1fr] gap-x-5 pb-10 last:pb-0 lg:block lg:pb-0"
            >
              {/* linha de ligação (mobile) */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[1.1rem] top-9 w-px bg-line group-last:hidden lg:hidden"
              />
              <span className="relative z-10 grid size-9 place-items-center rounded-full border border-line-strong bg-bg font-mono text-xs font-medium text-fg transition-colors duration-300 group-hover:border-brand-ink group-hover:bg-brand group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-7 lg:pr-2">
                <h3 className="pt-1.5 text-base font-semibold text-fg lg:pt-0">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
