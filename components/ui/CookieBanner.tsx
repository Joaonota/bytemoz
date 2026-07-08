"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("bytemoz-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("bytemoz-cookies", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("bytemoz-cookies", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="max-w-4xl mx-auto glass-dark rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="text-primary mt-1 shrink-0" size={22} />
              <div>
                <p className="text-white font-semibold mb-1">🍪 Utilizamos Cookies</p>
                <p className="text-gray-400 text-sm">
                  Utilizamos cookies para melhorar a sua experiência, analisar o tráfego e personalizar conteúdo.
                  Ao continuar, aceita a nossa{" "}
                  <a href="#" className="text-primary hover:underline">
                    Política de Privacidade
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-gray-400 hover:text-white text-sm transition-colors px-3 py-2"
                id="cookie-decline-btn"
              >
                Recusar
              </button>
              <button
                onClick={accept}
                className="btn-primary text-sm px-4 py-2"
                id="cookie-accept-btn"
              >
                Aceitar Todos
              </button>
              <button
                onClick={decline}
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
