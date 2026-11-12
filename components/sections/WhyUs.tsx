import { WHY } from "@/lib/site";

export function WhyUs() {
  return (
    <section aria-labelledby="porque-titulo" className="border-t border-line py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32" data-reveal>
            <p className="eyebrow">Porquê a ByteMoz</p>
            <h2 id="porque-titulo" className="h-section mt-5">
              Um parceiro tecnológico, não apenas um fornecedor.
            </h2>
            <p className="lead mt-5 max-w-md">
              O nosso trabalho não termina no código. Preocupamo-nos com o que a solução muda no dia a dia de quem a
              utiliza.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {WHY.map((w, i) => (
            <li
              key={w.title}
              data-reveal
              className="group grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] lg:first:pt-2"
            >
              <span className="font-mono text-sm text-subtle transition-colors group-hover:text-brand-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.015em] text-fg">{w.title}</h3>
                <p className="mt-2.5 max-w-xl leading-relaxed text-muted">{w.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
