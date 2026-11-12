"use client";

import { useState } from "react";
import { CircleCheck, Mail, MessageCircle } from "lucide-react";
import { PROJECT_TYPES, SITE } from "@/lib/site";

type Errors = Partial<Record<"nome" | "email" | "mensagem", string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const nome = String(data.get("nome") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const mensagem = String(data.get("mensagem") ?? "").trim();
  if (nome.length < 2) errors.nome = "Indique o seu nome.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Indique um email válido.";
  if (mensagem.length < 10) errors.mensagem = "Descreva brevemente o que precisa (mín. 10 caracteres).";
  return errors;
}

function compose(data: FormData) {
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const head = [
    `Nome: ${get("nome")}`,
    `Email: ${get("email")}`,
    get("telefone") && `Telefone: ${get("telefone")}`,
    get("empresa") && `Empresa: ${get("empresa")}`,
    get("tipo") && `Tipo de projeto: ${get("tipo")}`,
  ].filter(Boolean);
  const subject = `Contacto pelo website${get("tipo") ? ` — ${get("tipo")}` : ""}`;
  return { subject, body: [...head, "", get("mensagem")].join("\n") };
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute("value") === "whatsapp" ? "whatsapp" : "email";
    const { subject, body } = compose(data);
    const url =
      via === "whatsapp"
        ? `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`
        : `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (via === "whatsapp") window.open(url, "_blank", "noopener,noreferrer");
    else window.location.href = url;
    setSent(via);
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-erro`} className="mt-1.5 text-xs font-medium text-[#d93a3a]">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form noValidate onSubmit={onSubmit} className="card p-6 md:p-9" aria-describedby="form-nota">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-medium text-fg">
            Nome <span className="text-subtle">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            autoComplete="name"
            className="field"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "nome-erro" : undefined}
          />
          {err("nome")}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
            Email <span className="text-subtle">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-erro" : undefined}
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="telefone" className="mb-2 block text-sm font-medium text-fg">
            Telefone <span className="font-normal text-subtle">(opcional)</span>
          </label>
          <input id="telefone" name="telefone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-medium text-fg">
            Empresa <span className="font-normal text-subtle">(opcional)</span>
          </label>
          <input id="empresa" name="empresa" autoComplete="organization" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="tipo" className="mb-2 block text-sm font-medium text-fg">
            Tipo de projeto
          </label>
          <select id="tipo" name="tipo" className="field select-field" defaultValue="">
            <option value="">Selecione uma opção</option>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensagem" className="mb-2 block text-sm font-medium text-fg">
            Mensagem <span className="text-subtle">*</span>
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={5}
            placeholder="Conte-nos sobre a sua ideia ou o desafio que pretende resolver."
            className="field"
            aria-invalid={!!errors.mensagem}
            aria-describedby={errors.mensagem ? "mensagem-erro" : undefined}
          />
          {err("mensagem")}
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <button type="submit" name="via" value="email" className="btn btn-primary flex-1">
          <Mail className="size-4" aria-hidden="true" />
          Enviar por email
        </button>
        <button type="submit" name="via" value="whatsapp" className="btn btn-ghost flex-1">
          <MessageCircle className="size-4" aria-hidden="true" />
          Enviar por WhatsApp
        </button>
      </div>

      <div aria-live="polite">
        {sent ? (
          <p className="mt-5 flex items-start gap-2 text-sm text-fg">
            <CircleCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
            {sent === "email"
              ? "A sua aplicação de email foi aberta com a mensagem preenchida. Basta confirmar o envio."
              : "O WhatsApp foi aberto com a mensagem preenchida. Basta confirmar o envio."}
          </p>
        ) : (
          <p id="form-nota" className="mt-5 text-xs leading-relaxed text-subtle">
            A mensagem é preparada no seu email ou WhatsApp para que a possa rever antes de enviar.
          </p>
        )}
      </div>
    </form>
  );
}
