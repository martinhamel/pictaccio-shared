import { LocalizedString } from '@pictaccio/shared/src/types/localized_string';
import { ProductOptions } from '@pictaccio/shared/src/types/product_options';
import { ProductType } from '@pictaccio/shared/src/types/product_type';

export type Product = {
    id: string;
    internal_name: string;
    name_locale: LocalizedString;
    archived: boolean;
    description_locale: LocalizedString;
    images: { [key: string]: string };
    options: ProductOptions;
    price: number;
    priority: number;
    type: ProductType;
    weight: number;
    created_on: Date;
    modified_on: Date;
}
