import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { PhotoSessionWorkflow } from '@pictaccio/shared/src/types/photo_session_category';
import { SessionOptions } from '@pictaccio/shared/src/types/session_options';

export type PhotoSession = {
    id: string;
    workflow: PhotoSessionWorkflow;
    datePublish: Date;
    dateExpire: Date;
    internalName: string;
    options: SessionOptions;
}
