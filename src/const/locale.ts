import { localeOptions } from '@/locales/options';
import { Locales } from '@/locales/resources';

export const DEFAULT_LANG = 'zh-CN';
export const LOBE_LOCALE_COOKIE = 'LOBE_LOCALE';

export const checkLang = (lang: Locales) => {
  return lang === DEFAULT_LANG || !localeOptions.map((o) => o.value).includes(lang);
};
