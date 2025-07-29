import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Shared translations
// @ts-ignore
import enCommon from "./en/common.json";
// @ts-ignore
import faCommon from "./fa/common.json";

// Helper to extend from projects
export const initI18n = (projectResources: any) => {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        common: enCommon,
        ...projectResources.en,
      },
      fa: {
        common: faCommon,
        ...projectResources.fa,
      },
    },
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });

  return i18n;
};
