import { CanadianTaxLocality } from '../types/canadian_tax_locality';
import { TaxLocality } from '../types/tax_locality';

export type SaleTaxes = {
    locality: TaxLocality;
    canadian: CanadianTaxLocality;
}
