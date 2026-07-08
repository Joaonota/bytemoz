"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, ClipboardList, Map,
  Code2, TestTube, Rocket, HeadphonesIcon,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FigmaIcon = (props: any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={props.size || 24}
    height={props.size || 24}
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 0 1 0 7H12V2z" />
    <path d="M12 9h3.5a3.5 3.5 0 0 1 0 7H12V9z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 0 1-7 0z" />
  </svg>
);

const ICON_MAP: Record<string, React.ElementType> = {
  MessageCircle, ClipboardList, Map, Figma: FigmaIcon,
  Code2, TestTube, Rocket, HeadphonesIcon,
};

export function Process() {
  return (
    <section id="processo" className="section-padding bg-white dark:bg-[#070C1A] relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 hero-grid opacity-10 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Processo de <span className="gradient-text">Trabalho</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Seguimos uma metodologia estruturada e transparente para garantir
            a qualidade e o sucesso de cada projecto.
          </p>
        </ScrollReveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Line */}
          <div className="absolute top-12 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #0A84FF40, #00C85340, transparent)" }} />

          <div className="grid grid-cols-8 gap-2 relative">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? Code2;
              return (
                <motion.div
                  key={step.title}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Step number + icon */}
                  <div className="relative mb-4">
                    <motion.div
                      className="w-12 h-12 rounded-full flex items-center justify-center relative z-10 shadow-lg"
                      style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={20} className="text-white" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-gray-900 dark:text-white font-semibold text-sm mb-1">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #0A84FF, #00C853)" }} />

          <div className="space-y-8 pl-16">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = ICON_MAP[step.icon] ?? Code2;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {/* Circle on line */}
                  <div
                    className="absolute -left-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>

                  <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-primary font-bold text-sm">0{i + 1}</span>
                      <h3 className="text-gray-900 dark:text-white font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
