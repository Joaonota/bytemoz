import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)",  color: "#0A0F1E" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bytemoz.co.mz"),
  title: {
    default: "ByteMoz — Soluções Tecnológicas em Moçambique",
    template: "%s | ByteMoz",
  },
  description:
    "ByteMoz é uma empresa moçambicana especializada em desenvolvimento de sistemas, websites, aplicações móveis, cibersegurança e consultoria em TI. Soluções digitais premium para empresas e organizações.",
  keywords: [
    "ByteMoz", "TI Moçambique", "desenvolvimento web Maputo",
    "aplicações móveis", "cibersegurança", "sistemas empresariais",
    "suporte informático", "cloud computing", "consultoria TI",
  ],
  authors: [{ name: "ByteMoz", url: "https://bytemoz.co.mz" }],
  creator: "ByteMoz",
  publisher: "ByteMoz",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: "https://bytemoz.co.mz",
    siteName: "ByteMoz",
    title: "ByteMoz — Soluções Tecnológicas em Moçambique",
    description:
      "Transformamos ideias em soluções tecnológicas. Desenvolvimento de sistemas, websites, apps, cibersegurança e muito mais.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ByteMoz — Soluções Tecnológicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteMoz — Soluções Tecnológicas",
    description: "Desenvolvimento de sistemas, websites, apps e soluções digitais para empresas.",
    images: ["/og-image.jpg"],
    creator: "@bytemoz",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ByteMoz",
              url: "https://bytemoz.co.mz",
              logo: "https://bytemoz.co.mz/logo.png",
              description:
                "Empresa moçambicana de Tecnologia da Informação especializada em desenvolvimento de sistemas, websites, aplicações móveis e cibersegurança.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Maputo",
                addressCountry: "MZ",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+258-84-000-0000",
                contactType: "customer service",
                availableLanguage: ["Portuguese"],
              },
              sameAs: [
                "https://facebook.com/bytemoz",
                "https://linkedin.com/company/bytemoz",
                "https://instagram.com/bytemoz",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
