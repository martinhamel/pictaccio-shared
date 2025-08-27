import { SaleTaxes } from '../types/sale_taxes';
import { TaxLocality } from '../types/tax_locality';
import { add, bignumber } from 'mathjs';

export function calculateTaxes(taxes: SaleTaxes): string {
    const taxesForLocality = getTaxesForLocality(taxes.locality);

    return taxesForLocality.reduce((total, tax) => {
        return add(total, bignumber(taxes.canadian[tax]));
    }, bignumber(0)).toString();
}

export function getTaxesForLocality(locality: TaxLocality): string[] {
    switch (locality) {
        case 'ca-qc':
            return ['gst', 'qst'];

        case 'ca-on':
            return ['hst'];

        case 'ca-ab':
            return ['gst'];

        case 'ca-sk':
            return ['gst', 'pst'];

        case 'ca-bc':
            return ['gst', 'pst'];

        case 'ca-mb':
            return ['gst', 'pst'];

        case 'ca-nb':
            return ['hst'];

        case 'ca-nl':
            return ['hst'];

        case 'ca-ns':
            return ['hst'];

        case 'ca-nt':
            return ['gst'];

        case 'ca-nu':
            return ['gst'];

        case 'ca-pe':
            return ['hst'];

        case 'ca-yt':
            return ['gst'];
    }
}

export function isSaleTax(taxes: any): taxes is TaxLocality {
    return taxes && typeof taxes === 'object' && 'locality' in taxes && 'canadian' in taxes;
}
