import { Language } from '@pictaccio/shared/src/types/language';
import { OrderMeta } from '@pictaccio/shared/src/types/order_meta';
import { PhotoSelections } from '@pictaccio/shared/src/types/photo_selections';
import { PhotoSession } from '@pictaccio/shared/src/types/responses/photo_session';
import { Subject } from '@pictaccio/shared/src/types/subject';
import { CartItem } from '@pictaccio/shared/src/types/cart_item';
import { ContactInfo } from '@pictaccio/shared/src/types/contact_info';
import { PhotoVersionCollection } from '@pictaccio/shared/src/types/photo_version_collection';
import { OrderDeliveryOption } from '@pictaccio/shared/src/types/order_delivery_option';
import { SubjectGroup } from '@pictaccio/shared/src/types/subject_group';
import { Transaction } from '@pictaccio/shared/src/types/transaction';

export type OrderDescriptor = {
    cartItems: CartItem[];
    comment?: string;
    contact?: ContactInfo;
    date: Date;
    id: string;
    language: Language;
    meta?: OrderMeta;
    photoVersions?: PhotoVersionCollection;
    photos: PhotoSelections;
    session: PhotoSession;
    deliveryOption?: OrderDeliveryOption;
    subjects: Subject[];
    subjectGroups: SubjectGroup[];
    transaction?: Transaction;
}
