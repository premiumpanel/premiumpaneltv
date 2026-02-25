import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import PricingCards from "@/components/PricingCards";
import HowItWorks from "@/components/HowItWorks";
import MasonryGallery from "@/components/MasonryGallery";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "IPTV Bayilik | Kredili Reseller Paneli & Ücretsiz Başlangıç",
  description: "IPTV bayilik paneli ile kredili sistem üzerinden satış yapın. Başlangıç ücretsiz, 1500 kredi ile panelinizi aktif edin. Net maliyetler ve kolay yönetim.",
  keywords: "iptv bayilik, reseller panel, iptv panel kiralama, ucuz iptv bayilik, kredili iptv",
  alternates: {
    canonical: "https://premiumpanel.com",
  },
  openGraph: {
    title: "IPTV Bayilik | Kredili Reseller Paneli & Ücretsiz Başlangıç",
    description: "IPTV bayilik paneli ile kredili sistem üzerinden satış yapın. Başlangıç ücretsiz, 1500 kredi ile panelinizi aktif edin. Net maliyetler ve kolay yönetim.",
    url: "https://premiumpanel.com",
    siteName: "Premium Panel",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public
        width: 1200,
        height: 630,
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function Home() {
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Premium Panel",
    "url": "https://premiumpanel.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://premiumpanel.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium Panel",
    "url": "https://premiumpanel.com",
    "logo": "https://premiumpanel.com/assets/images/logo.png",
    "description": "Profesyonel IPTV bayilik hizmeti sağlayan, kullanımı kolay kredili sistem ve net fiyatlar sunan bayi platformu.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-163-2680219",
      "contactType": "sales",
      "availableLanguage": "Turkish"
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
      <JsonLd data={webSiteSchema} />
      <JsonLd data={orgSchema} />
      <Header />

      <Hero />

      <FeatureGrid />

      <MasonryGallery />

      <HowItWorks />

      <PricingCards />

      <Testimonials />

      <FAQAccordion />

      <CTABanner />

      <Footer />
    </main>
  );
}
