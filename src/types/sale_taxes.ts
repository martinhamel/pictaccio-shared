import { CanadianTaxLocality } from '@pictaccio/shared/src/types/canadian_tax_locality';
import { TaxLocality } from '@pictaccio/shared/src/types/tax_locality';

export type SaleTaxes = {
    locality: TaxLocality;
    canadian: CanadianTaxLocality;
}
