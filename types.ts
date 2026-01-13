
export type Language = 'en' | 'ur' | 'ar' | 'fr' | 'de' | 'zh' | 'ru';

export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  type: 'zaicha' | 'istikhara' | 'masail';
  price?: string;
}

export interface Product {
  id: string;
  nameKey: string;
  category: 'oil' | 'powder' | 'mix' | 'tea';
  benefitsKey: string;
  price: string;
  image: string;
}

export interface BlogPost {
  id: string;
  titleKey: string;
  excerptKey: string;
  date: string;
  image: string;
}

export interface TranslationSchema {
  [key: string]: {
    [lang in Language]: string;
  };
}
