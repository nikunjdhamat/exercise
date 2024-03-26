import englishTranslations from './en';

export enum AvailableLanguages {
  EN = 'en',
  AR = 'ar',
}
export type TranslationType = typeof englishTranslations;
export type Resources<T> = Record<AvailableLanguages, {translation: T}>;
