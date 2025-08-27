"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDiacritics = removeDiacritics;
function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
//# sourceMappingURL=diacritics.js.map