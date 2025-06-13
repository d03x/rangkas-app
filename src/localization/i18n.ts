import i18n, { type ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import { id, en } from "./translations";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const STORE_LANGUAGE_KEY = "langidinosnei3";
const languageDetectorPlugin = {
  type: "languageDetector" as ModuleType,
  async: true,
  init: () => {},
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
        if (language) {
          return callback(language);
        } else {
          return callback("es");
        }
      });
    } catch (error) {
      console.log("Error reading language", error);
    }
  },
};
const resources = {
  id: {
    translation: id,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    fallbackLng: "id",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
