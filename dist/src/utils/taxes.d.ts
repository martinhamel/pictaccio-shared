import { SaleTaxes } from '../types/sale_taxes';
import { TaxLocality } from '../types/tax_locality';
export declare function calculateTaxes(taxes: SaleTaxes): string;
export declare function getTaxesForLocality(locality: TaxLocality): string[];
export declare function isSaleTax(taxes: any): taxes is TaxLocality;
