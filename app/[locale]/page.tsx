import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const FeatureGrid = dynamic(() => import("@/components/FeatureGrid"), { ssr: true });
const PricingCards = dynamic(() => import("@/components/PricingCards"), { ssr: true });
const HowItWorks = dynamic(() => import("@/components/HowItWorks"), { ssr: true });
const MasonryGallery = dynamic(() => import("@/components/MasonryGallery"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: true });
const CTABanner = dynamic(() => import("@/components/CTABanner"), { ssr: true });
const HomeSEOContent = dynamic(() => import("@/components/HomeSEOContent"), { ssr: true });
const CityLinks = dynamic(() => import("@/components/CityLinks"), { ssr: true });

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
    "url": "https://www.premiumpaneltv.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.premiumpaneltv.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Premium Panel",
    "url": "https://www.premiumpaneltv.com",
    "logo": "https://www.premiumpaneltv.com/assets/images/logo.png",
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

      <FAQAccordion renderSchema={false} />

      <CTABanner />

      <HomeSEOContent />

      <Footer />
    </main>
  );
}
