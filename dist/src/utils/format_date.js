"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
const luxon_1 = require("luxon");
function formatDate(date, part = 'full', relative = false, timezone = 'America/Montreal', lang = 'fr') {
    let format;
    switch (part) {
        case 'full':
            format = 'yyyy-MM-dd HH:mm:ss';
            break;
        case 'date':
            format = 'yyyy-MM-dd';
            break;
        case 'time':
            format = 'HH:mm:ss';
            break;
    }
    return relative
        ? utcDate(date)
            .setZone(timezone)
            .toRelative({
            locale: lang
        })
        : utcDate(date)
            .setZone(timezone)
            .toFormat(format);
}
function utcDate(date) {
    return luxon_1.DateTime.fromJSDate(date);
}
//# sourceMappingURL=format_date.js.map