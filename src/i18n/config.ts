import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationHE from './locales/he/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  he: {
    translation: translationHE
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si aucune correspondance n'est trouvée
    supportedLngs: ['fr', 'en', 'he'],
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'], // Priorité de détection
      caches: ['localStorage'], // Stockage de la préférence
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    interpolation: {
      escapeValue: false
    }
  });

// Gestion de la direction du texte selon la langue
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'he' ? 'rtl' : 'ltr';
});

export default i18n;
