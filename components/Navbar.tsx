"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "@/lib/site";
import { Logo } from "./Logo";

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-lg text-muted transition-colors hover:bg-brand-soft hover:text-fg"
      aria-label="Alternar modo claro/escuro"
    >
      <Sun className="hidden size-[18px] dark:block" strokeWidth={1.8} />
      <Moon className="size-[18px] dark:hidden" strokeWidth={1.8} />
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.25rem] items-center justify-between gap-6" aria-label="Navegação principal">
        <a href="#inicio" aria-label="ByteMoz — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === item.href ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-px h-px origin-left bg-brand-ink transition-transform duration-300 ${
                    active === item.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a href="#contacto" className="btn btn-primary ml-1 hidden h-10 px-4 text-sm sm:inline-flex">
            Fale connosco
            <ArrowRight className="arrow size-4" />
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-lg text-fg hover:bg-brand-soft lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movel"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="menu-movel"
        hidden={!open}
        className="h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-line bg-bg lg:hidden"
      >
        <ul className="container-x flex flex-col py-4">
          {NAV.map((item, i) => (
            <li key={item.href} className="border-b border-line">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-semibold text-fg"
              >
                {item.label}
                <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Fale connosco
              <ArrowRight className="arrow size-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
