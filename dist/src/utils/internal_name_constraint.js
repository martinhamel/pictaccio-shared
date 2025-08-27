"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInternalNameCharacters = validateInternalNameCharacters;
function validateInternalNameCharacters(name) {
    return /^[a-z0-9- _]+$/i.test(name);
}
//# sourceMappingURL=internal_name_constraint.js.map