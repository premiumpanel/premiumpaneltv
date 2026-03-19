import json
import os

locales = {
    "tr": {
        "faq_page": {
            "badge": "YARDIM MERKEZİ",
            "title1": "Aklınızdaki",
            "title2": "Tüm Sorular"
        }
    },
    "en": {
        "faq_page": {
            "badge": "HELP CENTER",
            "title1": "All Your",
            "title2": "Questions"
        }
    },
    "de": {
        "faq_page": {
            "badge": "HILFEZENTRUM",
            "title1": "Alle Ihre",
            "title2": "Fragen"
        }
    },
    "fr": {
        "faq_page": {
            "badge": "CENTRE D'AIDE",
            "title1": "Toutes Vos",
            "title2": "Questions"
        }
    },
    "nl": {
        "faq_page": {
            "badge": "HELPCENTER",
            "title1": "Al Uw",
            "title2": "Vragen"
        }
    }
}

for lang in locales:
    filepath = f"e:/premium/locales/{lang}.json"
    if os.path.exists(filepath):
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        if "faq_page" not in data:
            data["faq_page"] = {}
        
        for key, val in locales[lang]["faq_page"].items():
            data["faq_page"][key] = val
            
        with open(filepath, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully fixed missing faq_page translations.")
