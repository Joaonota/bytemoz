"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, Globe, Smartphone, HeadphonesIcon, Cpu, Network,
  Shield, Server, Layers, ShoppingCart, Zap, Lightbulb,
  Database, HardDrive, GitMerge, Cloud, Settings, Wrench,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Link from "next/link";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, HeadphonesIcon, Cpu, Network,
  Shield, Server, Layers, ShoppingCart, Zap, Lightbulb,
  Database, HardDrive, GitMerge, Cloud, ServerCog: Settings, Wrench,
};

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="servicos" className="section-padding bg-[#F4F6F8] dark:bg-[#060B18] relative overflow-hidden">
      {/* BG pattern */}
      <div className="absolute inset-0 hero-grid opacity-20 dark:opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            O Que Fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Os Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Oferecemos um portfólio completo de soluções tecnológicas para impulsionar
            o seu negócio no mundo digital.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* Gradient top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${service.color.includes("blue") ? "#0A84FF" : "#00C853"}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${service.color} bg-opacity-10 group-hover:scale-110 transition-transform`}
                  style={{ background: `linear-gradient(135deg, ${getColor(service.color)}20, ${getColor(service.color)}40)` }}
                >
                  <Icon size={22} className="text-white drop-shadow" style={{ color: getColor(service.color) }} />
                </div>

                <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  href="#contacto"
                  className="inline-flex items-center text-primary text-sm font-medium hover:gap-2 transition-all group/link"
                  id={`service-more-${i}`}
                >
                  Saiba Mais
                  <motion.span
                    className="ml-1"
                    animate={hovered === i ? { x: 4 } : { x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </Link>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${getColor(service.color)}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getColor(gradient: string): string {
  if (gradient.includes("secondary") || gradient.includes("emerald") || gradient.includes("teal") || gradient.includes("green")) return "#00C853";
  if (gradient.includes("red") || gradient.includes("rose")) return "#ef4444";
  if (gradient.includes("purple") || gradient.includes("violet")) return "#8b5cf6";
  if (gradient.includes("orange") || gradient.includes("amber")) return "#f97316";
  if (gradient.includes("cyan") || gradient.includes("sky")) return "#06b6d4";
  if (gradient.includes("yellow")) return "#eab308";
  if (gradient.includes("pink")) return "#ec4899";
  if (gradient.includes("indigo")) return "#6366f1";
  if (gradient.includes("slate")) return "#64748b";
  return "#0A84FF";
}
