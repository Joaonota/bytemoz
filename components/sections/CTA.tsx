"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#070C1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,132,255,0.15) 0%, transparent 70%)" }} />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,200,83,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles size={14} className="text-secondary" />
          <span className="text-secondary text-xs sm:text-sm font-medium">Pronto para começar?</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Leve a sua empresa ao <br className="hidden sm:block" />
            <span className="gradient-text">próximo nível</span> hoje mesmo!
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Fale com um dos nossos consultores técnicos e receba uma proposta personalizada sem qualquer compromisso.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contacto"
            className="btn-primary flex items-center justify-center gap-2 text-base relative z-10"
            id="cta-orcamento-btn"
          >
            Falar com um Consultor
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/258840000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center justify-center gap-2 text-base"
            id="cta-whatsapp-btn"
          >
            Contacto via WhatsApp
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
