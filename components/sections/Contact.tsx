import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, SOCIAL } from "@/lib/site";
import { ContactForm } from "../ContactForm";
import { SocialIcon } from "../SocialIcon";

const CHANNELS = [
  { Icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    Icon: MessageCircle,
    label: "Telefone / WhatsApp",
    value: SITE.phoneDisplay,
    href: `https://wa.me/${SITE.whatsapp}`,
    external: true,
  },
  { Icon: MapPin, label: "Localização", value: SITE.location },
];

export function Contact() {
  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5" data-reveal>
          <p className="eyebrow">Contactos</p>
          <h2 id="contacto-titulo" className="h-section mt-5">
            Vamos falar sobre o seu projeto.
          </h2>
          <p className="lead mt-5 max-w-md">
            Conte-nos o que precisa. Entraremos em contacto para perceber melhor o desafio e conversar sobre os próximos
            passos.
          </p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {CHANNELS.map(({ Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-line text-brand-ink">
                    <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-subtle">{label}</span>
                    <span className="mt-0.5 block truncate font-medium text-fg">{value}</span>
                  </span>
                  {href && (
                    <ArrowUpRight
                      className="size-4 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-ink"
                      aria-hidden="true"
                    />
                  )}
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 py-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          {SOCIAL.length > 0 && (
            <div className="mt-8">
              <p className="text-xs text-subtle">Redes sociais</p>
              <ul className="mt-3 flex gap-2">
                {SOCIAL.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`ByteMoz no ${s.name}`}
                      className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-brand-ink hover:text-brand-ink"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-7" data-reveal style={{ ["--d" as string]: "100ms" }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
