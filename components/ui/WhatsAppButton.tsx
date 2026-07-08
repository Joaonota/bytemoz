"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
    "Olá ByteMoz! Gostaria de solicitar um orçamento para o meu projecto."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="glass-dark rounded-2xl p-4 max-w-xs text-white shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                    BM
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">ByteMoz</p>
                    <p className="text-green-400 text-xs">Online agora ●</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Olá! Como podemos ajudar? Fale connosco agora via WhatsApp 💬
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-xl text-sm font-semibold transition-colors"
                >
                  Iniciar conversa
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.button
            onClick={() => setIsOpen((o) => !o)}
            className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar via WhatsApp"
            id="whatsapp-btn"
          >
            {/* Ping rings */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
            <span className="relative z-10">
              {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
