import { Languages } from '../../types/language';
import { LocalizedString } from '../../types/localized_string';

export function isLocalizedString(item: any): item is LocalizedString {
    return item !== null && typeof item === 'object' && Languages.every(language => language in item);
}
