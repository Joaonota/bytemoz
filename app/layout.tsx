import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SITE } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s · ByteMoz",
  },
  description: SITE.description,
  applicationName: "ByteMoz",
  keywords: [
    "ByteMoz",
    "empresa de tecnologia Moçambique",
    "desenvolvimento de software Moçambique",
    "sistemas web Moçambique",
    "websites Moçambique",
    "redes e infraestrutura de TI",
    "helpdesk e suporte técnico",
    "segurança de dados",
    "segurança eletrónica",
    "empresa de tecnologia Beira",
    "ERP Moçambique",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: "/",
    siteName: "ByteMoz",
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
    { media: "(prefers-color-scheme: dark)", color: "#050a19" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ByteMoz",
  slogan: "Conectamos tecnologia.",
  url: SITE.url,
  logo: `${SITE.url}/images/logo.png`,
  email: SITE.email,
  telephone: SITE.phoneDisplay.replace(/\s/g, ""),
  description: SITE.description,
  address: { "@type": "PostalAddress", addressLocality: SITE.location.split(",")[0], addressCountry: "MZ" },
  areaServed: { "@type": "Country", name: "Moçambique" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-MZ" suppressHydrationWarning className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        {/* Ativa as animações de entrada apenas quando há JavaScript */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#conteudo"
            className="sr-only z-[100] rounded-lg bg-brand px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Saltar para o conteúdo
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
