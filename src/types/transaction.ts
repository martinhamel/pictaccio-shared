import { CanadianTaxLocality } from '../types/canadian_tax_locality';
import { SaleTaxes } from '../types/sale_taxes';
import { TransactionInfo } from '../types/transaction_info';

export type Transaction = {
    subtotal: string;
    promo: string;
    shipping: string;
    taxes: SaleTaxes;
    total: string;
    transactions: TransactionInfo[];
}
