"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-[#F4F6F8] dark:bg-[#060B18] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Encontre respostas rápidas para as principais dúvidas sobre os nossos serviços e processos.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} delay={index * 0.05} direction="up">
                <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/20">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    id={`faq-btn-${index}`}
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle size={18} className="text-primary shrink-0" />
                      <span className="text-gray-800 dark:text-white font-semibold text-sm sm:text-base">
                        {faq.q}
                      </span>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-gray-50 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:text-primary transition-all">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
