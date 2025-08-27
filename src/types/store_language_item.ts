import { Language } from '@pictaccio/shared/src/types/language';

export type StoreLanguageItem = {
    order: number;
    locale: Language;
    primary: boolean;
}
