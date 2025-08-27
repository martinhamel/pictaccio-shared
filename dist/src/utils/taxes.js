"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxes = calculateTaxes;
exports.getTaxesForLocality = getTaxesForLocality;
exports.isSaleTax = isSaleTax;
const mathjs_1 = require("mathjs");
function calculateTaxes(taxes) {
    const taxesForLocality = getTaxesForLocality(taxes.locality);
    return taxesForLocality.reduce((total, tax) => {
        return (0, mathjs_1.add)(total, (0, mathjs_1.bignumber)(taxes.canadian[tax]));
    }, (0, mathjs_1.bignumber)(0)).toString();
}
function getTaxesForLocality(locality) {
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
function isSaleTax(taxes) {
    return taxes && typeof taxes === 'object' && 'locality' in taxes && 'canadian' in taxes;
}
//# sourceMappingURL=taxes.js.map