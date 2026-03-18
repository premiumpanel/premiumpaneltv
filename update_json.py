import json
import os

locales = {
  "tr": {
    "features": {
      "badge": "ÖZELLİKLER",
      "title1": "İşinizi büyütmek için",
      "title2": "ihtiyacınız olan her şey",
      "subtitle": "Sadece satışa odaklanın, teknik detayları ve altyapıyı bize bırakın."
    },
    "feature_page": {
      "title": "Rakipsiz Özellikler",
      "subtitle": "Sadece bir panel değil, işinizi yönetmeniz için eksiksiz bir ekosistem sunuyoruz.",
      "device_badge": "Geniş Cihaz Desteği",
      "device_title": "Her Cihazda Kesintisiz Deneyim",
      "device_sub": "IPTV servisimiz, kullandığınız tüm teknolojik cihazlarla tam uyumlu çalışacak şekilde optimize edilmiştir.",
      "infra_title": "Güçlü Altyapı, Kesintisiz Hizmet",
      "infra_item1": "Gelişmiş DDoS ve Firewall Koruması",
      "infra_item2": "10 Gbps Port Hızı ve Yük Dengeleme",
      "infra_item3": "Avrupa ve Amerika Lokasyonlu Sunucular"
    }
  },
  "en": {
    "features": {
      "badge": "FEATURES",
      "title1": "Everything you need",
      "title2": "to grow your business",
      "subtitle": "Focus purely on sales, leave the technical details and infrastructure to us."
    },
    "feature_page": {
      "title": "Unrivaled Features",
      "subtitle": "We offer not just a panel, but a complete ecosystem to manage your business.",
      "device_badge": "Wide Device Support",
      "device_title": "Seamless Experience on Every Device",
      "device_sub": "Our IPTV service is optimized to work seamlessly with all your technological devices.",
      "infra_title": "Strong Infrastructure, Uninterrupted Service",
      "infra_item1": "Advanced DDoS and Firewall Protection",
      "infra_item2": "10 Gbps Port Speed and Load Balancing",
      "infra_item3": "Servers Located in Europe and America"
    }
  },
  "de": {
    "features": {
      "badge": "EIGENSCHAFTEN",
      "title1": "Alles was Sie brauchen,",
      "title2": "um Ihr Geschäft auszubauen",
      "subtitle": "Konzentrieren Sie sich nur auf den Verkauf, überlassen Sie uns die technischen Details und die Infrastruktur."
    },
    "feature_page": {
      "title": "Konkurrenzlose Eigenschaften",
      "subtitle": "Wir bieten nicht nur ein Panel, sondern ein komplettes Ökosystem zur Verwaltung.",
      "device_badge": "Umfassende Geräteunterstützung",
      "device_title": "Nahtloses Erlebnis auf jedem Gerät",
      "device_sub": "Unser IPTV-Dienst ist so optimiert, dass er perfekt auf allen Geräten funktioniert.",
      "infra_title": "Starke Infrastruktur, Reibungsloser Service",
      "infra_item1": "Erweiterter DDoS- und Firewall-Schutz",
      "infra_item2": "10 Gbit/s Portgeschwindigkeit & Lastausgleich",
      "infra_item3": "Serverstandorte in Europa und Amerika"
    }
  },
  "fr": {
    "features": {
      "badge": "CARACTÉRISTIQUES",
      "title1": "Tout ce dont vous avez besoin",
      "title2": "pour développer votre entreprise",
      "subtitle": "Concentrez-vous uniquement sur les ventes, laissez-nous les détails techniques et l'infrastructure."
    },
    "feature_page": {
      "title": "Caractéristiques Inégalées",
      "subtitle": "Nous n'offrons pas seulement un panel, mais un écosystème complet.",
      "device_badge": "Large Prise en Charge Matérielle",
      "device_title": "Expérience Fluide sur Chaque Appareil",
      "device_sub": "Notre service IPTV est optimisé pour fonctionner avec tous vos appareils.",
      "infra_title": "Infrastructure Solide, Service Ininterrompu",
      "infra_item1": "Protection Avancée contre les DDoS et Pare-feu",
      "infra_item2": "Vitesse de Port 10 Gbps et Équilibrage de Charge",
      "infra_item3": "Serveurs Basés en Europe et en Amérique"
    }
  },
  "nl": {
    "features": {
      "badge": "KENMERKEN",
      "title1": "Alles wat u nodig heeft",
      "title2": "om uw bedrijf te laten groeien",
      "subtitle": "Richt u puur op verkoop, laat de technische details en infrastructuur aan ons over."
    },
    "feature_page": {
      "title": "Ongeëvenaarde Functies",
      "subtitle": "Wij bieden niet alleen een paneel, maar een compleet ecosysteem om te beheren.",
      "device_badge": "Brede Apparaatondersteuning",
      "device_title": "Naadloze Ervaring op Elk Apparaat",
      "device_sub": "Onze IPTV-service is geoptimaliseerd om perfect te werken op alle apparaten.",
      "infra_title": "Sterke Infrastructuur, Ononderbroken Service",
      "infra_item1": "Geavanceerde DDoS- en Firewallbescherming",
      "infra_item2": "10 Gbps Poortsnelheid en Load Balancing",
      "infra_item3": "Servers in Europa en Amerika"
    }
  }
}

base_dir = r"e:\premium\locales"

for code, data in locales.items():
    file_path = os.path.join(base_dir, f"{code}.json")
    with open(file_path, 'r', encoding='utf-8') as f:
        existing = json.load(f)
    
    # Update features
    existing['features']['badge'] = data['features']['badge']
    existing['features']['title1'] = data['features']['title1']
    existing['features']['title2'] = data['features']['title2']
    existing['features']['subtitle'] = data['features']['subtitle']
    if 'title' in existing['features']:
        del existing['features']['title']
        
    # Add new feature_page namespace
    existing['feature_page'] = data['feature_page']
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

print("Updated all JSONs")
