import { CanadianTaxLocality } from '@pictaccio/shared/src/types/canadian_tax_locality';
import { TaxLocality } from '@pictaccio/shared/src/types/tax_locality';

export type StoreContact = {
    addressLine1: string;
    addressLine2: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
    notifyEmail: string;
}

type CanadianTaxIdConfiguration = {
    gstId: string;
    hstId: string;
    pstId: string;
    qstId: string;
}

type ExternalUrls = {
    contact: string;
    root: string;
    termsAndConditions: string;
}

export type TaxConfiguration = {
    locality: TaxLocality;
    canadian: CanadianTaxLocality & CanadianTaxIdConfiguration;
}

export type StoreConfiguration = {
    contact: StoreContact;
    taxes: TaxConfiguration;
    urls: ExternalUrls;
}
