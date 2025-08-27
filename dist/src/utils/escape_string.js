"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeString = escapeString;
const defaultEscapeStringOptions = {
    escapeSingleQuotes: false,
    escapeDoubleQuotes: false,
    escapeNewLines: false,
    escapeLessThan: true,
    escapeGreaterThan: true
};
function escapeString(str, options = defaultEscapeStringOptions) {
    const { escapeSingleQuotes, escapeDoubleQuotes, escapeNewLines, escapeLessThan, escapeGreaterThan } = options;
    let escapedStr = str;
    if (escapeSingleQuotes) {
        escapedStr = escapedStr.replace(/'/g, '\\\'');
    }
    if (escapeDoubleQuotes) {
        escapedStr = escapedStr.replace(/"/g, '\\"');
    }
    if (escapeNewLines) {
        escapedStr = escapedStr.replace(/\r{0,1}\n/g, '\\n');
    }
    if (escapeLessThan) {
        escapedStr = escapedStr.replace(/</g, '&lt;');
    }
    if (escapeGreaterThan) {
        escapedStr = escapedStr.replace(/>/g, '&gt;');
    }
    return escapedStr.trim();
}
//# sourceMappingURL=escape_string.js.map