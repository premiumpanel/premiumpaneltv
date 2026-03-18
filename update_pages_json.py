import json
import os

new_locales = {
  "tr": {
    "pricing_page": {
      "title": "Bayilik Paketleri",
      "subtitle": "Sürpriz maliyetler yok. Şeffaf fiyatlandırma ve esnek ödeme seçenekleri ile hemen işinizi büyütün.",
      "offer_title": "Özel Bir Teklif mi Arıyorsunuz?",
      "offer_subtitle": "100+ üzeri toplu kredi alımları ve kurumsal işbirlikleri için size özel fiyat teklifi hazırlayabiliriz.",
      "offer_cta": "WhatsApp'tan Teklif Alın"
    },
    "contact_page": {
      "title": "Bizimle İletişime Geçin",
      "subtitle": "Aklınızdaki sorular için 7/24 kesintisiz destek sunuyoruz.",
      "box1_title": "Canlı Destek",
      "box1_desc": "Hızlı çözüm için anında destek hattı.",
      "box2_title": "E-Posta Desteği",
      "box2_desc": "Kurumsal ve detaylı talepler için."
    },
    "faq_page": {
      "title": "Sıkça Sorulan Sorular",
      "subtitle": "Aklınızdaki soruların yanıtları burada. IPTV bayiliği hakkında merak ettiklerinizi inceleyin."
    }
  },
  "en": {
    "pricing_page": {
      "title": "Reseller Packages",
      "subtitle": "No hidden costs. Grow your business instantly with transparent pricing and flexible payment options.",
      "offer_title": "Looking for a Custom Offer?",
      "offer_subtitle": "We can prepare custom quotes for 100+ credit bulk purchases and corporate collaborations.",
      "offer_cta": "Get an Quote on WhatsApp"
    },
    "contact_page": {
      "title": "Contact Us",
      "subtitle": "We offer 24/7 continuous support for any questions.",
      "box1_title": "Live Support",
      "box1_desc": "Instant support line for fast resolutions.",
      "box2_title": "Email Support",
      "box2_desc": "For corporate and detailed requests."
    },
    "faq_page": {
      "title": "Frequently Asked Questions",
      "subtitle": "Answers to your questions are here. Find out everything about our IPTV reseller program."
    }
  },
  "de": {
    "pricing_page": {
      "title": "Reseller-Pakete",
      "subtitle": "Keine versteckten Kosten. Bauen Sie Ihr Geschäft sofort durch transparente Preise aus.",
      "offer_title": "Suchen Sie ein individuelles Angebot?",
      "offer_subtitle": "Wir erstellen Ihnen maßgeschneiderte Angebote für den Kauf von 100+ Credits und Partnerschaften.",
      "offer_cta": "Angebot über WhatsApp"
    },
    "contact_page": {
      "title": "Kontaktieren Sie Uns",
      "subtitle": "Wir bieten rund um die Uhr Support für alle Fragen.",
      "box1_title": "Live-Support",
      "box1_desc": "Sofortige Hilfe für schnelle Lösungen.",
      "box2_title": "E-Mail Support",
      "box2_desc": "Für geschäftliche und detaillierte Anfragen."
    },
    "faq_page": {
      "title": "Häufig Gestellte Fragen",
      "subtitle": "Hier finden Sie Antworten. Erfahren Sie alles über unser IPTV Reseller Programm."
    }
  },
  "fr": {
    "pricing_page": {
      "title": "Forfaits Revendeurs",
      "subtitle": "Aucun coût caché. Développez immédiatement votre entreprise.",
      "offer_title": "Vous cherchez une offre personnalisée?",
      "offer_subtitle": "Nous pouvons préparer une offre sur mesure pour des achats groupés de 100+ crédits.",
      "offer_cta": "Obtenir une offre via WhatsApp"
    },
    "contact_page": {
      "title": "Contactez-nous",
      "subtitle": "Nous offrons un support 24/7 pour toute question.",
      "box1_title": "Support en Direct",
      "box1_desc": "Ligne de support instantanée pour des solutions rapides.",
      "box2_title": "Support par Email",
      "box2_desc": "Pour les demandes d'entreprise et détaillées."
    },
    "faq_page": {
      "title": "Questions Fréquentes",
      "subtitle": "Les réponses à vos questions. Découvrez tout sur notre programme revendeur."
    }
  },
  "nl": {
    "pricing_page": {
      "title": "Reseller Pakketten",
      "subtitle": "Geen verborgen kosten. Laat uw bedrijf direct groeien.",
      "offer_title": "Op zoek naar een offerte op maat?",
      "offer_subtitle": "We kunnen een op maat gemaakte offerte opstellen voor bulkaankopen (100+ credits).",
      "offer_cta": "Krijg offerte via WhatsApp"
    },
    "contact_page": {
      "title": "Neem Contact Op",
      "subtitle": "Wij bieden 24/7 continue ondersteuning.",
      "box1_title": "Live Ondersteuning",
      "box1_desc": "Directe hulplijn voor snelle oplossingen.",
      "box2_title": "E-mail Ondersteuning",
      "box2_desc": "Voor zakelijke en gedetailleerde verzoeken."
    },
    "faq_page": {
      "title": "Veelgestelde Vragen",
      "subtitle": "Vind hier antwoorden. Alles over IPTV resellers."
    }
  }
}

base_dir = r"e:\premium\locales"

for code, data in new_locales.items():
    file_path = os.path.join(base_dir, f"{code}.json")
    with open(file_path, 'r', encoding='utf-8') as f:
        existing = json.load(f)
        
    existing['pricing_page'] = data['pricing_page']
    existing['contact_page'] = data['contact_page']
    existing['faq_page'] = data['faq_page']
    
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

print("Updated inner pages JSONs")
