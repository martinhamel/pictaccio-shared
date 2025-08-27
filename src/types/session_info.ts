import { LocalizedString } from '../types/localized_string';
import { SessionOptions } from '../types/session_options';

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
