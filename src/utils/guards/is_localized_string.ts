import { Languages } from '@pictaccio/shared/src/types/language';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';

export function isLocalizedString(item: any): item is LocalizedString {
    return item !== null && typeof item === 'object' && Languages.every(language => language in item);
}
