"use client";

import { motion } from "framer-motion";
import {
  Zap, Settings2, Users, Cpu, Shield,
  HeadphonesIcon, TrendingUp, BadgeCheck,
} from "lucide-react";
import { WHY_US } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap, Settings2, Users, Cpu, Shield, HeadphonesIcon, TrendingUp, BadgeCheck,
};

export function WhyUs() {
  return (
    <section id="porque-nos" className="section-padding bg-white dark:bg-[#070C1A] relative overflow-hidden">
      {/* Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,132,255,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <ScrollReveal direction="left">
            <div className="relative flex items-center justify-center">
              {/* Big ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center">
                <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full flex items-center justify-center"
                  style={{ background: "radial-gradient(circle, rgba(10,132,255,0.12), transparent 70%)" }}>
                  <motion.div
                    className="w-32 h-32 rounded-full flex flex-col items-center justify-center text-center"
                    style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-white text-3xl font-bold">100%</span>
                    <span className="text-white/80 text-xs">Satisfação</span>
                  </motion.div>
                </div>
              </div>

              {/* Orbiting icons */}
              {WHY_US.slice(0, 4).map((item, i) => {
                const angle = (i / 4) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 130;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                const Icon = ICON_MAP[item.icon] ?? Zap;
                return (
                  <motion.div
                    key={item.label}
                    className="absolute w-11 h-11 rounded-xl flex items-center justify-center glass-dark shadow-lg"
                    style={{ left: `calc(50% + ${x}px - 22px)`, top: `calc(50% + ${y}px - 22px)` }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    title={item.label}
                  >
                    <Icon size={18} className="text-primary" />
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Right: advantages */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Vantagens
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Porque Escolher a{" "}
                <span className="gradient-text">ByteMoz</span>?
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                Somos mais do que uma empresa de TI — somos o seu parceiro tecnológico
                de confiança, comprometido com o sucesso do seu negócio a longo prazo.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_US.map((item, i) => {
                const Icon = ICON_MAP[item.icon] ?? Zap;
                return (
                  <motion.div
                    key={item.label}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-transparent hover:border-primary/20 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <Icon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-secondary text-sm font-bold">✔</span>
                        <h3 className="text-gray-900 dark:text-white font-semibold text-sm">{item.label}</h3>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
