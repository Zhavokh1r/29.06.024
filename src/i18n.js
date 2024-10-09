// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome",
          "description": "This is an example"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue",
          "description": "Ceci est un exemple"
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if the selected language is not available
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
