import { ArrowRight, Plus } from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/site";
import { SectionHeader } from "../SectionHeader";

/** Ilustração abstrata de interface — sem dados, apenas estrutura. */
function InterfaceSketch({ modules }: { modules: string[] }) {
  return (
    <div aria-hidden="true" className="overflow-hidden rounded-xl border border-line bg-bg">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="size-2 rounded-full bg-line-strong" />
        <span className="ml-3 h-2 w-28 rounded-full bg-line" />
      </div>
      <div className="grid grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr]">
        <ul className="space-y-1 border-r border-line p-3">
          {modules.map((m, i) => (
            <li
              key={m}
              className={`truncate rounded-md px-2.5 py-1.5 text-[11px] font-medium ${
                i === 0 ? "bg-brand-soft text-brand-ink" : "text-subtle"
              }`}
            >
              {m}
            </li>
          ))}
        </ul>
        <div className="space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((k) => (
              <div key={k} className="min-w-0 rounded-lg border border-line p-3">
                <span className="block h-1.5 w-1/2 rounded-full bg-line" />
                <span className={`mt-3 block h-2.5 w-3/4 rounded-full ${k === 1 ? "bg-accent-bright/60" : "bg-line-strong"}`} />
              </div>
            ))}
          </div>
          <div className="flex h-24 items-end gap-1.5 rounded-lg border border-line p-3">
            {[38, 55, 42, 68, 50, 76, 62, 84, 70, 92].map((h, k) => (
              <span
                key={k}
                className={`flex-1 rounded-sm ${k === 9 ? "bg-brand" : "bg-brand-ink/25"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="space-y-2">
            {[80, 64, 72].map((w, k) => (
              <span key={k} className="block h-2 rounded-full bg-line" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article data-reveal className="card grid gap-10 p-7 md:p-10 lg:col-span-2 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{p.category}</p>
        <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-fg">{p.name}</h3>
        <p className="mt-4 leading-relaxed text-muted">{p.desc}</p>
        <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-2.5">
          {p.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-fg">
              <span className="size-1.5 shrink-0 rounded-full bg-brand-ink" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
        <a href={p.href} className="btn btn-primary mt-9" aria-label={`Conhecer solução ${p.name}`}>
          Conhecer solução
          <ArrowRight className="arrow size-4" />
        </a>
      </div>
      <InterfaceSketch modules={p.features} />
    </article>
  );
}

export function Products() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-titulo" className="border-t border-line bg-sunken py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="solucoes-titulo"
          eyebrow="Soluções e produtos"
          title="Plataformas desenvolvidas pela ByteMoz."
          lead="Além de projetos à medida, criamos produtos próprios que resolvem necessidades comuns às empresas moçambicanas."
        />

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}

          <article
            data-reveal
            style={{ ["--d" as string]: "120ms" }}
            className="flex flex-col justify-between rounded-2xl border border-dashed border-line-strong p-7 md:p-10"
          >
            <span className="grid size-11 place-items-center rounded-xl border border-dashed border-line-strong text-subtle">
              <Plus className="size-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-fg">Novas soluções</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                Este espaço irá reunir as próximas plataformas da ByteMoz. Tem uma necessidade que poderia tornar-se um
                produto? Gostaríamos de a conhecer.
              </p>
              <a
                href="#contacto"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:underline"
              >
                Partilhar uma ideia
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
