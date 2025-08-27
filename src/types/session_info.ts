import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { SessionOptions } from '@pictaccio/shared/src/types/session_options';

export type SessionInfo = {
    internalName: string;
    options: SessionOptions;
    crosssellId: string;
    dateExpire: Date;
    datePublish: Date;
    deliveryGroups: number[];
    productCatalogs: number[];
    workflowId: string;
}
