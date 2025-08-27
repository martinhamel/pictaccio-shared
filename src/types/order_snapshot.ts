import { DeliveryMethod } from '../types/delivery_method';
import { DeliveryMethodOptions } from '../types/delivery_method_options';
import { LocalizedString } from '../types/localized_string';

export type DeliveryOptionSnapshot = {
    id: string;
    internalName: string;
    nameLocale: LocalizedString;
    basePrice: string;
    leadTime: number;
    method: DeliveryMethod;
    options: DeliveryMethodOptions;
}

export type OrderSnapshot = {
    deliveryOption: DeliveryOptionSnapshot;
}
