import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section aria-labelledby="cta-titulo" className="py-8 md:py-12">
      <div className="container-x">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl bg-navy px-6 py-20 text-center md:px-16 md:py-28 dark:border dark:border-line"
        >
          {/* padrão de circuito discreto */}
          <svg aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
            <defs>
              <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M48 0H0V48" fill="none" stroke="rgba(150,168,210,0.12)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-grid)" />
          </svg>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 -z-10 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4c7dff] to-transparent"
          />

          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#7aa0ff]">Vamos conversar</p>
          <h2
            id="cta-titulo"
            className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,1.2rem+3.4vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.04em] text-white [text-wrap:balance]"
          >
            Tem uma ideia ou um desafio tecnológico?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#a9b6d3]">
            Vamos transformar o seu desafio numa solução digital.
          </p>
          <a
            href="#contacto"
            className="btn mt-10 h-13 bg-white px-7 text-[#071027] hover:bg-[#e6ecfa]"
          >
            Fale com a ByteMoz
            <ArrowRight className="arrow size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
