import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';

export type OrderPhotoSelectionItem = {
    image: {
        url: string,
        subjectId?: string,
        subjectCode: string,
        groupId?: string,
        group?: string
    },
    background?: {
        id: string,
        productionIdentifier: string,
        url: string,
        locales: LocalizedString
    }
    basenameUrl: string,
    creation: Date
}

export type OrderPhotoSelection = {
    [key: string]: OrderPhotoSelectionItem;
}
