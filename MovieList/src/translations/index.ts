import i18n from 'i18next';
import {I18nManager, NativeModules, Platform} from 'react-native';
import {AvailableLanguages, Resources, TranslationType} from './types';
import englishTranslations from './en';
import arabicTranslation from './ar';
import {initReactI18next} from 'react-i18next';

const isRTLLanguage = (language: string) => {
  const rtlLanguages = [AvailableLanguages.AR.toString()];
  return rtlLanguages.includes(language);
};

const getDeviceLanguage = () => {
  let systemLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;
  systemLanguage = systemLanguage?.split('_')[0] || AvailableLanguages.EN;
  return systemLanguage;
};

const initialResources: Resources<TranslationType> = {
  en: {translation: englishTranslations},
  ar: {translation: arabicTranslation},
};

const deviceLanguage = getDeviceLanguage();
i18n.use(initReactI18next).init(
  {
    compatibilityJSON: 'v3',
    lng: deviceLanguage,
    debug: false,
    resources: initialResources,
    supportedLngs: Object.values(AvailableLanguages),
    fallbackLng: AvailableLanguages.EN,
  },
  () => {
    if (isRTLLanguage(deviceLanguage) && !I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else if (!isRTLLanguage(deviceLanguage) && I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
  },
);

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

export {i18n, toggleLanguage};
