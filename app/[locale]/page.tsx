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

import { setRequestLocale, getTranslations } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'schemas' });

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
    "description": t("org_desc"),
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-163-2680219",
      "contactType": "sales",
      "availableLanguage": ["Turkish", "English", "German", "French", "Dutch"]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t("q1"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("a1")
        }
      },
      {
        "@type": "Question",
        "name": t("q2"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("a2")
        }
      },
      {
        "@type": "Question",
        "name": t("q3"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("a3")
        }
      },
      {
        "@type": "Question",
        "name": t("q4"),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t("a4")
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
