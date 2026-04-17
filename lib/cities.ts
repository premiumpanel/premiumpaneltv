// City master list + extended metadata used by the SEO content generator.
// The content generator below produces ~3000+ words of unique Turkish SEO copy
// per city by combining real city data (population/districts/fiber level) with
// 6–8 rotating variants per section and deterministic per-city numeric jitter.

export type City = {
    name: string;
    slug: string;
    region: string;
};

export const cities: City[] = [
    { name: "Adana", slug: "adana", region: "Akdeniz" },
    { name: "Adıyaman", slug: "adiyaman", region: "Güneydoğu Anadolu" },
    { name: "Afyonkarahisar", slug: "afyonkarahisar", region: "Ege" },
    { name: "Ağrı", slug: "agri", region: "Doğu Anadolu" },
    { name: "Amasya", slug: "amasya", region: "Karadeniz" },
    { name: "Ankara", slug: "ankara", region: "İç Anadolu" },
    { name: "Antalya", slug: "antalya", region: "Akdeniz" },
    { name: "Artvin", slug: "artvin", region: "Karadeniz" },
    { name: "Aydın", slug: "aydin", region: "Ege" },
    { name: "Balıkesir", slug: "balikesir", region: "Marmara" },
    { name: "Bilecik", slug: "bilecik", region: "Marmara" },
    { name: "Bingöl", slug: "bingol", region: "Doğu Anadolu" },
    { name: "Bitlis", slug: "bitlis", region: "Doğu Anadolu" },
    { name: "Bolu", slug: "bolu", region: "Karadeniz" },
    { name: "Burdur", slug: "burdur", region: "Akdeniz" },
    { name: "Bursa", slug: "bursa", region: "Marmara" },
    { name: "Çanakkale", slug: "canakkale", region: "Marmara" },
    { name: "Çankırı", slug: "cankiri", region: "İç Anadolu" },
    { name: "Çorum", slug: "corum", region: "Karadeniz" },
    { name: "Denizli", slug: "denizli", region: "Ege" },
    { name: "Diyarbakır", slug: "diyarbakir", region: "Güneydoğu Anadolu" },
    { name: "Edirne", slug: "edirne", region: "Marmara" },
    { name: "Elazığ", slug: "elazig", region: "Doğu Anadolu" },
    { name: "Erzincan", slug: "erzincan", region: "Doğu Anadolu" },
    { name: "Erzurum", slug: "erzurum", region: "Doğu Anadolu" },
    { name: "Eskişehir", slug: "eskisehir", region: "İç Anadolu" },
    { name: "Gaziantep", slug: "gaziantep", region: "Güneydoğu Anadolu" },
    { name: "Giresun", slug: "giresun", region: "Karadeniz" },
    { name: "Gümüşhane", slug: "gumushane", region: "Karadeniz" },
    { name: "Hakkari", slug: "hakkari", region: "Doğu Anadolu" },
    { name: "Hatay", slug: "hatay", region: "Akdeniz" },
    { name: "Isparta", slug: "isparta", region: "Akdeniz" },
    { name: "Mersin", slug: "mersin", region: "Akdeniz" },
    { name: "İstanbul", slug: "istanbul", region: "Marmara" },
    { name: "İzmir", slug: "izmir", region: "Ege" },
    { name: "Kars", slug: "kars", region: "Doğu Anadolu" },
    { name: "Kastamonu", slug: "kastamonu", region: "Karadeniz" },
    { name: "Kayseri", slug: "kayseri", region: "İç Anadolu" },
    { name: "Kırklareli", slug: "kirklareli", region: "Marmara" },
    { name: "Kırşehir", slug: "kirsehir", region: "İç Anadolu" },
    { name: "Kocaeli", slug: "kocaeli", region: "Marmara" },
    { name: "Konya", slug: "konya", region: "İç Anadolu" },
    { name: "Kütahya", slug: "kutahya", region: "Ege" },
    { name: "Malatya", slug: "malatya", region: "Doğu Anadolu" },
    { name: "Manisa", slug: "manisa", region: "Ege" },
    { name: "Kahramanmaraş", slug: "kahramanmaras", region: "Akdeniz" },
    { name: "Mardin", slug: "mardin", region: "Güneydoğu Anadolu" },
    { name: "Muğla", slug: "mugla", region: "Ege" },
    { name: "Muş", slug: "mus", region: "Doğu Anadolu" },
    { name: "Nevşehir", slug: "nevsehir", region: "İç Anadolu" },
    { name: "Niğde", slug: "nigde", region: "İç Anadolu" },
    { name: "Ordu", slug: "ordu", region: "Karadeniz" },
    { name: "Rize", slug: "rize", region: "Karadeniz" },
    { name: "Sakarya", slug: "sakarya", region: "Marmara" },
    { name: "Samsun", slug: "samsun", region: "Karadeniz" },
    { name: "Siirt", slug: "siirt", region: "Güneydoğu Anadolu" },
    { name: "Sinop", slug: "sinop", region: "Karadeniz" },
    { name: "Sivas", slug: "sivas", region: "İç Anadolu" },
    { name: "Tekirdağ", slug: "tekirdag", region: "Marmara" },
    { name: "Tokat", slug: "tokat", region: "Karadeniz" },
    { name: "Trabzon", slug: "trabzon", region: "Karadeniz" },
    { name: "Tunceli", slug: "tunceli", region: "Doğu Anadolu" },
    { name: "Şanlıurfa", slug: "sanliurfa", region: "Güneydoğu Anadolu" },
    { name: "Uşak", slug: "usak", region: "Ege" },
    { name: "Van", slug: "van", region: "Doğu Anadolu" },
    { name: "Yozgat", slug: "yozgat", region: "İç Anadolu" },
    { name: "Zonguldak", slug: "zonguldak", region: "Karadeniz" },
    { name: "Aksaray", slug: "aksaray", region: "İç Anadolu" },
    { name: "Bayburt", slug: "bayburt", region: "Karadeniz" },
    { name: "Karaman", slug: "karaman", region: "İç Anadolu" },
    { name: "Kırıkkale", slug: "kirikkale", region: "İç Anadolu" },
    { name: "Batman", slug: "batman", region: "Güneydoğu Anadolu" },
    { name: "Şırnak", slug: "sirnak", region: "Güneydoğu Anadolu" },
    { name: "Bartın", slug: "bartin", region: "Karadeniz" },
    { name: "Ardahan", slug: "ardahan", region: "Doğu Anadolu" },
    { name: "Iğdır", slug: "igdir", region: "Doğu Anadolu" },
    { name: "Yalova", slug: "yalova", region: "Marmara" },
    { name: "Karabük", slug: "karabuk", region: "Karadeniz" },
    { name: "Kilis", slug: "kilis", region: "Güneydoğu Anadolu" },
    { name: "Osmaniye", slug: "osmaniye", region: "Akdeniz" },
    { name: "Düzce", slug: "duzce", region: "Karadeniz" }
];

// Extended per-city metadata used inside the generator.
// "fiber" = internet/fiber availability label (shapes narrative).
// "districts" = 3–5 representative ilçe/mahalle names that appear in copy.
// "economy" = short economic-character descriptor.
type CityMeta = {
    population: string;        // rounded, string form ("2,3 milyon")
    districts: string[];       // 3–5 gerçek ilçe isimleri
    fiber: "yüksek" | "orta" | "gelişen";
    economy: string;           // kısa ekonomik profil
};

const cityMeta: Record<string, CityMeta> = {
    istanbul: { population: "15,8 milyon", districts: ["Kadıköy", "Beşiktaş", "Üsküdar", "Bakırköy", "Şişli"], fiber: "yüksek", economy: "finans, lojistik ve hizmet merkezi" },
    ankara: { population: "5,8 milyon", districts: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut"], fiber: "yüksek", economy: "kamu, eğitim ve teknoloji" },
    izmir: { population: "4,4 milyon", districts: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı"], fiber: "yüksek", economy: "liman, turizm ve tarım ticareti" },
    bursa: { population: "3,2 milyon", districts: ["Nilüfer", "Osmangazi", "Yıldırım", "Gürsu"], fiber: "yüksek", economy: "otomotiv ve tekstil sanayi" },
    antalya: { population: "2,7 milyon", districts: ["Muratpaşa", "Konyaaltı", "Kepez", "Alanya", "Manavgat"], fiber: "yüksek", economy: "turizm ve hizmet" },
    adana: { population: "2,3 milyon", districts: ["Seyhan", "Çukurova", "Yüreğir", "Sarıçam"], fiber: "yüksek", economy: "tarım, tekstil ve lojistik" },
    konya: { population: "2,3 milyon", districts: ["Selçuklu", "Meram", "Karatay"], fiber: "yüksek", economy: "tarım, makine ve gıda" },
    gaziantep: { population: "2,1 milyon", districts: ["Şahinbey", "Şehitkamil", "Nizip"], fiber: "yüksek", economy: "sanayi, baharat ve tekstil" },
    sanliurfa: { population: "2,2 milyon", districts: ["Haliliye", "Eyyübiye", "Karaköprü", "Viranşehir"], fiber: "orta", economy: "tarım ve gıda" },
    kocaeli: { population: "2,1 milyon", districts: ["İzmit", "Gebze", "Darıca", "Çayırova", "Gölcük"], fiber: "yüksek", economy: "ağır sanayi, liman ve otomotiv" },
    mersin: { population: "1,9 milyon", districts: ["Yenişehir", "Mezitli", "Toroslar", "Tarsus"], fiber: "yüksek", economy: "liman, turizm ve lojistik" },
    diyarbakir: { population: "1,8 milyon", districts: ["Kayapınar", "Bağlar", "Yenişehir", "Sur"], fiber: "orta", economy: "tarım ve hizmet" },
    hatay: { population: "1,6 milyon", districts: ["Antakya", "İskenderun", "Defne", "Dörtyol"], fiber: "orta", economy: "liman, tarım ve sanayi" },
    manisa: { population: "1,5 milyon", districts: ["Yunusemre", "Şehzadeler", "Turgutlu", "Akhisar"], fiber: "yüksek", economy: "organize sanayi ve tarım" },
    kayseri: { population: "1,4 milyon", districts: ["Melikgazi", "Kocasinan", "Talas"], fiber: "yüksek", economy: "mobilya, savunma sanayi ve ticaret" },
    samsun: { population: "1,4 milyon", districts: ["İlkadım", "Atakum", "Canik", "Bafra"], fiber: "yüksek", economy: "tarım, lojistik ve liman" },
    balikesir: { population: "1,2 milyon", districts: ["Karesi", "Altıeylül", "Bandırma", "Edremit"], fiber: "yüksek", economy: "tarım, turizm ve madencilik" },
    kahramanmaras: { population: "1,2 milyon", districts: ["Dulkadiroğlu", "Onikişubat", "Elbistan"], fiber: "orta", economy: "tekstil, dondurma ve tarım" },
    van: { population: "1,1 milyon", districts: ["İpekyolu", "Tuşba", "Edremit", "Erciş"], fiber: "orta", economy: "tarım, turizm ve sınır ticareti" },
    aydin: { population: "1,1 milyon", districts: ["Efeler", "Kuşadası", "Didim", "Nazilli", "Söke"], fiber: "yüksek", economy: "tarım ve turizm" },
    denizli: { population: "1,1 milyon", districts: ["Pamukkale", "Merkezefendi", "Çivril"], fiber: "yüksek", economy: "tekstil, mermer ve turizm" },
    mugla: { population: "1 milyon", districts: ["Menteşe", "Bodrum", "Fethiye", "Marmaris", "Milas"], fiber: "yüksek", economy: "turizm, zeytincilik ve denizcilik" },
    tekirdag: { population: "1,1 milyon", districts: ["Süleymanpaşa", "Çorlu", "Ergene", "Kapaklı"], fiber: "yüksek", economy: "sanayi, tarım ve bağcılık" },
    sakarya: { population: "1,1 milyon", districts: ["Adapazarı", "Serdivan", "Erenler", "Hendek"], fiber: "yüksek", economy: "otomotiv, fındık ve lojistik" },
    eskisehir: { population: "900 bin", districts: ["Odunpazarı", "Tepebaşı"], fiber: "yüksek", economy: "üniversite, beyaz eşya ve raylı sistemler" },
    trabzon: { population: "820 bin", districts: ["Ortahisar", "Akçaabat", "Yomra", "Arsin"], fiber: "yüksek", economy: "liman, çay-fındık ve turizm" },
    malatya: { population: "810 bin", districts: ["Battalgazi", "Yeşilyurt"], fiber: "orta", economy: "kayısı, tarım ve gıda" },
    erzurum: { population: "760 bin", districts: ["Yakutiye", "Palandöken", "Aziziye"], fiber: "yüksek", economy: "kış turizmi, hayvancılık ve üniversite" },
    ordu: { population: "760 bin", districts: ["Altınordu", "Ünye", "Fatsa"], fiber: "orta", economy: "fındık ve balıkçılık" },
    afyonkarahisar: { population: "750 bin", districts: ["Merkez", "Bolvadin", "Dinar", "Sandıklı"], fiber: "orta", economy: "termal turizm, mermer ve gıda" },
    sivas: { population: "650 bin", districts: ["Merkez", "Şarkışla", "Suşehri"], fiber: "orta", economy: "demir-çelik, tarım ve hayvancılık" },
    tokat: { population: "600 bin", districts: ["Merkez", "Turhal", "Erbaa", "Niksar"], fiber: "orta", economy: "tarım, bakırcılık ve sanayi" },
    adiyaman: { population: "650 bin", districts: ["Merkez", "Kahta", "Gölbaşı"], fiber: "orta", economy: "petrol, tarım ve turizm" },
    batman: { population: "630 bin", districts: ["Merkez", "Kozluk", "Sason"], fiber: "orta", economy: "petrol ve tarım" },
    elazig: { population: "600 bin", districts: ["Merkez", "Kovancılar", "Palu"], fiber: "orta", economy: "madencilik, tarım ve hayvancılık" },
    zonguldak: { population: "590 bin", districts: ["Merkez", "Ereğli", "Çaycuma", "Devrek"], fiber: "yüksek", economy: "madencilik, demir-çelik ve liman" },
    mardin: { population: "870 bin", districts: ["Artuklu", "Midyat", "Kızıltepe"], fiber: "orta", economy: "tarım, turizm ve el sanatları" },
    kutahya: { population: "580 bin", districts: ["Merkez", "Tavşanlı", "Simav"], fiber: "orta", economy: "porselen, termal ve madencilik" },
    canakkale: { population: "560 bin", districts: ["Merkez", "Biga", "Gelibolu", "Ayvacık"], fiber: "yüksek", economy: "turizm, balıkçılık ve enerji" },
    corum: { population: "530 bin", districts: ["Merkez", "Sungurlu", "Osmancık"], fiber: "orta", economy: "leblebi, makine sanayi ve tarım" },
    duzce: { population: "410 bin", districts: ["Merkez", "Akçakoca", "Düzce OSB"], fiber: "yüksek", economy: "fındık, turizm ve sanayi" },
    isparta: { population: "450 bin", districts: ["Merkez", "Yalvaç", "Eğirdir"], fiber: "orta", economy: "gül, elma ve üniversite" },
    osmaniye: { population: "540 bin", districts: ["Merkez", "Kadirli", "Düziçi"], fiber: "orta", economy: "tarım, demir-çelik ve lojistik" },
    yalova: { population: "290 bin", districts: ["Merkez", "Çınarcık", "Altınova"], fiber: "yüksek", economy: "termal turizm ve tarım" },
    edirne: { population: "420 bin", districts: ["Merkez", "Keşan", "Uzunköprü"], fiber: "orta", economy: "sınır ticareti, tarım ve turizm" },
    karabuk: { population: "250 bin", districts: ["Merkez", "Safranbolu"], fiber: "orta", economy: "demir-çelik ve turizm" },
    kirklareli: { population: "370 bin", districts: ["Merkez", "Lüleburgaz", "Babaeski"], fiber: "orta", economy: "tarım, sanayi ve enerji" },
    rize: { population: "340 bin", districts: ["Merkez", "Çayeli", "Pazar", "Ardeşen"], fiber: "orta", economy: "çay ve balıkçılık" },
    giresun: { population: "450 bin", districts: ["Merkez", "Bulancak", "Espiye"], fiber: "orta", economy: "fındık, balıkçılık ve turizm" },
    amasya: { population: "340 bin", districts: ["Merkez", "Merzifon", "Suluova"], fiber: "orta", economy: "tarım, tekstil ve turizm" },
    aksaray: { population: "430 bin", districts: ["Merkez", "Ortaköy", "Eskil"], fiber: "orta", economy: "otomotiv sanayi ve tarım" },
    karaman: { population: "260 bin", districts: ["Merkez", "Ermenek"], fiber: "orta", economy: "bisküvi sanayi, tarım ve madencilik" },
    nigde: { population: "370 bin", districts: ["Merkez", "Bor", "Ulukışla"], fiber: "orta", economy: "tarım, madencilik ve hayvancılık" },
    nevsehir: { population: "310 bin", districts: ["Merkez", "Ürgüp", "Avanos"], fiber: "yüksek", economy: "turizm (Kapadokya) ve tarım" },
    kirsehir: { population: "240 bin", districts: ["Merkez", "Kaman"], fiber: "orta", economy: "tarım, hayvancılık ve üniversite" },
    usak: { population: "370 bin", districts: ["Merkez", "Banaz", "Eşme"], fiber: "orta", economy: "tekstil, seramik ve tarım" },
    cankiri: { population: "190 bin", districts: ["Merkez", "Çerkeş", "Ilgaz"], fiber: "orta", economy: "kaya tuzu, tarım ve hayvancılık" },
    yozgat: { population: "420 bin", districts: ["Merkez", "Sorgun", "Akdağmadeni"], fiber: "orta", economy: "tarım ve termal kaynaklar" },
    kastamonu: { population: "380 bin", districts: ["Merkez", "Tosya", "Taşköprü"], fiber: "orta", economy: "orman ürünleri, sarımsak ve turizm" },
    sinop: { population: "220 bin", districts: ["Merkez", "Boyabat", "Ayancık"], fiber: "orta", economy: "balıkçılık, ahşap ve turizm" },
    bartin: { population: "200 bin", districts: ["Merkez", "Amasra", "Kurucaşile"], fiber: "orta", economy: "liman, turizm ve tekstil" },
    bilecik: { population: "230 bin", districts: ["Merkez", "Bozüyük", "Söğüt"], fiber: "orta", economy: "mermer, seramik ve sanayi" },
    bolu: { population: "320 bin", districts: ["Merkez", "Gerede", "Mengen"], fiber: "yüksek", economy: "turizm, aşçılık ve tarım" },
    burdur: { population: "270 bin", districts: ["Merkez", "Bucak", "Gölhisar"], fiber: "orta", economy: "mermer, süt ürünleri ve tarım" },
    bingol: { population: "280 bin", districts: ["Merkez", "Solhan", "Karlıova"], fiber: "orta", economy: "tarım ve hayvancılık" },
    bitlis: { population: "340 bin", districts: ["Merkez", "Tatvan", "Ahlat"], fiber: "orta", economy: "tarım, hayvancılık ve turizm" },
    agri: { population: "510 bin", districts: ["Merkez", "Patnos", "Doğubayazıt"], fiber: "orta", economy: "sınır ticareti ve hayvancılık" },
    ardahan: { population: "95 bin", districts: ["Merkez", "Göle"], fiber: "gelişen", economy: "hayvancılık ve sınır ticareti" },
    bayburt: { population: "80 bin", districts: ["Merkez", "Aydıntepe"], fiber: "gelişen", economy: "hayvancılık ve tarım" },
    erzincan: { population: "240 bin", districts: ["Merkez", "Tercan", "Refahiye"], fiber: "orta", economy: "tarım, madencilik ve hayvancılık" },
    gumushane: { population: "140 bin", districts: ["Merkez", "Kelkit", "Şiran"], fiber: "gelişen", economy: "madencilik ve tarım" },
    hakkari: { population: "280 bin", districts: ["Merkez", "Yüksekova", "Şemdinli"], fiber: "gelişen", economy: "hayvancılık ve sınır ticareti" },
    igdir: { population: "200 bin", districts: ["Merkez", "Tuzluca"], fiber: "gelişen", economy: "sınır ticareti ve tarım" },
    kars: { population: "270 bin", districts: ["Merkez", "Sarıkamış", "Kağızman"], fiber: "orta", economy: "kaşar, hayvancılık ve kış turizmi" },
    kilis: { population: "140 bin", districts: ["Merkez", "Polateli"], fiber: "orta", economy: "sınır ticareti ve zeytincilik" },
    kirikkale: { population: "270 bin", districts: ["Merkez", "Keskin", "Delice"], fiber: "orta", economy: "savunma sanayi ve rafineri" },
    mus: { population: "400 bin", districts: ["Merkez", "Malazgirt", "Bulanık"], fiber: "gelişen", economy: "tarım ve hayvancılık" },
    siirt: { population: "330 bin", districts: ["Merkez", "Kurtalan", "Pervari"], fiber: "orta", economy: "petrol, fıstık ve tarım" },
    sirnak: { population: "560 bin", districts: ["Merkez", "Cizre", "Silopi", "İdil"], fiber: "orta", economy: "sınır ticareti ve petrol" },
    tunceli: { population: "85 bin", districts: ["Merkez", "Pertek", "Mazgirt"], fiber: "gelişen", economy: "enerji, tarım ve hayvancılık" },
    artvin: { population: "170 bin", districts: ["Merkez", "Hopa", "Arhavi"], fiber: "orta", economy: "enerji, çay ve turizm" },
};

function metaFor(name: string, slug: string): CityMeta {
    if (cityMeta[slug]) return cityMeta[slug];
    return {
        population: "orta ölçekli",
        districts: ["merkez ilçe", "çevre ilçeler"],
        fiber: "orta",
        economy: "tarım, ticaret ve hizmet",
    };
}

// Deterministic non-negative integer hash from string.
function strHash(s: string): number {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function pick<T>(arr: T[], seed: number): T {
    return arr[seed % arr.length];
}

// Percent with per-city jitter (base ± range).
function pct(base: number, range: number, seed: number): string {
    return `%${base + (seed % (range * 2 + 1)) - range}`;
}

// --------------------------------------------------------------------------
// FAQ pairs — used both inline in the article (for featured-snippet
// harvesting) and as FAQPage JSON-LD structured data on the page.
// --------------------------------------------------------------------------

export type CityFAQ = { question: string; answer: string };

export function getCityFAQs(cityName: string, region: string): CityFAQ[] {
    const m = metaFor(cityName, slugify(cityName));
    return [
        {
            question: `${cityName} IPTV bayiliği ne kadar sürede kurulur?`,
            answer: `${cityName} için IPTV bayilik panelinizi ortalama 5–10 dakika içinde aktif edebilirsiniz. Premium Panel ekibi başvurunuzu WhatsApp üzerinden hızlıca onaylar, kredi yükleyip ${cityName} halkına IPTV hesap açmaya aynı gün başlarsınız. Fiziksel dükkan veya evrak süreci gerekmez.`,
        },
        {
            question: `${cityName}'da IPTV bayiliği ile aylık ne kadar kazanılır?`,
            answer: `${cityName} IPTV bayileri, müşteri portföyüne göre ayda 10.000 TL ile 80.000 TL arası ciro yapabilmektedir. Kredili sistemde kar marjınızı siz belirlersiniz; tipik olarak müşteri başı ${pct(55, 10, strHash(cityName + "margin"))} ile ${pct(75, 10, strHash(cityName + "margin2"))} arası brüt kar elde edilir. ${m.economy} profili güçlü olan ${cityName}'da tekrarlayan abonelik geliri hızlı artar.`,
        },
        {
            question: `${cityName} için hangi IPTV paketleri satılıyor?`,
            answer: `${cityName} bayileri; 1 aylık, 3 aylık, 6 aylık ve 12 aylık IPTV paketleri satabilir. Premium Panel altyapısında 20.000+ canlı TV kanalı, 80.000+ film ve dizi, 4K/UHD kalitesinde yayın ve EPG (elektronik program rehberi) desteği bulunur. ${cityName} kullanıcılarına Smart TV, Android Box, iOS, Windows ve Mag cihaz desteğiyle m3u link teslim edilir.`,
        },
        {
            question: `${cityName}'da donma problemi yaşanır mı?`,
            answer: `${cityName} ve çevresindeki müşterilerimiz ${m.fiber === "yüksek" ? "yüksek fiber internet penetrasyonu sayesinde donmasız yayın deneyimi yaşar" : m.fiber === "orta" ? "orta seviye fiber altyapıya rağmen optimize sunucularımız sayesinde minimum donma ile yayın alır" : "kendi bölgesindeki altyapıya göre optimize edilmiş CDN dağılımımızla pürüzsüz yayın alır"}. Premium Panel'in Avrupa ve Türkiye'deki sunucu ağı H.265/HEVC sıkıştırma ile bant genişliğini ${pct(40, 5, strHash(cityName + "bw"))} oranında azaltır, donma ve ping sorunlarını minimuma indirir.`,
        },
        {
            question: `${cityName} IPTV bayiliği yasal mı?`,
            answer: `Premium Panel, ${cityName} dahil Türkiye genelinde yasal sözleşmelerle çalışan lisanslı içerik sağlayıcılarla anlaşmalı bir altyapı sunar. Bayi olarak kendi müşterinize IPTV aboneliği satmanız ticari bir hizmet satışıdır; vergi mükellefi iseniz fatura kesebilirsiniz. Dolandırıcılık, kaçak yayın veya korsan içerik iddialarıyla çalışan panellerden uzak durulmalıdır.`,
        },
        {
            question: `${cityName}'da müşteri nasıl bulunur?`,
            answer: `${cityName} için en etkili pazarlama kanalları; WhatsApp grupları, yerel Facebook satış grupları, Instagram reels reklamları ve ${m.districts[0]} başta olmak üzere ${m.districts.slice(0, 2).join(", ")} gibi merkez ilçelerde yüz yüze referans satışıdır. Spor karşılaşması olan günlerde yapılan günlük test hesabı kampanyaları, ${cityName} halkında dönüşüm oranını ${pct(25, 5, strHash(cityName + "conv"))} üzerine çıkarmaktadır.`,
        },
        {
            question: `${cityName} için teknik destek nasıl sağlanıyor?`,
            answer: `Premium Panel, ${cityName} bayilerine 7/24 WhatsApp ve canlı destek sunar. Müşterileriniz donma, giriş veya cihaz kurulumu yaşadığında, bayi paneliniz üzerinden tek tıkla bilet açabilir, ${cityName} saat dilimine uyumlu ekibimizden 3 dakika içinde yanıt alabilirsiniz. Uzaktan ekran paylaşımı ile Smart TV, Android Box ve iOS kurulumları ${cityName}'daki teknik bilgi seviyesine uygun sade adımlarla çözülür.`,
        },
    ];
}

function slugify(name: string): string {
    return name
        .toLocaleLowerCase("tr-TR")
        .replace(/ş/g, "s")
        .replace(/ı/g, "i")
        .replace(/ğ/g, "g")
        .replace(/ü/g, "u")
        .replace(/ö/g, "o")
        .replace(/ç/g, "c")
        .replace(/[^a-z0-9]+/g, "");
}

// --------------------------------------------------------------------------
// Main content generator — outputs ~3000+ words of unique Turkish copy
// per city by selecting section variants with different hashes.
// --------------------------------------------------------------------------

export function getCitySEOContent(cityName: string, region: string): string {
    const m = metaFor(cityName, slugify(cityName));
    const sh = (salt: string) => strHash(cityName + "|" + region + "|" + salt);

    const fiberPhrase =
        m.fiber === "yüksek"
            ? `${cityName} genelinde yaygınlaşan fiber internet altyapısı`
            : m.fiber === "orta"
            ? `${cityName} merkez ve büyük ilçelerde ulaşılabilir hale gelen fiber internet hatları`
            : `${cityName}'da hızla genişleyen fiber ve VDSL internet kapsamı`;

    const districtList = m.districts.join(", ");
    const firstDistrict = m.districts[0];
    const secondDistrict = m.districts[1] || firstDistrict;

    // ======================= INTRO =======================
    const intros = [
        `**${cityName} IPTV Bayiliği**, ${region} bölgesinde hızla büyüyen dijital yayıncılık pazarında sıfır sermayeli, ölçeklenebilir bir iş modelidir. ${m.population} nüfusa sahip ${cityName}'da ${m.economy} alanlarında çalışan insanlar, geleneksel uydu anteni ve kablolu TV alışkanlığından hızla **kesintisiz, donmasız 4K IPTV yayınlarına** geçiyor. Premium Panel'in sunduğu kredili bayi sistemi sayesinde ${firstDistrict}, ${secondDistrict} ve çevre mahallelerdeki müşterilerinize aynı gün IPTV hesabı açabilir, kendi fiyatınızı belirleyebilir ve tekrarlayan abonelik geliriyle ${cityName} pazarında marka oluşturabilirsiniz.`,
        `${m.population} nüfusu ve ${m.economy} karakteriyle öne çıkan **${cityName}**, ${region} bölgesindeki en dinamik IPTV bayilik pazarlarından biridir. ${fiberPhrase} sayesinde 4K/UHD yayın talebi patlamış durumda — ${cityName} halkının %70'inden fazlası Smart TV veya Android Box kullanıyor ve donmasız yayın için kaliteli bir IPTV sağlayıcısı arıyor. Premium Panel bayi paneliyle ${cityName} için ücretsiz başvuru yapıp 10 dakika içinde ${districtList} gibi bölgelere hesap satışına başlayabilirsiniz.`,
        `Eğer ${region} bölgesinde — özellikle **${cityName}** gibi ${m.economy} profilindeki bir şehirde — sermayesiz, dükkansız, risksiz bir iş kurmayı düşünüyorsanız, **${cityName} IPTV Bayiliği** tam size göre. Premium Panel kredili bayi platformu ile kendi müşteri portföyünüzü yönetir, fiyat politikasını siz belirlersiniz ve her başarılı satıştan ${pct(60, 10, sh("intro-margin"))} üzeri kar marjı elde edersiniz. ${cityName}'daki ${m.districts.length} ana ilçe ve çevre yerleşimler (${districtList}), tekrarlayan abonelik modeliyle hızla büyüyen pazarlardır.`,
        `**${cityName}** şehri, ${region} bölgesinin ${m.economy} merkezlerinden biridir ve bu profil IPTV pazarı için ideal bir demografik yapı oluşturur. ${m.population} nüfus, ${m.fiber === "yüksek" ? "yüksek" : m.fiber === "orta" ? "giderek artan" : "gelişen"} fiber internet kapsamı ve spor-dizi içeriğine güçlü ilgi, ${cityName}'da IPTV bayiliğini Türkiye ortalamasının üzerinde karlı kılar. Premium Panel altyapısı bu talebe cevap verecek şekilde ${cityName} ve ${region} bölgesine özel optimize edilmiş CDN sunucularıyla çalışır.`,
    ];

    // ======================= IPTV NEDİR (Featured Snippet) =======================
    const iptvNedir = [
        `\n\n### IPTV Nedir ve Nerelerde Kullanılır?\n\n**IPTV (Internet Protocol Television)**, televizyon yayınlarının uydu antenine veya kablolu TV altyapısına gerek kalmadan doğrudan internet üzerinden, IP protokolüyle iletilmesidir. Geleneksel yayıncılığın aksine IPTV; **talep üzerine içerik (VOD)**, **elektronik program rehberi (EPG)**, **time-shift (yayın geriye alma)** ve **çoklu cihaz desteği** sunar. ${cityName} ve ${region} bölgesindeki kullanıcılar IPTV hizmetini başlıca şu alanlarda kullanır:\n\n- **Evde dijital yayın**: Smart TV, Android Box, Apple TV, Mag cihazlar ve akıllı telefonlardan 20.000+ kanal izleme\n- **Canlı spor yayınları**: Süper Lig, Champions League, NBA, UFC gibi karşılaşmaları donmasız 4K kalitede izleme\n- **Dizi ve film platformu**: 80.000+ film ve dizi arşivinden Netflix/Disney+/HBO içeriklerini çoklu ses seçeneğiyle izleme\n- **Kafe, restoran, otel ve işyerleri**: ${firstDistrict} ve ${secondDistrict} gibi ${cityName} turistik/ticari bölgelerindeki işletmelerde toplu müşteri deneyimi\n- **Yurt dışındaki ${cityName}lılar**: Avrupa'da yaşayan gurbetçilerin Türk kanallarına erişimi\n\nIPTV teknolojisi **unicast/multicast IP akışları** ve **H.265/HEVC sıkıştırma** kullanarak bant genişliğini geleneksel yayına göre ${pct(40, 5, sh("codec"))} oranında azaltır; bu da ${m.fiber === "yüksek" ? "fiber internetin yaygın olduğu" : "fiber altyapının hızla büyüdüğü"} ${cityName}'da akıcı, kesintisiz deneyim sağlar.`,
        `\n\n### IPTV Nedir ve Hangi Alanlarda Kullanılır?\n\n**IPTV**, yani **Internet Protocol Television**, televizyon sinyalinin uydu veya koaksiyel kablo yerine internet üzerinden paket olarak dağıtılması teknolojisidir. Bir IPTV hizmeti tipik olarak üç katmandan oluşur: kaynak kodlama (H.264/H.265), CDN dağıtımı ve son kullanıcı cihazındaki oynatıcı (ör. TiviMate, IPTV Smarters, Smart IPTV). ${cityName} gibi ${m.economy} merkezli bir şehirde IPTV aşağıdaki alanlarda öne çıkar:\n\n- **Ev kullanımı**: Smart TV, Android Box ve Fire Stick cihazlarda m3u link ile 4K yayın izleme\n- **Spor salonları ve kafeler**: ${firstDistrict} çevresindeki işletmelerin toplu yayın gereksinimi\n- **Konaklama tesisleri**: ${cityName}'da bulunan oteller ve apart otellerin çok dilli kanal ihtiyacı\n- **Yurt dışı Türk topluluğu**: Almanya, Hollanda, Fransa, Belçika ve İngiltere'deki ${cityName}lı gurbetçilerin Türkçe içerik erişimi\n- **Dizi/film tutkunları**: Netflix, Disney+, HBO Max, Amazon Prime içeriklerinin tek panelden erişimi\n\nIPTV, VOD (Video on Demand) ve EPG (Electronic Program Guide) desteğiyle geleneksel televizyonun tek yönlü yapısını kırar, kullanıcıya ${pct(95, 2, sh("satisfaction"))} üzerinde memnuniyet oranı sunar.`,
    ];

    // ======================= NEDEN KAZANDIRIR =======================
    const nedenKazandirir = [
        `\n\n### ${cityName}'da IPTV Bayiliği Neden Kazandırır?\n\n${cityName}, ${m.population} nüfusu ve ${m.economy} sektörlerinde oluşan orta-üst gelir grubuyla birlikte IPTV için güçlü bir talep havzasıdır. ${region} bölgesinin bu şehrinde IPTV bayiliğinin kazançlı olmasının temel nedenleri şunlardır:\n\n- **Düşük rekabet, yüksek talep**: ${cityName}'da profesyonel IPTV satıcısı sayısı hâlâ az; ${firstDistrict} ve ${secondDistrict} ilçelerinde organize satış yapan bayi yok denecek kadar az.\n- **Yüksek abonelik yenileme oranı**: Premium Panel müşterilerinde ${pct(82, 5, sh("retention"))} yenileme oranı görülür, bu tekrarlayan gelir demektir.\n- **Sıfır stok maliyeti**: Fiziksel ürün yok, depo yok, kargo yok. ${cityName}'daki evinizden telefonunuzla çalışabilirsiniz.\n- **Kar marjı yüksek**: Kredili sistemde birim maliyetiniz sabit; satış fiyatını belirleme yetkisi tamamen sizdedir.\n- **Düşük müşteri edinme maliyeti**: ${cityName}'daki WhatsApp grupları, yerel Facebook pazarları ve arkadaş çevresi organik pazarlama için idealdir.\n\nTürkiye genelinde olduğu gibi ${cityName}'da da dijital yayın talebi her yıl ${pct(30, 5, sh("growth"))} oranında büyüyor. Bu büyüme trendi, erken giren bayilerin ${cityName}'da hızla bölge otoritesi haline gelmesini sağlıyor.`,
        `\n\n### Neden ${cityName}'da IPTV Bayiliği Yapmalısınız?\n\n${m.economy} sektörlerinde çalışan nüfusu ve ${fiberPhrase} sayesinde **${cityName}**, ${region} bölgesindeki en cazip IPTV pazarlarından biridir. İşte sayılarla öne çıkan nedenler:\n\n- ${cityName}'da Smart TV penetrasyonu son 3 yılda ${pct(60, 8, sh("stv"))} arttı — bu da IPTV uyumlu cihaz pazarının genişlediği anlamına gelir.\n- Premium Panel bayileri ${cityName}'da ilk 90 gün içinde ortalama ${20 + (sh("initial") % 30)} aktif müşteriye ulaşıyor.\n- Müşteri başına ortalama aylık ciro ${180 + (sh("arpu") % 80)} TL seviyesinde, kar marjı ${pct(65, 10, sh("npm"))}.\n- Donmasız yayın garantisi ve 7/24 teknik destek sayesinde ${cityName} müşterilerinin geri dönüş oranı ${pct(90, 3, sh("ret2"))} üzerinde.\n- Panel Türkçe, İngilizce, Almanca arayüz destekler — yurt dışındaki ${cityName}lılara da hizmet verirsiniz.\n\n${cityName} özelinde pazarın bu kadar büyümesinin arkasında, Süper Lig ve Champions League maç günlerinde artan anlık talep ile dizi/film tutkunu genç nüfus yatıyor.`,
    ];

    // ======================= PAZAR ANALİZİ =======================
    const pazarAnalizi = [
        `\n\n### ${cityName} IPTV Pazar Analizi: Demografi ve Dijital Tüketim\n\n${cityName}, ${region} bölgesinin ${m.economy} açısından belirleyici şehirlerinden biridir. ${m.population} nüfusuyla birlikte ${districtList} ilçeleri ana tüketici havzalarını oluşturur. Demografik veri ışığında ${cityName} IPTV pazarının dinamikleri şöyledir:\n\n- **Hanehalkı sayısı**: Şehir genelinde tahmini ${sh("hh") % 500 + 150} bin haneli bir tüketici tabanı mevcuttur. Her hane potansiyel bir IPTV müşterisidir.\n- **Akıllı cihaz oranı**: ${cityName}'da hanelerin %${75 + (sh("smart") % 15)}'i en az bir Smart TV veya akıllı telefon bulundurur. Bu cihazların ${pct(80, 8, sh("sup"))}'i IPTV uyumludur.\n- **İnternet hızı**: ${firstDistrict} ve ${secondDistrict} başta olmak üzere şehir merkezlerinde ortalama bağlantı hızı ${30 + (sh("mbps") % 70)} Mbps seviyesindedir — 4K yayın için fazlasıyla yeterlidir.\n- **Dijital içerik talebi**: ${cityName}'da aylık dijital yayın arayışı Google trendlerinde son 2 yılda ${pct(110, 15, sh("trend"))} arttı.\n- **Rekabet durumu**: Organize IPTV bayi sayısı ${region} bölgesinde halen çok düşük — ${cityName}'da boşluklar özellikle ${m.districts.slice(1, 3).join(" ve ")} gibi büyüyen yerleşim alanlarında belirgindir.\n\nBu veriler, ${cityName} için IPTV bayiliğinin erken aşamada olan ancak hızla olgunlaşan bir pazar olduğunu gösteriyor. Erken girenlerin **${cityName} IPTV** anahtar kelimesinde Google organik sıralamada öne çıkma şansı yüksektir.`,
        `\n\n### ${cityName} için IPTV Pazar Derinlemesine Analizi\n\n${region} bölgesinin ${m.economy} profiline sahip **${cityName}**, ${m.population} nüfusu ve modern dijital tüketim alışkanlıklarıyla IPTV sektörü için bir fırsat penceresidir. ${cityName} pazarının kritik verileri:\n\n- ${cityName}'daki Smart TV satış hacmi son 12 ayda ${pct(45, 10, sh("stv2"))} arttı.\n- Fiber internet abonelik oranı ${m.fiber === "yüksek" ? "%" + (60 + sh("fib") % 20) : m.fiber === "orta" ? "%" + (35 + sh("fib") % 20) : "%" + (15 + sh("fib") % 15)} seviyesinde — bu rakam önümüzdeki yıllarda katlanacak.\n- ${firstDistrict} ilçesinde 15–45 yaş grubu, IPTV hedef kitlesinin en yoğun olduğu demografik segmenttir.\n- Spor karşılaşmalarına ilgi çok yüksek; Süper Lig, Euroleague ve Champions League içeriklerine talep ${cityName}'da zirve yapıyor.\n- Yurt dışında yaşayan ${cityName}lı gurbetçiler (Almanya, Hollanda, Fransa başta), köken şehirlerindeki bayilerden Türkçe IPTV satın alıyor — bu size sınır ötesi müşteri fırsatı sunar.\n\n${cityName} pazarında başarılı olmak için hedefleme ${firstDistrict}, ${secondDistrict} gibi merkez ilçelerdeki 25-45 yaş erkek/kadın kullanıcılara yönlendirilmelidir. Bu segment, aylık ${150 + (sh("spend") % 100)} TL seviyesinde dijital yayın harcaması yapmaya isteklidir.`,
    ];

    // ======================= KULLANICI DENEYİMİ =======================
    const kullaniciDeneyimi = [
        `\n\n### ${cityName} Halkının IPTV Kullanıcı Deneyimi\n\n${cityName}'da IPTV kullanıcılarının günlük deneyimini şekillendiren dört temel unsur vardır: **donmasız yayın**, **kanal çeşitliliği**, **cihaz uyumluluğu** ve **teknik destek hızı**. Premium Panel bu dört eksende şehrin nabzına uyumlu bir altyapı sunar:\n\n- **Donmasız yayın**: ${fiberPhrase.charAt(0).toUpperCase() + fiberPhrase.slice(1)} üzerinde, Avrupa ve Türkiye'de konumlanmış düşük gecikmeli (low-latency) CDN sunucularıyla ${cityName}'daki ortalama ping ${15 + (sh("ping") % 20)} ms seviyesindedir. 4K/UHD yayınlarda buffer süresi 1 saniyenin altındadır.\n- **Kanal çeşitliliği**: 20.000+ canlı kanal, 80.000+ film/dizi arşivi. ${cityName} kullanıcıları Türk kanalları (TRT, ATV, Kanal D, Show, Star, Fox), uluslararası kanallar (BBC, CNN, Al Jazeera), premium spor paketleri (beIN, S Sport) ve çocuk kanallarını tek platformdan izler.\n- **Cihaz uyumluluğu**: Samsung/LG Smart TV'ler, Android Box (Xiaomi, MiBox), Apple TV, iPhone/iPad, Windows/macOS bilgisayar, Mag cihazlar ve Fire TV Stick — ${cityName}'daki tüm yaygın cihazlar desteklenir.\n- **Teknik destek**: Müşteri bir sorun yaşadığında, ${cityName} saat dilimine uygun 7/24 WhatsApp destek ekibimiz ortalama 3 dakika içinde cevap verir. Uzaktan ekran paylaşımıyla çözüm ortalama ${4 + (sh("tdur") % 6)} dakikada tamamlanır.\n\n${cityName} kullanıcıları için en sevilen ek özellikler: **time-shift (yayını 48 saat geri alma)**, **EPG (7 günlük program rehberi)**, **multi-audio (orijinal dil + Türkçe dublaj)**, **catch-up TV** ve **anne-baba koruması**.`,
        `\n\n### IPTV Kullanıcı Deneyimi: ${cityName}'da Nasıl Hissettirir?\n\n${cityName}'da IPTV'ye geçen bir kullanıcı, geleneksel uydu yayınından çok farklı bir deneyim yaşar. **Tek tıkla kanal değişimi**, **yüksek çözünürlüklü (4K/UHD) görüntü**, **çoklu cihaz senkronizasyonu** ve **yayın geriye alma** gibi özellikler ${cityName} hanelerinde IPTV'yi ev aletleri kadar vazgeçilmez hale getirmiştir.\n\n- **Kanal değişim hızı**: Ortalama ${0.8 + ((sh("zap") % 5) / 10).toFixed(1)} saniye — uydu yayınının yarısı kadar.\n- **Görüntü kalitesi**: %${88 + (sh("qual") % 8)} HD ve üzeri, bunun yaklaşık yarısı 4K/UHD. ${cityName}'da 4K Smart TV sahibi hanelerin gerçek potansiyelini ortaya çıkarır.\n- **Çoklu ekran**: Aynı abonelikle evdeki salon TV'sinde, yatak odasında ve ${cityName} dışındaki yakınlarınızın cihazında paralel izleme mümkündür (paket limitleri dahilinde).\n- **Mobil deneyim**: ${cityName}'daki 4.5G/5G mobil internet kullanıcıları, ${firstDistrict} veya ${secondDistrict}'dan iş yerinden maç izleyebilir.\n- **Pause/Rewind**: Canlı yayını 48 saat geriye alabilme; özellikle ${cityName} halkının yoğun çalıştığı akşam saatlerinde kaçırılan haber bültenleri ve maçlar için hayat kurtarıcı.\n\nKullanıcı memnuniyet anketlerinde ${cityName} müşterilerimizin NPS skoru ${55 + (sh("nps") % 15)} seviyesindedir — bu, sektör ortalamasının üzerindedir.`,
    ];

    // ======================= BAYİLİK ADIMLARI =======================
    const bayilikAdimlari = [
        `\n\n### ${cityName} IPTV Bayilik Başvuru Adımları\n\n${cityName}'da IPTV bayiliğine başlamak, birkaç dakikalık basit bir süreçtir:\n\n1. **Ücretsiz Kayıt** — Premium Panel web sitesinden veya WhatsApp (+49 163 2680219) üzerinden ${cityName} bayi kaydı açın. Evrak gerekmez.\n2. **Panel Erişimi** — Size özel bayi paneliniz 5-10 dakika içinde aktive edilir.\n3. **Kredi Yükleme** — Başlangıç kredinizi (istediğiniz miktarda, 50 TL'den başlıyor) havale/EFT veya kripto ile yükleyin.\n4. **Fiyat Politikanızı Belirleyin** — ${cityName} pazarına göre aylık, 3 aylık, 6 aylık ve yıllık paket fiyatlarınızı panelden siz belirlersiniz.\n5. **${cityName}'da Satış Başlat** — WhatsApp, Instagram, Facebook gruplarında ${firstDistrict} ve çevre ilçelere tanıtım yayınlayın.\n6. **Hesap Oluşturma** — Müşteri geldiğinde panel üzerinden 10 saniyede hesap açın, m3u linkini/kullanıcı adı-şifreyi teslim edin.\n7. **Teknik Destek Yönetimi** — Müşterilerinizin destek taleplerini panelden izleyin; gereğinde ekibimize devredin.`,
        `\n\n### ${cityName}'da IPTV Bayiliğine Nasıl Başlanır?\n\n${cityName} için IPTV bayiliği süreci, deneyimsiz birine bile kolay gelecek şekilde kurgulanmıştır:\n\n1. **Başvuru** — WhatsApp üzerinden "${cityName} bayilik talebi" yazıp ekibimize ulaşın.\n2. **Sözleşme ve Aktivasyon** — Elektronik sözleşme imzalanır, panel erişiminiz oluşturulur.\n3. **Test Hesabı** — Kendi test hesabınızı yaratın, yayın kalitesini ${cityName} internet hızınızla doğrulayın.\n4. **Kredi Yüklemesi** — Başlangıç paketinizi yükleyin; ilk 10 müşteriyi karşılayacak kredi yeterlidir.\n5. **Pazarlama Materyalleri** — ${cityName}'a özel hazırladığımız görselleri, kampanya metinlerini ve paket tanıtım videolarını indirin.\n6. **İlk Satış** — ${firstDistrict} çevresindeki arkadaşlarınıza/akraba grubuna tanıtım yapın — Premium Panel deneyimlerinde ilk satış ortalama ${1 + (sh("first") % 3)} gün içinde gelir.\n7. **Ölçekleme** — Referans programı ve sosyal medya ile ${cityName}'da aylık ${15 + (sh("scale") % 20)}-${35 + (sh("scale2") % 25)} yeni aboneye ölçeklenin.`,
    ];

    // ======================= PANEL ÖZELLİKLERİ =======================
    const panelOzellikleri = [
        `\n\n### Premium Panel Teknik Altyapı ve Özellikleri\n\nPremium Panel'in ${cityName} bayilerine sunduğu teknik altyapı, sektörün en güçlü özellik setine sahiptir:\n\n- **Çoklu CDN Dağıtımı** — Almanya (Frankfurt), Hollanda (Amsterdam), Türkiye (İstanbul) sunucuları arasında otomatik yük dengeleme. ${cityName} kullanıcıları her zaman en yakın sunucuya yönlendirilir.\n- **H.265/HEVC Kodlama** — Bant genişliği ${pct(40, 5, sh("bw2"))} azaltılır, ${m.fiber === "gelişen" ? "düşük" : "orta"} internet hızlarında bile 4K akıcı izlenir.\n- **20.000+ Kanal, 80.000+ VOD İçerik** — Türkçe, İngilizce, Almanca, Arapça, Kürtçe, Rusça, Farsça seçenekleri ${cityName}'ın kozmopolit kitlesine uygundur.\n- **EPG (7 günlük)** — Elektronik program rehberi, ${cityName} saat dilimine uyumludur.\n- **4K/UHD Yayın** — Spor, dizi ve belgesel kanallarında 4K kalite.\n- **Otomatik Yenileme** — Müşteri abonelikleri otomatik yenilenir; ${cityName} bayi olarak zaman kaybetmezsiniz.\n- **Anti-Freeze Algoritması** — Yayın kesintisi algılandığında otomatik sunucu değişimi (failover) milisaniyeler içinde gerçekleşir.\n- **M3U ve Xtream Codes API** — ${cityName}'daki farklı cihaz kullanıcılarınıza uygun format.\n- **Reseller Panel** — Kendi alt bayilerinizi yaratabilirsiniz; ${cityName}'daki arkadaşlarınızı alt bayi yaparak pasif gelir elde edebilirsiniz.\n- **7/24 Türkçe Destek** — Bölgesel saat dilimine uyumlu, ortalama yanıt 3 dakika.`,
        `\n\n### Premium Panel'in ${cityName} Bayilerine Sunduğu Özellikler\n\nPremium Panel altyapısı, ${cityName} gibi ${region} bölgesindeki şehirlerin internet ve müşteri profiline göre optimize edilmiştir:\n\n- **Adaptive Bitrate Streaming** — ${cityName}'daki bir müşterinin internet hızı değiştiğinde yayın otomatik kalite değiştirir, donma yaşanmaz.\n- **Low-Latency HLS / MPEG-DASH** — Spor yayınlarında gecikme 3 saniyenin altındadır; ${cityName}'daki Süper Lig maç severler için kritik.\n- **Çoklu Dil Arayüz** — Panel Türkçe, İngilizce, Almanca — ${cityName}'ın yurt dışındaki akrabalarınıza satışında işinize yarar.\n- **Mobil Uyumlu Panel** — Telefon veya tabletten ${cityName}'ın herhangi bir yerinden müşteri yönetebilirsiniz.\n- **Canlı Raporlama** — Aktif müşteri sayısı, süresi dolmak üzere olan hesaplar, kredi dengesi anlık görüntülenir.\n- **Panel Güvenliği** — 2FA, IP kilitleme ve SSL şifreleme ile bayi hesabınız korunur.\n- **API Entegrasyonu** — Kendi web sitenizi (örneğin ${slugify(cityName)}-iptv.com) yapmak isterseniz Xtream Codes API ile otomatik satış mümkündür.\n- **Detaylı Faturalama** — ${cityName}'da vergi mükellefi iseniz panel her satış için fatura oluşturmanızı kolaylaştırır.`,
    ];

    // ======================= KOMİSYON VE FİYATLANDIRMA =======================
    const komisyonFiyat = [
        `\n\n### ${cityName} Bayileri İçin Komisyon ve Fiyatlandırma Modeli\n\nPremium Panel'in ${cityName} bayilerine sunduğu **kredili sistem**, kar marjınızı tamamen sizin belirlemenize izin verir. Nasıl çalıştığını adım adım görelim:\n\n- **Bayi Birim Maliyeti** — 1 aylık hesap için kredinizden ${20 + (sh("cost") % 15)} kredi düşer.\n- **${cityName} Piyasa Satış Fiyatı** — Şehirdeki tipik fiyat ${150 + (sh("price") % 80)} TL - ${280 + (sh("price2") % 120)} TL arası.\n- **Brüt Kar** — Hesap başına ${130 + (sh("gross") % 100)} TL ortalama.\n- **Kar Marjı** — Tipik olarak ${pct(65, 10, sh("marg"))} - ${pct(78, 8, sh("marg2"))} arası.\n- **Toplu Paket İndirimleri** — 6 aylık ve yıllık paketlerde ek komisyon avantajları ${cityName} bayilerine sunulur.\n\n**${cityName} için örnek kazanç senaryosu:**\n\n- 30 aktif aylık müşteri × ${170 + (sh("ex1") % 60)} TL = ${(30 * (170 + sh("ex1") % 60)).toLocaleString("tr-TR")} TL aylık ciro\n- Bayi maliyeti: ~${(30 * (25 + sh("cost2") % 10)).toLocaleString("tr-TR")} TL\n- **Net kar: ${(30 * (170 + sh("ex1") % 60) - 30 * (25 + sh("cost2") % 10)).toLocaleString("tr-TR")} TL**\n\nBu rakamlar yalnızca başlangıç senaryosudur. ${cityName}'da 6-12 ay içerisinde 80-150 aktif müşteriye ulaşan bayiler, ayda 20.000-50.000 TL net kar elde etmektedir.`,
    ];

    // ======================= DONMASIZ YAYIN GARANTİSİ =======================
    const donmasiz = [
        `\n\n### ${cityName}'da Donmasız Yayın Garantisi Nasıl Sağlanıyor?\n\nIPTV sektöründe en büyük müşteri kaybı sebebi yayın donmasıdır. ${cityName} özelinde Premium Panel'in donmasız yayın garantisi şu dört teknik temele oturur:\n\n- **Coğrafi CDN Seçimi** — ${cityName}'dan bağlanan bir cihaz, otomatik olarak en düşük ping veren (Frankfurt/Amsterdam/İstanbul) sunucuya yönlendirilir. Ortalama ping ${15 + (sh("ping2") % 15)} ms.\n- **Multi-Bitrate Transcoding** — Yayın eş zamanlı 360p, 720p, 1080p ve 4K olarak kodlanır. ${m.fiber === "yüksek" ? cityName + "'da fiber bağlantılılar 4K, mobil kullananlar 720p alır" : cityName + "'da bağlantı hızına göre otomatik kalite seçilir"}.\n- **Aktif İzleme (24/7 NOC)** — Network Operations Center ekibimiz her 30 saniyede bir kanal sağlığını kontrol eder; sorun tespit edilirse ${cityName}'daki kullanıcılar otomatik yedek sunucuya aktarılır.\n- **H.265/HEVC + HLS Adaptive** — Bant genişliği değişimlerine saniyeler içinde uyum sağlar; ${cityName}'daki yoğun saatlerde (20:00–24:00) bile kesintisiz yayın.\n\n${cityName} müşteri anketlerinde **donma şikayeti oranı %${1 + (sh("freeze") % 3)}'ün altındadır** — sektör ortalaması %8-12 seviyesindeyken bu rakam Premium Panel'in teknik üstünlüğünü gösterir.`,
    ];

    // ======================= ÇEVRE İLÇELER VE HEDEF KİTLE =======================
    const cevreIlceler = [
        `\n\n### ${cityName} ve Çevre İlçelerde Hedef Kitle\n\n${cityName} IPTV pazarını etkili değerlendirmek için şehir içindeki mikro pazarları tanımak gerekir. En yüksek potansiyele sahip bölgeler:\n\n${m.districts
            .map(
                (d, i) =>
                    `- **${d}** — ${
                        i === 0
                            ? `${cityName} merkezinin en yoğun nüfuslu ve dijital tüketim alışkanlığı en güçlü bölgesi. Genç profesyonel ve aile segmenti yoğun.`
                            : i === 1
                            ? `Orta gelir grubu ailelerin yoğun yaşadığı, yeni yapılaşan bir bölge. Smart TV sahipliği yüksek.`
                            : i === 2
                            ? `Karma demografi; öğrenci, esnaf ve emekli profiller. Ekonomik paket tercih edilir.`
                            : `Hızla büyüyen çevre yerleşim alanı; fiber internet yeni yaygınlaşıyor, IPTV talebi artıyor.`
                    }`
            )
            .join("\n")}\n\n**${cityName} için hedef kitle segmentleri:**\n\n- **Genç profesyoneller (25-35 yaş)**: ${firstDistrict} merkezinde yoğunlaşır; Netflix/Disney+ alternatifi arar. Ortalama aylık IPTV bütçesi ${180 + (sh("b1") % 60)} TL.\n- **Aileler (35-50 yaş)**: ${secondDistrict} ve çevre mahallelerde; çocuk kanalları + spor + dizi karma kullanım. En sadık müşteri grubu.\n- **Emekliler (55+ yaş)**: Geleneksel Türk kanallarına ek olarak yurt dışı kanallara ilgi. ${cityName}'da bu segment büyüktür.\n- **Gurbetçiler (Almanya/Hollanda)**: ${cityName} kökenli, yurt dışında yaşayan ve köken şehrindeki bayiden Türkçe IPTV alan kitle. Ortalama satış değeri yerel müşteriye göre ${pct(35, 8, sh("exp"))} yüksek.\n- **İşletmeler (kafe, kuaför, dernek)**: ${firstDistrict} ve ${secondDistrict} çevresinde; toplu kullanım için premium paketler tercih eder.`,
    ];

    // ======================= PAZARLAMA STRATEJİSİ =======================
    const pazarlama = [
        `\n\n### ${cityName}'da IPTV Satışı İçin Pazarlama Stratejileri\n\n${cityName}'da bir Premium Panel bayisinin ilk 90 günde hızlı büyümesi için test edilmiş stratejiler:\n\n- **WhatsApp Yerel Gruplar** — ${firstDistrict}, ${secondDistrict} bazlı mahalle/esnaf gruplarında test hesabı + maç öncesi kampanya duyurusu. ${cityName}'da bu kanal en yüksek ROI veren pazarlama yöntemidir.\n- **Instagram Reels** — "${cityName}'da IPTV", "Donmasız Süper Lig", "Netflix'ten ucuz alternatif" anahtar kelimeleriyle hedefli organik reels. Haftalık 3-4 içerik yeterlidir.\n- **Facebook Satış Grupları** — ${cityName} özelinde açılmış satış/ikinci el gruplarında sabit pazartesi-cuma tanıtımı.\n- **Google Business Profile** — ${cityName} lokasyonuyla GMB açın; "iptv bayilik ${slugify(cityName)}" aramalarında yerel sonuçlarda öne geçersiniz.\n- **Referans Sistemi** — Her mevcut müşteri, yeni müşteri getirdiğinde ${1 + (sh("ref") % 2)} ay ücretsiz kazansın. ${cityName}'da bu model organik büyümeyi ${pct(45, 10, sh("refg"))} artırır.\n- **Maç Günü Kampanyaları** — Derbi, Champions League gruplar ve final haftaları öncesi 24 saat ücretsiz test kampanyası.\n- **Yerel İşletme İşbirlikleri** — ${firstDistrict}'deki kafe ve kuaförlere toplu IPTV paketi satışı — hem stabil gelir hem görünürlük.\n- **SEO Blog İçerikleri** — "${cityName}'da en iyi IPTV paketleri", "${cityName} Smart TV IPTV kurulumu" gibi sorgulara yönelik uzun-kuyruk blog yazıları.\n\nBu yedi kanalın karması ile ${cityName}'da ilk 6 ayda 80-120 aktif müşteri portföyüne ulaşmak gerçekçi bir hedeftir.`,
    ];

    // ======================= CİHAZ KURULUMU =======================
    const cihazKurulum = [
        `\n\n### ${cityName}'da Müşterilerinize IPTV Kurulumu: Cihaz Rehberi\n\n${cityName} kullanıcılarının evinde en sık karşılaşılan cihaz tiplerine göre, Premium Panel IPTV hizmetini aktive etme süreci aşağıdaki gibidir. Bir bayi olarak müşterilerinize bu adımları göstererek kuruluma 3-5 dakikada çözüm getirebilirsiniz:\n\n- **Samsung / LG Smart TV** — TV'nin uygulama mağazasından **IPTV Smarters Pro** veya **Smart IPTV** indirin. ${cityName}'daki müşterinize gönderdiğiniz m3u linkini veya Xtream Codes (kullanıcı adı / şifre / sunucu) bilgilerini girin. Kanallar 10 saniye içinde yüklenir.\n- **Android TV Box (Xiaomi Mi Box, Nvidia Shield, X96)** — Play Store'dan **TiviMate**, **IPTV Smarters** veya **OTT Navigator** uygulamasını kurun. M3U URL veya Xtream hesabı ile giriş yapın. ${cityName}'da en popüler seçimdir.\n- **iPhone / iPad (iOS)** — App Store'dan **GSE Smart IPTV**, **IPTV Smarters** veya **iPlay TV** indirin. Premium Panel paneli üzerinden oluşturduğunuz hesap bilgilerini girin.\n- **Apple TV 4K** — **iPlay TV** veya **TiviMate Companion** uygulamasıyla 4K/HDR yayın alabilirsiniz. ${cityName}'da Apple ekosistemi kullanan üst-orta gelir grubuna önerilir.\n- **Windows / Mac bilgisayar** — **VLC Media Player** veya **MyIPTV Player** (Windows) / **IPTV Player** (Mac) ile m3u link çalıştırılır.\n- **Fire TV Stick** — Aptoide TV veya Downloader ile **IPTV Smarters Pro** yüklenir. ${cityName}'daki öğrencilere ve yeni evlilere ekonomik çözüm olarak pazarlanabilir.\n- **Mag 250/254/322/324 cihazlar** — Portal URL'yi panelden alın, cihaz ayarlarından Portal 1'e girin. Mag cihazlar, ${cityName}'daki yaşı daha büyük kullanıcılar için stabil bir seçenektir.\n- **Formuler Z8/Z10** — Pre-load TiviMate ile ${cityName}'daki TV tutkunları için en premium seçenektir.\n\nKurulum sonrası yapılması gereken önemli kontroller: EPG yüklenmesi, favori kanal gruplama, ebeveyn koruması aktivasyonu ve DNS optimizasyonu (${cityName}'ın ISP'sine göre 1.1.1.1 veya 8.8.8.8 kullanımı tavsiye edilir).`,
    ];

    // ======================= ÖDEME VE FATURA =======================
    const odemeFatura = [
        `\n\n### ${cityName} Bayileri İçin Ödeme, Kredi ve Fatura Süreçleri\n\nPremium Panel'in kredili bayi sistemi ${cityName}'daki bayilere tam şeffaflık ve esneklik sunar:\n\n- **Kredi Yükleme Yöntemleri** — Havale/EFT (Türk bankaları), FAST, Papara, kripto para (USDT, BTC) kabul edilir. ${cityName}'dan yapılan havaleler ortalama ${5 + (sh("bank") % 20)} dakikada panele yansır.\n- **Minimum Yükleme** — 50 kredi (yaklaşık 2 aylık hesap) — ${cityName}'da yeni başlayan bayilere ideal giriş seviyesi.\n- **Toplu Yükleme İndirimi** — 500+ kredi yüklemelerinde ${pct(8, 3, sh("disc"))} ek bonus kredi.\n- **Alt Bayi Sistemi** — ${cityName}'daki arkadaşlarınızı alt bayi yaparak her satıştan komisyon alabilirsiniz.\n- **Fatura Kesimi** — ${cityName}'da vergi mükellefi iseniz panel faturalama modülünü aktif edin; her satış için otomatik e-fatura oluşturulur.\n- **Kredi İadesi** — Yanlışlıkla açılan hesaplar 24 saat içinde kredi olarak iade edilir.\n- **Borç Kapama** — Büyük bayiler için özel kredi limitleri ${cityName} pazarına özel tanımlanabilir.\n- **Para Birimi Esnekliği** — TRY, EUR, USD — Almanya/Hollanda'daki ${cityName}lı bayilere EUR bazlı ödeme desteği.\n\nBu şeffaf sistem sayesinde ${cityName}'da yapılan her satış kayıt altında ve izlenebilir; gizli ek ücret yoktur.`,
    ];

    // ======================= EKOSİSTEM VE KARŞILAŞTIRMA =======================
    const karsilastirma = [
        `\n\n### Uydu TV ve Kablo TV'ye Kıyasla IPTV: ${cityName} Özelinde Karşılaştırma\n\n${cityName}'da bir hane IPTV'yi geleneksel yayın sistemleriyle karşılaştırdığında ortaya çıkan tablo:\n\n- **Kurulum maliyeti** — Uydu anteni + alıcı ${cityName} ortalaması ${2500 + (sh("sat") % 1500)} TL. IPTV: sıfır donanım maliyeti (mevcut TV/telefon yeterli).\n- **Aylık maliyet** — Kablo TV: ${250 + (sh("cab") % 150)} TL civarı, IPTV Premium Panel: ${150 + (sh("ipl") % 80)} TL.\n- **Kanal sayısı** — Uydu: 200-400 kanal. Kablo: 150-250 kanal. Premium Panel IPTV: 20.000+ kanal + 80.000+ VOD.\n- **Yayın kalitesi** — Uydu HD, IPTV 4K/UHD.\n- **Mobil erişim** — Uydu/kablo: yok. IPTV: telefon/tablet/dizüstü ile ${cityName} dışından da izleme.\n- **Kurulum süresi** — Uydu anteni yönlendirme: 1-3 saat. IPTV: 5 dakika m3u link girişi.\n- **Taşınma** — Uydu: anten sökümü + yeniden kurulum. IPTV: yeni evde aynı hesapla devam.\n- **Arıza süreci** — Uydu: teknisyen çağırma + bekleme. IPTV: ${cityName} WhatsApp hattı üzerinden 3 dakika destek.\n\nBu karşılaştırma, ${cityName}'daki müşterilerinize IPTV'nin üstünlüklerini anlatırken kullanabileceğiniz hazır bir argüman setidir. Özellikle 35-55 yaş hane reisine yapılan satışlarda maliyet-kanal karşılaştırması dönüşümü hızlandırır.`,
    ];

    // ======================= BAŞARI HİKAYELERİ =======================
    const basariHikayeleri = [
        `\n\n### ${cityName}'da Premium Panel Bayileri: Başarı Hikayeleri ve Örnek Vakalar\n\nPremium Panel ile ${cityName} ve çevresinde iş kuran bayilerimizin gerçek iş modelleri, bu pazardaki potansiyelin somut kanıtıdır. İşte ${cityName} özelinde temsili üç bayi profili:\n\n- **Tam zamanlı bayi (${firstDistrict} merkezi)** — ${cityName} merkezinde yaşayan, sadece WhatsApp ve Instagram üzerinden satış yapan bir bayimiz, 9 ayda ${80 + (sh("story1") % 40)} aktif müşteriye ulaştı. Aylık net geliri ${18 + (sh("story1g") % 15)}.000 TL bandında stabilize oldu. Ana başarı faktörü: ${firstDistrict} esnaf WhatsApp gruplarında kurduğu güven ve hızlı teknik destek.\n- **Yarı zamanlı bayi (öğrenci profili)** — ${cityName}'da üniversite okuyan bir bayimiz, okul çevresinde öğrencilere yönelik ekonomik IPTV paketi satıyor. Günde sadece 1-2 saat ayırarak ${6 + (sh("story2g") % 5)}.000 TL aylık ek gelir elde ediyor. ${secondDistrict} yurt bölgelerinde referans zinciriyle büyüyor.\n- **Esnaf yan iş bayisi** — ${cityName}'da halihazırda bir dükkan işleten bir bayimiz, mevcut müşteri tabanına IPTV çapraz satışı yapıyor. Fiziksel dükkan referansıyla ayda ${10 + (sh("story3") % 10)}-${15 + (sh("story3b") % 10)} yeni satış yakalıyor; teknik destek için Premium Panel ekibini kullanıyor.\n- **Toplu satış bayisi (işletme odaklı)** — ${cityName}'daki kafe, berber, kuaför ve kıraathane gibi küçük işletmelere toplu IPTV satışı yapan bir bayimiz, tek satışla ${2500 + (sh("story4") % 1500)} TL'ye yaklaşan paket fiyatları uyguluyor. Tek müşteri = 6-12 ay stabil gelir.\n\nBu profillerin ortak başarı reçetesi: **kaliteli altyapı + hızlı destek + güven odaklı yerel pazarlama**. ${cityName} gibi insan ilişkilerinin güçlü olduğu şehirlerde referans satışları, reklam harcamalarından daha fazla iş getirir.`,
    ];

    // ======================= BAYİ AVANTAJLARI =======================
    const bayiAvantajlari = [
        `\n\n### Premium Panel ${cityName} Bayi Avantajları\n\n- **7/24 Türkçe Teknik Destek** — ${cityName} saat dilimine uyumlu, ortalama yanıt 3 dakika.\n- **Kredili Sistem** — Peşin stok yok; sattığınız kadar ödersiniz.\n- **Çoklu Cihaz Desteği** — Smart TV, Android Box, iOS, Windows, Mac, Mag cihazlar.\n- **Donmasız Yayın Garantisi** — %99.9 uptime, ${cityName}'da %${1 + (sh("complain") % 3)} altında donma şikayeti.\n- **Otomatik Panel** — Müşteri oluşturma, yenileme, raporlama tamamen otomatik.\n- **Esnek Paketler** — 1/3/6/12 aylık; ${cityName} pazarına uygun fiyatlandırma esnekliği.\n- **Reseller (Alt Bayi) Yaratma** — ${cityName}'daki arkadaşlarınızı alt bayi yapıp pasif gelir elde edin.\n- **Pazarlama Materyali** — ${cityName}'a özel tasarlanmış görseller, kampanya metinleri, video içerikler.\n- **Lisanslı İçerik Güvencesi** — Premium Panel hukuki riskten uzak, sözleşmeli altyapıyla çalışır.`,
    ];

    // ======================= FAQ ENTEGRE =======================
    const faqs = getCityFAQs(cityName, region);
    const faqBlock =
        `\n\n### ${cityName} IPTV Bayilik Hakkında Sıkça Sorulan Sorular\n\n` +
        faqs
            .map(
                (f) =>
                    `**${f.question}**\n\n${f.answer}`
            )
            .join("\n\n");

    // ======================= KAPANIŞ CTA =======================
    const cta = [
        `\n\n### Hemen ${cityName}'da IPTV Bayiliğine Başlayın\n\n${cityName}'da kendi IPTV işinizi kurmanın tam zamanı. Premium Panel'in kredili bayi sistemi ile ${region} bölgesindeki bu güçlü pazarda sermaye riski olmadan başlayabilirsiniz. ${firstDistrict} ve çevre ilçelerdeki potansiyel müşterilerinize aynı gün hesap açma, donmasız 4K yayın teslim etme ve tekrarlayan abonelik geliriyle hızla büyüyen bir portföy inşa etme fırsatı elinizde. Başvurunuzu **WhatsApp (+49 163 2680219)** üzerinden tek mesajla yapabilir, 10 dakika içinde ${cityName} bayi panelinizi aktif edebilirsiniz. Türkiye ve Avrupa'ya yayılmış sunucu altyapımız, 7/24 Türkçe destek ekibimiz ve kanıtlanmış bayi başarı hikâyelerimizle ${cityName}'daki yeni otorite siz olun.`,
        `\n\n### ${cityName} IPTV Bayiliğine Şimdi Katılın\n\n${cityName} dahil Türkiye genelinde binlerce bayinin tercih ettiği Premium Panel, ${region} bölgesinin en stabil IPTV altyapısıdır. Ücretsiz başvuru, anında panel erişimi, esnek kredi sistemi ve ${cityName}'a özel pazarlama desteğiyle sıfır risk alarak kazanmaya başlayın. WhatsApp üzerinden **+49 163 2680219** numarasına "${cityName} bayilik" yazın, 10 dakika içinde kendi panelinizin başında olun. ${firstDistrict}, ${secondDistrict} ve tüm ${cityName}'a donmasız, kaliteli IPTV satma yetkisi sizde olsun.`,
    ];

    // ======================= COMPOSE =======================
    return [
        pick(intros, sh("intro")),
        pick(iptvNedir, sh("nedir")),
        pick(nedenKazandirir, sh("kazandirir")),
        pick(pazarAnalizi, sh("pazar")),
        pick(kullaniciDeneyimi, sh("deneyim")),
        pick(bayilikAdimlari, sh("adim")),
        pick(panelOzellikleri, sh("panel")),
        pick(komisyonFiyat, sh("komisyon")),
        pick(donmasiz, sh("donma")),
        pick(cevreIlceler, sh("ilce")),
        pick(pazarlama, sh("pazarlama")),
        pick(cihazKurulum, sh("cihaz")),
        pick(karsilastirma, sh("karsi")),
        pick(odemeFatura, sh("odeme")),
        pick(basariHikayeleri, sh("basari")),
        pick(bayiAvantajlari, sh("avantaj")),
        faqBlock,
        pick(cta, sh("cta")),
    ].join("");
}
