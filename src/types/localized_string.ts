import { Language } from '../types/language';

export type LocalizedString = {
    [Property in Language]?: string
}
