"use client";

import Link from "next/link";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import { SITE_CONFIG, SERVICES, NAV_LINKS } from "@/lib/constants";

const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YoutubeIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width={props.size || 24} height={props.size || 24}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

const QUICK_LINKS = NAV_LINKS.slice(0, 6);
const FOOTER_SERVICES = SERVICES.slice(0, 8);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060B18] border-t border-white/5 pt-16 pb-6" id="rodape">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #0A84FF, #00C853, transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="#hero" className="flex items-center gap-2 mb-5 w-fit">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}>
                <Zap size={20} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Byte<span className="gradient-text">Moz</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Transformamos ideias em soluções tecnológicas de alto impacto.
              A sua parceira digital de confiança em Moçambique.
            </p>
            {/* Contacts */}
            <ul className="space-y-3">
              <li>
                <a href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <Phone size={16} className="text-primary shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm">
                  <Mail size={16} className="text-primary shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-gray-400 text-sm">
                  <MapPin size={16} className="text-primary shrink-0" />
                  {SITE_CONFIG.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.title}>
                  <Link href="#servicos"
                    className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links Rápidos</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Receba novidades e dicas de tecnologia directamente no seu email.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 mb-6"
            >
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors min-w-0"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #0A84FF, #00C853)" }}
                aria-label="Subscrever newsletter"
                id="newsletter-submit-btn"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Social */}
            <div>
              <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-3">Seguir-nos</h4>
              <div className="flex items-center gap-2">
                {[
                  { Icon: FacebookIcon,  href: SITE_CONFIG.social.facebook,  label: "Facebook" },
                  { Icon: InstagramIcon, href: SITE_CONFIG.social.instagram, label: "Instagram" },
                  { Icon: LinkedinIcon,  href: SITE_CONFIG.social.linkedin,  label: "LinkedIn" },
                  { Icon: TwitterIcon,   href: SITE_CONFIG.social.twitter,   label: "Twitter" },
                  { Icon: YoutubeIcon,   href: SITE_CONFIG.social.youtube,   label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary text-gray-400 flex items-center justify-center transition-all"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm text-center">
            © {year} ByteMoz. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desenvolvido com ❤️ em Moçambique 🇲🇿
          </p>
        </div>
      </div>
    </footer>
  );
}
