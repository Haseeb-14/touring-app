import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import OnboardingEN from "../localization/EN/onboading.json";
import OnboardingFR from "../localization/FR/onboarding.json"; // Corrected import
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ASYNC_STORAGE_KEYS, LANGUAGE_CODES } from "../utlis/enums";

const { USER_LANGUAGE } = ASYNC_STORAGE_KEYS;

const resources = {
  en: {
    translation: {
      ...OnboardingEN,
    },
  },
  fr: {
    translation: {
      ...OnboardingFR,
    },
  },
};

const initializeI18n = async (): Promise<void> => {
  try {
    // Fetch the stored language value from AsyncStorage
    const storedLanguage = await AsyncStorage.getItem(USER_LANGUAGE);

    // Fallback to device locale if not found in AsyncStorage
    const deviceLanguage: string = RNLocalize.getLocales()[0].languageCode.substring(0, 2); // Extract two-letter language code
    const language: string = storedLanguage ?? (deviceLanguage === "en" || deviceLanguage === "fr" ? deviceLanguage : LANGUAGE_CODES.EN);

    // Initialize i18n with the selected or default language
    await i18n.use(initReactI18next).init({
      compatibilityJSON: "v3",
      resources,
      lng: language,
      fallbackLng: LANGUAGE_CODES.EN, // Fallback to English if language not supported
      interpolation: {
        escapeValue: false, // React already escapes by default
      },
    });

    // Store the language in AsyncStorage if not previously stored
    if (!storedLanguage) {
      await AsyncStorage.setItem(USER_LANGUAGE, language);
    }
  } catch (error) {
    console.error("Failed to initialize i18n:", error);
  }
};

export { initializeI18n };
export default i18n;
