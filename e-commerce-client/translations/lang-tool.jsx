import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import lang_en from "./en/translation.json";
import lang_ru from "./ru/translation.json";
import lang_uz from "./uz/translation.json";

i18next
    .use(initReactI18next)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
            en: {
                translation: lang_en,
            },
            ru: {
                translation: lang_ru,
            },
            uz: {
                translation: lang_uz,
            }
        }
    });

export default i18next;
