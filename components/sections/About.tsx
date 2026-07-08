"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const PILLARS = [
  {
    Icon: Target,
    title: "Missão",
    text: "Fornecer soluções tecnológicas inovadoras que transformem os negócios dos nossos clientes, aumentando a sua eficiência, competitividade e presença digital no mercado moçambicano e global.",
  },
  {
    Icon: Eye,
    title: "Visão",
    text: "Ser a empresa de referência em Tecnologia da Informação em Moçambique, reconhecida pela excelência, inovação e capacidade de gerar valor real para os nossos clientes e para a sociedade.",
  },
  {
    Icon: Heart,
    title: "Valores",
    text: "Integridade, inovação contínua, excelência técnica, comprometimento com o cliente, transparência total e responsabilidade social são os pilares que guiam cada decisão da ByteMoz.",
  },
];

const STATS = [
  { end: 150, suffix: "+", label: "Projectos Concluídos" },
  { end: 80,  suffix: "+", label: "Clientes Satisfeitos" },
  { end: 5,   suffix: "+", label: "Anos de Experiência" },
  { end: 24,  suffix: "/7", label: "Suporte Técnico" },
];

export function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="sobre" className="section-padding bg-white dark:bg-[#070C1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-5"
        style={{ background: "radial-gradient(ellipse at right, #0A84FF, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Sobre a <span className="gradient-text">ByteMoz</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Somos uma empresa moçambicana de Tecnologia da Informação comprometida
            em transformar o panorama digital do país através de soluções inovadoras
            e de alta qualidade.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: pillars */}
          <div className="space-y-6">
            {PILLARS.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15} direction="left">
                <div className="flex gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-primary/30 transition-all card-hover group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: "linear-gradient(135deg, #0A84FF20, #00C85320)" }}
                  >
                    <p.Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{p.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{p.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: visual card */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div
                className="rounded-3xl p-1"
                style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
              >
                <div className="bg-[#070C1A] rounded-3xl p-8 sm:p-10">
                  {/* Terminal-style header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="ml-3 text-gray-500 text-xs font-mono">bytemoz.ts</span>
                  </div>

                  {/* Code-style content */}
                  <pre className="text-sm font-mono leading-relaxed">
                    <span className="text-gray-500">// ByteMoz DNA</span>{"\n"}
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-secondary">company</span>{" "}
                    <span className="text-white">= {"{"}</span>{"\n"}
                    {"  "}<span className="text-primary">nome</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"ByteMoz"</span>
                    <span className="text-white">,</span>{"\n"}
                    {"  "}<span className="text-primary">pais</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"Moçambique 🇲🇿"</span>
                    <span className="text-white">,</span>{"\n"}
                    {"  "}<span className="text-primary">foco</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"Inovação Digital"</span>
                    <span className="text-white">,</span>{"\n"}
                    {"  "}<span className="text-primary">qualidade</span>
                    <span className="text-white">: </span>
                    <span className="text-secondary">true</span>
                    <span className="text-white">,</span>{"\n"}
                    {"  "}<span className="text-primary">suporte</span>
                    <span className="text-white">: </span>
                    <span className="text-yellow-300">"24/7"</span>
                    <span className="text-white">,</span>{"\n"}
                    {"  "}<span className="text-primary">clientes</span>
                    <span className="text-white">: </span>
                    <span className="text-secondary">["satisfeitos"]</span>
                    <span className="text-white">,</span>{"\n"}
                    <span className="text-white">{"}"}</span>{"\n\n"}
                    <span className="text-gray-500">// Promise to clients</span>{"\n"}
                    <span className="text-blue-400">async function</span>{" "}
                    <span className="text-yellow-300">deliver</span>
                    <span className="text-white">() {"{"}</span>{"\n"}
                    {"  "}<span className="text-blue-400">await</span>
                    {" "}<span className="text-white">excellence()</span>{"\n"}
                    {"  "}<span className="text-blue-400">return</span>
                    {" "}<span className="text-secondary">success</span>
                    <span className="text-white">;</span>{"\n"}
                    <span className="text-white">{"}"}</span>
                  </pre>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -right-5 glass-dark rounded-2xl p-4 text-white text-center shadow-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-xs text-gray-400">Anos de Excelência</div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center p-6 rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl font-bold gradient-text mb-1">
                {inView && (
                  <CountUp end={s.end} duration={2.5} delay={i * 0.2} />
                )}
                {s.suffix}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
