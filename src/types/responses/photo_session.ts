import { LocalizedString } from '../../types/localized_string';
import { PhotoSessionWorkflow } from '../../types/photo_session_category';
import { SessionOptions } from '../../types/session_options';

export type PhotoSession = {
    id: string;
    workflow: PhotoSessionWorkflow;
    datePublish: Date;
    dateExpire: Date;
    internalName: string;
    options: SessionOptions;
}
