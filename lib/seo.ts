const BASE_URL = 'https://www.premiumpaneltv.com';
const LOCALES = ['tr', 'en', 'de', 'fr', 'nl'] as const;

const LOCALE_TO_HREFLANG: Record<string, string> = {
  tr: 'tr',
  en: 'en',
  de: 'de',
  fr: 'fr',
  nl: 'nl',
};

export function getAlternates(locale: string, path: string = '') {
  const languages: Record<string, string> = {};
  for (const loc of LOCALES) {
    languages[LOCALE_TO_HREFLANG[loc]] = `${BASE_URL}/${loc}${path}`;
  }
  languages['x-default'] = `${BASE_URL}/tr${path}`;

  return {
    canonical: `${BASE_URL}/${locale}${path}`,
    languages,
  };
}
