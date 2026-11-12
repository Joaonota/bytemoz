import { Compass, Handshake, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

const PILLARS = [
  {
    Icon: MapPin,
    title: "Contexto local",
    desc: "Conhecemos o mercado moçambicano, os seus desafios e as suas oportunidades.",
  },
  {
    Icon: Compass,
    title: "Soluções à medida",
    desc: "Cada projeto parte das necessidades reais do cliente, não de um modelo pronto.",
  },
  {
    Icon: Handshake,
    title: "Parceria duradoura",
    desc: "Acompanhamos as soluções depois da entrega, à medida que o negócio evolui.",
  },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="border-t border-line py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">Sobre a ByteMoz</p>
          <h2 id="sobre-titulo" className="h-section mt-5">
            Tecnologia pensada para a realidade moçambicana.
          </h2>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            {SITE.slogan} <span className="text-accent">Impulsionamos Moçambique.</span>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="space-y-6 text-[1.0625rem] leading-[1.8] text-muted" data-reveal style={{ ["--d" as string]: "80ms" }}>
            <p>
              A <strong className="font-semibold text-fg">ByteMoz</strong> é uma empresa moçambicana de tecnologia que
              apoia empresas, instituições e empreendedores em todas as frentes tecnológicas — do software e dos websites
              às redes, ao suporte técnico e à segurança. Acreditamos que a tecnologia só faz sentido quando resolve
              problemas reais, e que as organizações moçambicanas merecem soluções pensadas para a sua realidade.
            </p>
            <p>
              Trabalhamos lado a lado com os nossos clientes para compreender como funcionam, onde perdem tempo e de que
              precisam para crescer. A partir daí, desenvolvemos sistemas e plataformas, montamos e mantemos
              infraestruturas e protegemos dados e instalações, para que a tecnologia trabalhe a favor do negócio.
            </p>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {PILLARS.map(({ Icon, title, desc }, i) => (
              <li key={title} className="bg-elev p-6" data-reveal style={{ ["--d" as string]: `${120 + i * 80}ms` }}>
                <Icon className="size-5 text-brand-ink" strokeWidth={1.8} aria-hidden="true" />
                <h3 className="mt-5 font-semibold text-fg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
