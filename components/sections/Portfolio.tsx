"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { PORTFOLIO_ITEMS, PORTFOLIO_FILTERS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const CATEGORY_COLORS: Record<string, string> = {
  "Websites":      "#0A84FF",
  "Sistemas":      "#00C853",
  "Mobile":        "#8b5cf6",
  "Landing Pages": "#f97316",
  "Design":        "#ec4899",
};

export function Portfolio() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding bg-[#F4F6F8] dark:bg-[#060B18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Trabalhos Realizados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Conheça alguns dos projectos que desenvolvemos para os nossos clientes.
          </p>
        </ScrollReveal>

        {/* Filters */}
        <ScrollReveal className="flex flex-wrap gap-3 justify-center mb-10">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              id={`portfolio-filter-${f.toLowerCase().replace(/\s/g, "-")}`}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                active === f
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                  : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-primary/40 hover:text-primary"
              )}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group relative bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                {/* Image placeholder with gradient */}
                <div className="relative h-48 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${CATEGORY_COLORS[item.category] ?? "#0A84FF"}30, #070C1A)` }}>
                  {/* Category icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ background: `${CATEGORY_COLORS[item.category] ?? "#0A84FF"}20` }}>
                      <span className="text-3xl">
                        {item.category === "Websites" ? "🌐" :
                         item.category === "Sistemas" ? "⚙️" :
                         item.category === "Mobile" ? "📱" :
                         item.category === "Landing Pages" ? "🚀" : "🎨"}
                      </span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary-dark transition-colors"
                      id={`portfolio-view-${item.id}`}
                    >
                      <ExternalLink size={16} />
                      Ver Projecto
                    </a>
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-semibold"
                    style={{ background: CATEGORY_COLORS[item.category] ?? "#0A84FF" }}
                  >
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-medium">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Tem um projecto em mente? Vamos torná-lo realidade!
          </p>
          <a href="#contacto" className="btn-primary inline-flex items-center gap-2">
            Iniciar o Meu Projecto
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
