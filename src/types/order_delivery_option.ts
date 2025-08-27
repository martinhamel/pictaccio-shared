import { DeliveryMethod } from '@pictaccio/shared/src/types/delivery_method';
import { DeliveryMethodOptions } from '@pictaccio/shared/src/types/delivery_method_options';
import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';

export type OrderDeliveryOption = {
    id: string;
    internalName: string;
    nameLocale: LocalizedString;
    basePrice: string;
    leadTime: number;
    method: DeliveryMethod;
    options: DeliveryMethodOptions;
}
