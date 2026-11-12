import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/site";
import { SectionHeader } from "../SectionHeader";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const inner = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-sunken">
        {p.image && (
          <Image
            src={p.image}
            alt={`Projeto ${p.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{p.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-fg">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
        </div>
        {p.href && (
          <ArrowUpRight className="size-5 shrink-0 text-subtle transition-colors group-hover:text-brand-ink" aria-hidden="true" />
        )}
      </div>
    </>
  );
  return (
    <li data-reveal style={{ ["--d" as string]: `${(i % 3) * 80}ms` }} className="group">
      {p.href ? (
        <a href={p.href} target="_blank" rel="noopener noreferrer" className="block">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}

/** Estrutura apresentada enquanto não existem projetos publicados. */
function EmptyShowcase() {
  return (
    <div data-reveal className="mt-16">
      <ul className="grid gap-4 md:grid-cols-3 md:grid-rows-[13rem_13rem]" aria-hidden="true">
        {["Sistema web", "Plataforma digital", "Automação"].map((label, i) => (
          <li key={label} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
            <div className="grid-lines relative flex aspect-[16/10] items-end rounded-xl border border-dashed border-line-strong bg-elev p-5 md:aspect-auto md:h-full">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{label}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-xl border border-line bg-elev p-6 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
          <span className="font-semibold text-fg">Estudos de caso em preparação.</span> Os projetos serão publicados aqui
          à medida que forem autorizados pelos respetivos clientes. Quer saber mais sobre o nosso trabalho? Fale connosco.
        </p>
        <a href="#contacto" className="btn btn-ghost h-11 shrink-0 text-sm">
          Pedir apresentação
        </a>
      </div>
    </div>
  );
}

/** Primeiro projeto da lista, apresentado em destaque. */
function FeaturedProject({ p }: { p: Project }) {
  return (
    <article data-reveal className="group mt-16 grid gap-8 lg:grid-cols-[1.45fr_1fr] lg:items-center lg:gap-14">
      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="block overflow-hidden rounded-2xl border border-line bg-elev"
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          {p.href && (
            <span className="ml-3 truncate font-mono text-[11px] text-subtle">{p.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span>
          )}
        </div>
        {p.image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={p.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </a>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{p.category}</p>
        <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-fg">{p.title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{p.summary}</p>
        {p.tags && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <li key={t} className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-muted">
                {t}
              </li>
            ))}
          </ul>
        )}
        {p.href && (
          <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-8">
            Visitar website
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only">(abre num novo separador)</span>
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="projetos" aria-labelledby="projetos-titulo" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          id="projetos-titulo"
          eyebrow="Projetos"
          title="Projetos realizados."
          lead="Trabalho desenvolvido pela ByteMoz para os seus clientes."
        />
        {featured ? (
          <>
            <FeaturedProject p={featured} />
            {rest.length > 0 && (
              <ul className="mt-20 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p, i) => (
                  <ProjectCard key={p.title} p={p} i={i} />
                ))}
              </ul>
            )}
          </>
        ) : (
          <EmptyShowcase />
        )}
      </div>
    </section>
  );
}
