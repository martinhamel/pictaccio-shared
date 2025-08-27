"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTag = isTag;
const tags_1 = require("../../types/tags");
function isTag(tag) {
    return typeof tag === 'object' &&
        tag !== null &&
        typeof tag.text === 'string' &&
        typeof tag.scope === 'string' &&
        tags_1.TagScopes.includes(tag.scope);
}
//# sourceMappingURL=is_tag.js.map