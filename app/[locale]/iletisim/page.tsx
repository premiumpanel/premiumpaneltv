import { getTranslations, setRequestLocale } from "next-intl/server";
import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata_iletisim' });
    
    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `https://premiumpaneltv.com/${locale}/iletisim`,
        },
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ContactClient />;
}
