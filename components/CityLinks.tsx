import Link from "next/link";
import { cities } from "@/lib/cities";

export default function CityLinks() {
    return (
        <div className="mt-12 pt-8 border-t border-slate-800/50">
            <h4 className="text-white font-semibold mb-4 text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d5900a]"></span>
                Türkiye Geneli IPTV Bayilik Hizmet Bölgelerimiz
            </h4>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
                {cities.map((city, idx) => (
                    <Link
                        key={city.slug}
                        href={`/iptv-bayilik/${city.slug}`}
                        className="text-[11px] text-slate-500 hover:text-[#d5900a] transition-colors whitespace-nowrap"
                    >
                        {city.name} IPTV Bayilik{idx !== cities.length - 1 && <span className="ml-2 text-slate-700">|</span>}
                    </Link>
                ))}
            </div>
        </div>
    );
}
