import i18n from 'i18next';
import {I18nManager} from 'react-native';
import {AvailableLanguages, Resources, TranslationType} from './types';
import englishTranslations from './en';
import arabicTranslation from './ar';
import {initReactI18next} from 'react-i18next';

const defaultLanguage = AvailableLanguages.EN;

const initialResources: Resources<TranslationType> = {
  en: {translation: englishTranslations},
  ar: {translation: arabicTranslation},
};
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: defaultLanguage,
  debug: false,
  resources: initialResources,
  fallbackLng: defaultLanguage,
});

i18n.languages = Object.values(AvailableLanguages);

const setLanguage = async (newLang: string) => {
  try {
    await i18n.changeLanguage(newLang);
  } catch {}
};

const toggleLanguage = () => {
  if (i18n.language === AvailableLanguages.EN) {
    setLanguage(AvailableLanguages.AR);
  } else {
    setLanguage(AvailableLanguages.EN);
  }
};

const isRTL = I18nManager.isRTL;
const currentLanguage = i18n.language;

export {
  i18n,
  isRTL,
  toggleLanguage,
  AvailableLanguages,
  defaultLanguage,
  currentLanguage,
};
