import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslations from "./helpers/es.json";
import enTranslations from "./helpers/en.json";

i18n.use(initReactI18next).init({
    resources: {
        es: { translation: esTranslations },
        en: { translation: enTranslations },
    },
    lng: localStorage.getItem('language') || "es", // idioma inicial
    fallbackLng: "es", // idioma de respaldo si falta una traducción
    interpolation: { escapeValue: false },
});

export default i18n;