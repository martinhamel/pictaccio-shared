"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocalizedString = isLocalizedString;
const language_1 = require("../../types/language");
function isLocalizedString(item) {
    return item !== null && typeof item === 'object' && language_1.Languages.every(language => language in item);
}
//# sourceMappingURL=is_localized_string.js.map