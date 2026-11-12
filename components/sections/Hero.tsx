import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LEFT = [
  { label: "Processos", y: 90 },
  { label: "Dados", y: 220 },
  { label: "Equipas", y: 350 },
];
const RIGHT = [
  { label: "Gestão", y: 90 },
  { label: "Automação", y: 220 },
  { label: "Crescimento", y: 350 },
];

const TRACES_IN = [
  "M150 90 H170 Q180 90 180 100 V185 Q180 195 190 195 H208",
  "M150 220 H208",
  "M150 350 H170 Q180 350 180 340 V255 Q180 245 190 245 H208",
];
const TRACES_OUT = [
  "M312 195 H330 Q340 195 340 185 V100 Q340 90 350 90 H370",
  "M312 220 H370",
  "M312 245 H330 Q340 245 340 255 V340 Q340 350 350 350 H370",
];

const BITS = [
  { x: 214, y: 128, s: 9, c: "brand", d: "0s" },
  { x: 230, y: 116, s: 7, c: "brand", d: "1.2s" },
  { x: 268, y: 122, s: 8, c: "accent", d: "0.6s" },
  { x: 290, y: 132, s: 6, c: "brand", d: "2s" },
  { x: 250, y: 104, s: 6, c: "accent", d: "2.8s" },
  { x: 222, y: 302, s: 7, c: "accent", d: "1.6s" },
  { x: 282, y: 306, s: 8, c: "brand", d: "0.3s" },
  { x: 258, y: 320, s: 6, c: "brand", d: "2.4s" },
];

function Chip({ x, y, label, side }: { x: number; y: number; label: string; side: "in" | "out" }) {
  return (
    <g className="fade-in" style={{ ["--d" as string]: side === "in" ? "0.2s" : "1.1s" }}>
      <rect x={x} y={y - 20} width={130} height={40} rx={10} className="fill-elev stroke-line-strong" strokeWidth={1} />
      <rect
        x={x + 14}
        y={y - 3}
        width={6}
        height={6}
        rx={1.5}
        className={side === "in" ? "fill-brand-ink" : "fill-accent-bright"}
      />
      <text x={x + 30} y={y + 4.5} className="fill-fg font-sans text-[13px] font-semibold">
        {label}
      </text>
    </g>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]" aria-hidden="true">
      <svg viewBox="0 0 520 440" className="h-auto w-full overflow-visible">
        <text x="20" y="38" className="fill-subtle font-mono text-[10px] tracking-[0.18em]">
          DESAFIO
        </text>
        <text x="500" y="38" textAnchor="end" className="fill-subtle font-mono text-[10px] tracking-[0.18em]">
          RESULTADO
        </text>

        {/* Traces base */}
        {[...TRACES_IN, ...TRACES_OUT].map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength={100}
            fill="none"
            strokeWidth={1.5}
            strokeLinecap="round"
            className="draw stroke-line-strong"
            style={{ ["--d" as string]: `${0.3 + i * 0.12}s` }}
          />
        ))}

        {/* Pulsos */}
        {TRACES_IN.map((d, i) => (
          <path
            key={`pi${i}`}
            d={d}
            pathLength={100}
            fill="none"
            strokeWidth={2.5}
            strokeLinecap="round"
            className="trace-pulse stroke-brand-ink"
            style={{ animationDelay: `${1.6 + i * 0.9}s` }}
          />
        ))}
        {TRACES_OUT.map((d, i) => (
          <path
            key={`po${i}`}
            d={d}
            pathLength={100}
            fill="none"
            strokeWidth={2.5}
            strokeLinecap="round"
            className="trace-pulse stroke-accent-bright"
            style={{ animationDelay: `${2.4 + i * 0.9}s` }}
          />
        ))}

        {/* Terminais */}
        {[
          [150, 90], [150, 220], [150, 350], [208, 195], [208, 220], [208, 245],
          [312, 195], [312, 220], [312, 245], [370, 90], [370, 220], [370, 350],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3.5} strokeWidth={1.5} className="fill-bg stroke-line-strong" />
        ))}

        {/* Bits */}
        {BITS.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width={b.s}
            height={b.s}
            rx={1.5}
            className={`bit ${b.c === "brand" ? "fill-brand" : "fill-accent-bright"}`}
            style={{ ["--d" as string]: b.d }}
          />
        ))}

        {/* Núcleo */}
        <rect x={196} y={156} width={128} height={128} rx={28} className="node-ring fill-none stroke-brand-ink" strokeWidth={1} />
        <rect x={208} y={168} width={104} height={104} rx={22} className="fill-elev stroke-line-strong" strokeWidth={1} />

        {LEFT.map((c) => (
          <Chip key={c.label} x={20} y={c.y} label={c.label} side="in" />
        ))}
        {RIGHT.map((c) => (
          <Chip key={c.label} x={370} y={c.y} label={c.label} side="out" />
        ))}
      </svg>
      {/* Símbolo ByteMoz no núcleo (posicionado em % do viewBox) */}
      <div className="absolute left-[50%] top-[50%] w-[12.5%] -translate-x-1/2 -translate-y-1/2">
        <Image src="/images/bytemoz-mark.png" alt="" width={120} height={120} priority className="h-auto w-full" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-[4.25rem]">
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000_30%,transparent_75%)]" />
      <div className="container-x relative grid items-center gap-14 pb-20 pt-16 md:pt-24 lg:min-h-[calc(100svh-4.25rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <p className="eyebrow fade-in">Empresa moçambicana de tecnologia</p>
          <h1
            className="fade-in mt-6 text-[clamp(2.5rem,1.6rem+4.2vw,4.6rem)] font-bold leading-[1.04] tracking-[-0.035em] text-fg [text-wrap:balance]"
            style={{ ["--d" as string]: "0.1s" }}
          >
            Transformamos ideias em <span className="text-brand-ink">soluções digitais.</span>
          </h1>
          <p className="lead fade-in mt-6 max-w-xl text-lg" style={{ ["--d" as string]: "0.2s" }}>
            A ByteMoz desenvolve soluções tecnológicas modernas que ajudam empresas a simplificar processos, melhorar
            a gestão e crescer através da tecnologia.
          </p>
          <div className="fade-in mt-10 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "0.3s" }}>
            <a href="#sobre" className="btn btn-primary">
              Conheça a ByteMoz
              <ArrowRight className="arrow size-4" />
            </a>
            <a href="#contacto" className="btn btn-ghost">
              Fale connosco
            </a>
          </div>

          <dl
            className="fade-in mt-14 grid max-w-xl grid-cols-1 gap-5 border-t border-line pt-8 sm:grid-cols-3"
            style={{ ["--d" as string]: "0.45s" }}
          >
            {[
              ["Feito em Moçambique", "Contexto e mercado local"],
              ["À medida", "Soluções para cada negócio"],
              ["Lado a lado", "Do planeamento ao suporte"],
            ].map(([t, d]) => (
              <div key={t}>
                <dt className="text-sm font-semibold text-fg">{t}</dt>
                <dd className="mt-1 text-sm text-subtle">{d}</dd>
              </div>
            ))}
          </dl>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
