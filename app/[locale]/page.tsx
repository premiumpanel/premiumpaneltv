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
import HomeSEOContent from "@/components/HomeSEOContent";
import JsonLd from "@/components/JsonLd";

import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "IPTV Bayilik (Reseller) Nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IPTV bayiliği, toptan alınan yayın sunucusu kredilerinin, perakende son kullanıcılara donmasız paketler halinde satılarak yüksek kar elde edildiği risksiz bir dijital iş modelidir."
        }
      },
      {
        "@type": "Question",
        "name": "IPTV Bayilik Satışı Nasıl Başlar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premium Panel sistemimize kayıt olup, minimum bayi kredisini alarak anında kendi panelinize sahip olabilir ve çevrenize, sosyal medyada IPTV satışı yapmaya başlayabilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "IPTV Satışı Yaparak Ne Kadar Para Kazanılır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Toptan sanal IPTV kredisi aldığınız için maliyeti en diptedir. Bulunduğunuz konuma göre %100 ila %400'e varan kâr marjıyla satış gerçekleştirebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Satılmayan IPTV Bayi Kredileri Yanar Mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Asla yanmaz. Kredili IPTV bayi sisteminde satın aldığınız kontörlerin bir son kullanma tarihi yoktur. Kullanılana kadar hesabınızda baki kalır."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col">
      <JsonLd data={webSiteSchema} />
      <JsonLd data={orgSchema} />
      <JsonLd data={faqSchema} />
      <Header />

      <Hero />

      <FeatureGrid />

      <MasonryGallery />

      <HowItWorks />

      <PricingCards />

      <Testimonials />

      <FAQAccordion />

      <CTABanner />

      <HomeSEOContent />

      <Footer />
    </main>
  );
}
