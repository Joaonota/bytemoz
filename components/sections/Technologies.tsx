"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Technologies() {
  return (
    <section id="tecnologias" className="section-padding bg-[#F4F6F8] dark:bg-[#060B18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            O Nosso Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologias que <span className="gradient-text">Utilizamos</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Trabalhamos com as tecnologias mais modernas e robustas do mercado para garantir a melhor performance.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {TECHNOLOGIES.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 font-bold text-lg text-white"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}40, ${tech.color})`,
                  boxShadow: `0 8px 24px -6px ${tech.color}60`,
                }}
              >
                {tech.name[0]}
              </div>
              <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
