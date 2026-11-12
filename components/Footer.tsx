import { NAV, SERVICES, SITE, SOCIAL } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialIcon } from "./SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-sunken">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-subtle">{SITE.slogan}</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Empresa moçambicana de tecnologia. Desenvolvemos sistemas, plataformas e soluções digitais à medida.
          </p>
          {SOCIAL.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {SOCIAL.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ByteMoz no ${s.name}`}
                    className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand-ink hover:text-brand-ink"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Rodapé" className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-fg">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-muted transition-colors hover:text-fg">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-fg">Serviços</h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#servicos" className="text-sm text-muted transition-colors hover:text-fg">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-fg">Contactos</h2>
          <address className="mt-4 space-y-2.5 text-sm not-italic text-muted">
            <p>
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-fg">
                {SITE.email}
              </a>
            </p>
            <p>
              <a href={SITE.phoneHref} className="transition-colors hover:text-fg">
                {SITE.phoneDisplay}
              </a>
            </p>
            <p>{SITE.location}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ByteMoz. Todos os direitos reservados.</p>
          <p>Feito em Moçambique.</p>
        </div>
      </div>
    </footer>
  );
}
