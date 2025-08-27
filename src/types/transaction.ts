import { CanadianTaxLocality } from '@pictaccio/shared/src/types/canadian_tax_locality';
import { SaleTaxes } from '@pictaccio/shared/src/types/sale_taxes';
import { TransactionInfo } from '@pictaccio/shared/src/types/transaction_info';

export type Transaction = {
    subtotal: string;
    promo: string;
    shipping: string;
    taxes: SaleTaxes;
    total: string;
    transactions: TransactionInfo[];
}
