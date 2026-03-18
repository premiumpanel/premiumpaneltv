import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import GSAPInit from "@/components/GSAPInit";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: "%s | Premium Panel",
    default: "IPTV Bayilik | Kredili Reseller Paneli & Ücretsiz Başlangıç",
  },
  description: "IPTV bayilik paneli ile kredili sistem üzerinden satış yapın. Başlangıç ücretsiz, 120 kredi ile panelinizi aktif edin. Net maliyetler ve kolay yönetim.",
  metadataBase: new URL("https://premiumpanel.com"),
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
    title: "Premium IPTV Reseller Paneli",
    description: "Kendi markanızla IPTV satışı yapın. Yüksek kar marjı ve profesyonel destek.",
    url: "https://premiumpanel.com",
    siteName: "Premium Panel",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium IPTV Reseller Paneli",
    description: "Kendi markanızla IPTV satışı yapın.",
    creator: "@premiumpanel",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${poppins.variable} scroll-smooth`}>
      <body className="font-poppins antialiased bg-slate-950 text-slate-100 selection:bg-blue-500/30">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <GSAPInit />
          {children}
          <FloatingWhatsApp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
