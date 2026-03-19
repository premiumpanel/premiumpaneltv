import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';

export default function HomeSEOContent() {
  const t = useTranslations("seo_content");
  const t_ext = useTranslations("seo_content_extended");
  const locale = useLocale();

  return (
    <section className="py-16 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <article className="prose prose-invert prose-slate max-w-none hover:prose-a:text-[#d5900a] prose-a:text-[#d5900a]/80 prose-a:transition-colors prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400">
          <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-700 pb-4">
            {t("p1")}
          </h2>
          <p>
            {t("p2")}
          </p>
          <p>
            {t_ext("p3")}
          </p>

          <h3>{t_ext("h1")}</h3>
          <p>{t_ext("s1_p1")}</p>
          <p>{t_ext("s1_p2")}</p>
          <ul>
            <li>{t_ext("s1_li1")}</li>
            <li>{t_ext("s1_li2")}</li>
            <li><strong>{t_ext("s1_li3")}</strong></li>
            <li>{t_ext("s1_li4")}</li>
          </ul>

          <h3>{t_ext("h2")}</h3>
          <p>{t_ext("s2_p1")}</p>
          <ul>
            <li><strong>{t_ext("s2_li1")}</strong></li>
            <li><strong>{t_ext("s2_li2")}</strong></li>
            <li><strong>{t_ext("s2_li3")}</strong></li>
            <li><strong>{t_ext("s2_li4")}</strong></li>
          </ul>

          <h3>{t_ext("h3")}</h3>
          <p>{t_ext("s3_p1")}</p>

          <h3>{t_ext("h4")}</h3>
          <p>{t_ext("s4_p1")}</p>

          <h3>{t_ext("h5")}</h3>
          <p>{t_ext("s5_p1")}</p>

          <h3>{t_ext("h6")}</h3>
          <p>{t_ext("s6_p1")}</p>

          <h3>{t_ext("h7")}</h3>
          <p>{t_ext("s7_p1")}</p>

          <h3>{t_ext("h8")}</h3>
          <p>{t_ext("s8_p1")}</p>

          <p className="mt-8 font-medium italic border-l-4 border-[#d5900a] pl-4">
            {t_ext("footer_cta")}
          </p>
        </article>
      </div>
    </section>
  );
}
