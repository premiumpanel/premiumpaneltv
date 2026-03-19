import json
import os

new_locales = {
  "tr": {
    "metadata": {
      "title": "IPTV Bayilik | Kredili Reseller Paneli & Ücretsiz Başlangıç",
      "description": "IPTV bayilik paneli ile kredili sistem üzerinden satış yapın. Başlangıç ücretsiz, 120 kredi ile panelinizi aktif edin. Net maliyetler ve kolay yönetim."
    },
    "hero_stats": {
        "title1": "800+ Aktif Bayi",
        "desc1": "Geniş bayi ağımızla daha fazla müşteriye güvenle ulaşın.",
        "title2": "%99.9 Uptime",
        "desc2": "Kesintisiz yayın kalitesi için %99.9 çalışma süresi taahhüdü.",
        "title3": "7/24 Teknik Destek",
        "desc3": "Her türlü teknik desteğe ve talebe anında uzman müdahalesi."
    },
    "general": {
      "view_details": "DETAYLARI GÖR"
    },
    "how_it_works": {
      "title": "Süreç Nasıl İşliyor?",
      "subtitle": "Giriş ücreti veya aylık taahhüt yok, adım adım şeffaf kredi modeli ile işinizi kurun.",
      "step1_title": "120 Kredi Yükleyin",
      "step1_desc": "Hiçbir kurulum bedeli ödemeden, yalnızca satacağınız ürünün sermayesi olan 120 krediyi satın alarak hesabınızı aktif hale getirin.",
      "step2_title": "Bayi Paneline Giriş Yapın",
      "step2_desc": "Size özel tanımlanan IPTV reseller paneline cihazınızdan erişin. Arayüz üzerinden test hesapları açarak platformu deneyimleyin.",
      "step3_title": "12 Aylık Satış (12 Kredi Düşer)",
      "step3_desc": "Müşterilerinize abonelik açın. Yaptığınız her 1 yıllık (12 ay) satış için bakiyenizden yalnızca 12 kredi eksilir. Kalan kredileriniz silinmez."
    },
    "gallery": {
      "badge": "GALERİ",
      "title": "Gelişmiş Panel Görünümleri",
      "subtitle": "Müşterilerinizi yönetin, kredilerinizi takip edin ve tüm işlemleri kullanıcı dostu arayüz üzerinden saniyeler içinde tamamlayın."
    },
    "pricing_plans": {
      "plan1_name": "Başlangıç Bayi",
      "plan1_desc": "Piyasayı test etmek ve ilk kazancını sağlamak isteyenler için.",
      "plan1_math": "10 Adet 1 Yıllık Satış",
      "plan1_f1": "Ücretsiz Gelişmiş IPTV Paneli",
      "plan1_f2": "Sınırsız Test Hesabı Açma",
      "plan1_f3": "Canlı İstatistik Görünümü",
      "plan1_f4": "Standart Yönetim Desteği",
      "plan1_bonus": "Yeni Başlayanlar İçin İdeal",
      "plan1_cta": "120 Kredi Yükle & Başla",

      "plan2_name": "Pro Reseller",
      "plan2_desc": "Kendi alt bayilerini kurmak ve markalaşmak isteyenler için.",
      "plan2_math": "40 Adet 1 Yıllık Satış Planlanabilir",
      "plan2_f1": "Alt Bayi (Subreseller) Oluşturma",
      "plan2_f2": "Kendi Alan Adınızla Panel Girişi",
      "plan2_f3": "White Label Özelliği",
      "plan2_f4": "7/24 Öncelikli Teknik Destek",
      "plan2_bonus": "Özel Bayi Avantajları",
      "plan2_cta": "Pro Paketi Seç",

      "plan3_name": "Master Toptancı",
      "plan3_desc": "Çok sayıda satış yapan ana toptancılar için.",
      "plan3_math": "100 Adet 1 Yıllık Satış Planlanabilir",
      "plan3_f1": "En Düşük Birim Kredi Maliyeti",
      "plan3_f2": "Öncelikli VIP Teknik Destek",
      "plan3_f3": "Özel API & Marka Entegrasyonu",
      "plan3_f4": "Tam White Label & Özel DNS",
      "plan3_bonus": "VIP Toptancı Ayrıcalıkları",
      "plan3_cta": "Master Bayi Ol"
    }
  },
  "en": {
    "metadata": {
      "title": "IPTV Reseller | Credit Based Reseller Panel & Free Start",
      "description": "Sell via the credit system through the IPTV reseller panel. Activate your panel with 120 credits smoothly and free to start."
    },
    "hero_stats": {
        "title1": "800+ Active Resellers",
        "desc1": "Reach more customers securely with our extensive reseller network.",
        "title2": "99.9% Uptime",
        "desc2": "Commitment to 99.9% uptime for uninterrupted broadcast quality.",
        "title3": "24/7 Tech Support",
        "desc3": "Instant expert intervention for all technical support requests."
    },
    "general": {
      "view_details": "VIEW DETAILS"
    },
    "how_it_works": {
      "title": "How Does It Work?",
      "subtitle": "No entry fees or monthly commitments, build your business with a transparent credit model.",
      "step1_title": "Load 120 Credits",
      "step1_desc": "Activate your account by purchasing only 120 credits as working capital, without any setup fees.",
      "step2_title": "Login to Reseller Panel",
      "step2_desc": "Access your personalized IPTV reseller panel. Experience it by creating test accounts.",
      "step3_title": "12 Month Sale (Costs 12)",
      "step3_desc": "Create subscriptions for your customers. Every 1-year (12-month) sale simply deducts 12 credits."
    },
    "gallery": {
      "badge": "GALLERY",
      "title": "Advanced Panel Views",
      "subtitle": "Manage customers, track credits, and complete all operations within seconds on a user-friendly interface."
    },
    "pricing_plans": {
      "plan1_name": "Starter Reseller",
      "plan1_desc": "For those who want to test the market and make their first earnings.",
      "plan1_math": "10x 1-Year Subscriptions",
      "plan1_f1": "Free Advanced IPTV Panel",
      "plan1_f2": "Unlimited Test Accounts",
      "plan1_f3": "Live Stats View",
      "plan1_f4": "Standard Management Support",
      "plan1_bonus": "Ideal For Beginners",
      "plan1_cta": "Load 120 Credits",

      "plan2_name": "Pro Reseller",
      "plan2_desc": "For those wanting to create subresellers and brand their service.",
      "plan2_math": "Plan up to 40x 1-Year Subs",
      "plan2_f1": "Create Subresellers",
      "plan2_f2": "Panel Access With Your Domain",
      "plan2_f3": "White Label Feature",
      "plan2_f4": "24/7 Priority Tech Support",
      "plan2_bonus": "Special Reseller Advantages",
      "plan2_cta": "Choose Pro Package",

      "plan3_name": "Master Wholesaler",
      "plan3_desc": "For primary wholesalers driving high volume sales.",
      "plan3_math": "Plan up to 100x 1-Year Subs",
      "plan3_f1": "Lowest Credit Cost",
      "plan3_f2": "VIP Priority Tech Support",
      "plan3_f3": "Custom API & Brand Integration",
      "plan3_f4": "Full White Label & Private DNS",
      "plan3_bonus": "VIP Wholesaler Privileges",
      "plan3_cta": "Become a Master"
    }
  },
  "de": {
    "metadata": {
      "title": "IPTV Reseller | Kreditbasiertes Panel & Kostenloser Start",
      "description": "Verkaufen Sie über das IPTV-Reseller-Panel im Kreditsystem. Ohne Startgebühren, ab 120 Credits können Sie loslegen."
    },
    "hero_stats": {
        "title1": "800+ Aktive Reseller",
        "desc1": "Erreichen Sie mehr Kunden sicher mit unserem umfangreichen Händlernetzwerk.",
        "title2": "99,9% Uptime",
        "desc2": "Verpflichtung zu 99,9% Laufzeit für ununterbrochene Broadcast-Qualität.",
        "title3": "24/7 Technischer Support",
        "desc3": "Sofortige Hilfe von Experten bei allen technischen Supportanfragen."
    },
    "general": {
      "view_details": "DETAILS ANSEHEN"
    },
    "how_it_works": {
      "title": "Wie funktioniert es?",
      "subtitle": "Keine Aufnahmegebühren oder monatliche Bindung, Schritt-für-Schritt zum Erfolg.",
      "step1_title": "120 Credits aufladen",
      "step1_desc": "Aktivieren Sie Ihr Konto durch den Kauf von 120 Credits als Betriebskapital ohne Einrichtungsgebühren.",
      "step2_title": "Ins Reseller-Panel einloggen",
      "step2_desc": "Greifen Sie auf das personalisierte Reseller-Panel zu. Erstellen Sie Testkonten und erkunden Sie es.",
      "step3_title": "12 Monate Verkauf (12)",
      "step3_desc": "Eröffnen Sie Abos für Kunden. Ein 1-Jahres-Abo (12 Monate) zieht einfach 12 Credits ab."
    },
    "gallery": {
      "badge": "GALERIE",
      "title": "Fortschrittliche Panel-Ansichten",
      "subtitle": "Verwalten Sie Kunden, verfolgen Sie Credits und führen Sie alle Aktionen in Sekundenschnelle durch."
    },
    "pricing_plans": {
      "plan1_name": "Starter-Reseller",
      "plan1_desc": "Für alle, die den Markt testen und erste Einnahmen erzielen möchten.",
      "plan1_math": "10 x 1-Jahres-Verkauf",
      "plan1_f1": "Kostenloses erweitertes IPTV-Panel",
      "plan1_f2": "Unbegrenzte Testkonten",
      "plan1_f3": "Live-Statistik",
      "plan1_f4": "Standard-Verwaltungsunterstützung",
      "plan1_bonus": "Ideal für Anfänger",
      "plan1_cta": "120 Credits laden",

      "plan2_name": "Pro Reseller",
      "plan2_desc": "Für Benutzer, die Sub-Reseller aufbauen und eigene Marken gründen möchten.",
      "plan2_math": "Bis zu 40x 1-Jahres-Abo möglich",
      "plan2_f1": "Unterhändler erstellen",
      "plan2_f2": "Panel-Zugriff über Ihre Domain",
      "plan2_f3": "White Label Funktionen",
      "plan2_f4": "24/7 Priority-Support",
      "plan2_bonus": "Spezielle Vorteile",
      "plan2_cta": "Pro-Paket wählen",

      "plan3_name": "Master Großhändler",
      "plan3_desc": "Für Hauptgroßhändler mit extrem hohem Verkaufsvolumen.",
      "plan3_math": "Bis zu 100x 1-Jahres-Abo möglich",
      "plan3_f1": "Niedrigste Kreditkosten",
      "plan3_f2": "VIP-Prioritätssupport",
      "plan3_f3": "Benutzerdefinierte API-Integration",
      "plan3_f4": "Volles White Label & DNS",
      "plan3_bonus": "VIP Vorteile",
      "plan3_cta": "Jetzt Master werden"
    }
  },
  "fr": {
    "metadata": {
      "title": "Revendeur IPTV | Panel à Crédits & Démarrage Gratuit",
      "description": "Panel IPTV de revente via système de crédits. Démarrage sans frais d'installation, avec seulement 120 crédits initiaux."
    },
    "hero_stats": {
        "title1": "800+ Revendeurs Actifs",
        "desc1": "Atteignez plus de clients en toute sécurité avec notre vaste réseau.",
        "title2": "Disponibilité de 99,9%",
        "desc2": "Garantie de disponibilité pour une qualité de diffusion ininterrompue.",
        "title3": "Assistance Technique",
        "desc3": "Intervention immédiate d'experts pour toutes vos demandes."
    },
    "general": {
      "view_details": "VOIR LES DÉTAILS"
    },
    "how_it_works": {
      "title": "Comment ça marche?",
      "subtitle": "Pas de frais d'inscription ou d'engagements mensuels, modèle de crédit transparent.",
      "step1_title": "Chargez 120 Crédits",
      "step1_desc": "Activez votre compte en achetant seulement 120 crédits de fonds de roulement sans frais.",
      "step2_title": "Connectez-vous au Panneau",
      "step2_desc": "Connectez-vous à votre panneau IPTV. Testez-le en créant des comptes d'essai.",
      "step3_title": "Vente de 12 Mois (Coûte 12)",
      "step3_desc": "Créez des abonnements. Chaque vente d'un an déduira 12 de vos crédits."
    },
    "gallery": {
      "badge": "GALERIE",
      "title": "Vues Avancées du Panneau",
      "subtitle": "Gérez vos clients, suivez vos crédits et effectuez chaque opération sur une interface conviviale."
    },
    "pricing_plans": {
      "plan1_name": "Revendeur Débutant",
      "plan1_desc": "Pour tester le marché et faire vos premiers gains.",
      "plan1_math": "10 Abonnements d'un An",
      "plan1_f1": "Panneau IPTV Avancé Gratuit",
      "plan1_f2": "Comptes de Test Illimités",
      "plan1_f3": "Statistiques en Direct",
      "plan1_f4": "Assistance Standard",
      "plan1_bonus": "Idéal pour les Débutants",
      "plan1_cta": "Charger 120 Crédits",

      "plan2_name": "Revendeur Pro",
      "plan2_desc": "Pour ceux qui veulent créer des sous-revendeurs et se développer.",
      "plan2_math": "Jusqu'à 40 Abonnements",
      "plan2_f1": "Créer des Sous-Revendeurs",
      "plan2_f2": "Connexion via votre propre domaine",
      "plan2_f3": "Marque Blanche Complète",
      "plan2_f4": "Dépannage 24/7",
      "plan2_bonus": "Avantages Spéciaux",
      "plan2_cta": "Gamme Pro",

      "plan3_name": "Grossiste Master",
      "plan3_desc": "Pour les grossistes générant d'énormes ventes.",
      "plan3_math": "100 Abonnements Flexibles",
      "plan3_f1": "Meilleur Ratio de Coût",
      "plan3_f2": "Assistance Technique VIP",
      "plan3_f3": "Intégration d'API",
      "plan3_f4": "Marque Blanche Intégrale",
      "plan3_bonus": "Privilèges de Grossiste VIP",
      "plan3_cta": "Devenir Master"
    }
  },
  "nl": {
    "metadata": {
      "title": "IPTV Reseller | Credit-gebaseerd Panel & Gratis Start",
      "description": "Start als verkoper met het flexibele creditsysteem! Registreren en aanmelden is helemaal gratis."
    },
    "hero_stats": {
        "title1": "800+ Actieve Resellers",
        "desc1": "Bereik meer klanten veilig met ons uitgebreide resellernetwerk.",
        "title2": "99,9% Uptime",
        "desc2": "Toewijding aan 99,9% uptime voor ononderbroken broadcastkwaliteit.",
        "title3": "24/7 Ondersteuning",
        "desc3": "Onmiddellijke tussenkomst van experts voor technische verzoeken."
    },
    "general": {
      "view_details": "BEKIJK DETAILS"
    },
    "how_it_works": {
      "title": "Hoe werkt het?",
      "subtitle": "Geen startkosten of maandelijkse verplichtingen. Werk volledig op basis van credits.",
      "step1_title": "Laad 120 Credits",
      "step1_desc": "Activeer uw account door 120 credits te kopen, zonder verborgen administratiekosten.",
      "step2_title": "Log in op het Reseller-paneel",
      "step2_desc": "Ga naar uw paneel. Ervaar alles met ongelimiteerde testaccounts.",
      "step3_title": "Verkoop 12 maanden",
      "step3_desc": "Voor elk jaarabonnement van uw klant gaan er enkel exact 12 credits af."
    },
    "gallery": {
      "badge": "GALERIJ",
      "title": "Geavanceerde Paneelweergaven",
      "subtitle": "Beheer klanten, volg credits, en voltooi opdrachten in luttele seconden."
    },
    "pricing_plans": {
      "plan1_name": "Starter Reseller",
      "plan1_desc": "Voor wie de markt wil testen en de eerste euro's wil verdienen.",
      "plan1_math": "Gelijk aan 10 Jaarabonnementen",
      "plan1_f1": "Gratis Paneel Gekregen",
      "plan1_f2": "Onbeperkte Testaccounts",
      "plan1_f3": "Live Statistieken",
      "plan1_f4": "Standaard Support",
      "plan1_bonus": "Ideaal Voor Beginners",
      "plan1_cta": "Laad 120 Credits",

      "plan2_name": "Pro Reseller",
      "plan2_desc": "Start uw eigen sub-netwerk en maak uw merk populair.",
      "plan2_math": "Tot 40 Jaarabonnementen",
      "plan2_f1": "Sub-Resellers Aanmaken",
      "plan2_f2": "Paneeltoegang Met Uw Eigen Domein",
      "plan2_f3": "White Label Functie",
      "plan2_f4": "24/7 Prioritaire Tech Support",
      "plan2_bonus": "Speciale Reseller Voordelen",
      "plan2_cta": "Kies Pakket",

      "plan3_name": "Master Groothandel",
      "plan3_desc": "Voor de echte grote dealers in onze industrie.",
      "plan3_math": "Plan Tot Wel 100 Aankopen",
      "plan3_f1": "Laagste Kosten Per Credit",
      "plan3_f2": "Priority VIP Support",
      "plan3_f3": "Custom API Setup",
      "plan3_f4": "Absolute White Label + VIP",
      "plan3_bonus": "VIP-Groothandel",
      "plan3_cta": "Word Master Dealer"
    }
  }
}

base_dir = r"e:\premium\locales"

for code, data in new_locales.items():
    file_path = os.path.join(base_dir, f"{code}.json")
    with open(file_path, 'r', encoding='utf-8') as f:
        existing = json.load(f)
        
    existing['metadata'] = data['metadata']
    existing['hero_stats'] = data['hero_stats']
    existing['general'] = data['general']
    existing['how_it_works'] = data['how_it_works']
    existing['gallery'] = data['gallery']
    existing['pricing_plans'] = data['pricing_plans']
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

print("Updated deep JSONs")
