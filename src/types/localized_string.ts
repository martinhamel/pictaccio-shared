import { Language } from '@pictaccio/shared/src/types/language';

export type LocalizedString = {
    [Property in Language]?: string
}
