"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  company: z.string().optional(),
  phone: z.string().min(8, "Introduza um número de telefone válido"),
  email: z.string().email("Introduza um endereço de email válido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    // Simulate sending message
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    reset();
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contacto" className="section-padding bg-white dark:bg-[#070C1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Fale <span className="gradient-text">Connosco</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Tem alguma dúvida ou quer solicitar um orçamento? Envie-nos uma mensagem e responderemos com a máxima brevidade.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Details side */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Informações de Contacto</h3>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Telefone</h4>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-gray-800 dark:text-white font-semibold hover:text-primary transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Email</h4>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-800 dark:text-white font-semibold hover:text-primary transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Endereço</h4>
                    <span className="text-gray-800 dark:text-white font-semibold">
                      {SITE_CONFIG.address}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map wrapper */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="h-60 rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 relative">
                {/* Embed Maputo, Mozambique mock map/iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1m3!1d114757.26189914757!2d32.51860824987258!3d-25.918925585093766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e828a2a89cbbf5b%3A0xe54d3edeb34ef5cf!2sMaputo!5e0!3m2!1spt-PT!2smz!4v1717871263000!5m2!1spt-PT!2smz"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(20%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ByteMoz"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Form side */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="right" delay={0.1}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl p-8 md:p-10 space-y-5"
                id="contact-form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Nome Completo</label>
                    <input
                      {...register("name")}
                      id="name"
                      type="text"
                      className="w-full bg-white dark:bg-[#070C1A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Ex: João Sitoe"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Empresa (Opcional)</label>
                    <input
                      {...register("company")}
                      id="company"
                      type="text"
                      className="w-full bg-white dark:bg-[#070C1A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Ex: Minha Empresa Lda"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Número de Telefone</label>
                    <input
                      {...register("phone")}
                      id="phone"
                      type="tel"
                      className="w-full bg-white dark:bg-[#070C1A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Ex: +258 84 000 0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Endereço de Email</label>
                    <input
                      {...register("email")}
                      id="email"
                      type="email"
                      className="w-full bg-white dark:bg-[#070C1A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Ex: joao@empresa.co.mz"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Mensagem / Requisitos</label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full bg-white dark:bg-[#070C1A] border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                    placeholder="Descreva detalhadamente o seu projecto ou dúvidas..."
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl disabled:opacity-50 relative z-10"
                  id="contact-submit-btn"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      A Enviar...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={18} className="text-white" />
                      Enviado com Sucesso!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
