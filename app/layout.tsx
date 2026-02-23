import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GSAPInit from "@/components/GSAPInit";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
  description: "IPTV bayilik paneli ile kredili sistem üzerinden satış yapın. Başlangıç ücretsiz, 1500 kredi ile panelinizi aktif edin. Net maliyetler ve kolay yönetim.",
  metadataBase: new URL("https://premiumpanel.com"),
  keywords: ["iptv bayilik", "iptv bayi paneli", "iptv reseller", "kredili iptv", "iptv alt bayi"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-poppins antialiased bg-slate-950 text-slate-100 selection:bg-blue-500/30">
        <GSAPInit />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
