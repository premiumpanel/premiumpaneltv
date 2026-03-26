import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "../globals.css";
import GSAPInit from "@/components/GSAPInit";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {NextIntlClientProvider} from 'next-intl';
import ScrollToTop from "@/components/ScrollToTop";
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap'
});

import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: {
      template: "%s | Premium Panel",
      default: t("title"),
    },
    description: t("description"),
    metadataBase: new URL("https://premiumpaneltv.com"),
    alternates: {
      canonical: `https://premiumpaneltv.com/${locale}`,
      languages: {
        'tr': 'https://premiumpaneltv.com/tr',
        'en': 'https://premiumpaneltv.com/en',
        'de': 'https://premiumpaneltv.com/de',
        'fr': 'https://premiumpaneltv.com/fr',
        'nl': 'https://premiumpaneltv.com/nl',
        'x-default': 'https://premiumpaneltv.com/tr',
      },
    },
    keywords: [
      "iptv bayilik", 
      "iptv bayilik satış", 
      "en iyi iptv bayilik veren firmalar",
      "iptv bayi paneli", 
      "kredili iptv", 
      "iptv reseller paneli",
      "iptv satışı yaparak para kazan", 
      "iptv toptancısı", 
      "donmasız iptv bayiliği"
    ],
    authors: [{ name: "Premium Panel Team" }],
    creator: "Premium Panel",
    publisher: "Premium Panel",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "https://premiumpaneltv.com",
      siteName: "Premium Panel",
      locale: locale === "tr" ? "tr_TR" : locale === "en" ? "en_US" : locale === "de" ? "de_DE" : locale === "fr" ? "fr_FR" : "nl_NL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      creator: "@premiumpanel",
    },
    icons: {
      icon: "/assets/favicon.png",
      apple: "/assets/favicon.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable} scroll-smooth`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T2X486BC');`}
        </Script>
        {/* End Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2370Z9DJT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2370Z9DJT');
          `}
        </Script>
      </head>
      <body className="font-poppins antialiased bg-slate-950 text-slate-100 selection:bg-blue-500/30">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-T2X486BC"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ScrollToTop />
          <GSAPInit />
          {children}
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
