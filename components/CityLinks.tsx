import { Link } from "@/i18n/routing";
import { cities } from "@/lib/cities";
import { useTranslations } from "next-intl";

export default function CityLinks() {
    const t = useTranslations("city_links");

    return (
        <div className="mt-12 pt-8 border-t border-slate-800/50">
            <h4 className="text-white font-semibold mb-4 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d5900a]"></span>
                {t("title")}
            </h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
                {cities.map((city, idx) => (
                    <Link
                        key={city.slug}
                        href={`/iptv-bayilik/${city.slug}`}
                        className="text-xs text-slate-400 hover:text-[#d5900a] transition-colors whitespace-nowrap py-1.5 px-2 inline-block rounded-md bg-white/5 hover:bg-white/10"
                    >
                        {t("link_text", { name: city.name })}
                    </Link>
                ))}
            </div>
        </div>
    );
}
