"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToday = getToday;
exports.getYesterday = getYesterday;
exports.getThisWeek = getThisWeek;
exports.getLastWeek = getLastWeek;
exports.getThisMonth = getThisMonth;
exports.getLastMonth = getLastMonth;
exports.getThis3Month = getThis3Month;
exports.getLast3Month = getLast3Month;
exports.getThis6Month = getThis6Month;
exports.getLast6Month = getLast6Month;
exports.getThisYear = getThisYear;
exports.getLastYear = getLastYear;
exports.getThisQuarter = getThisQuarter;
exports.getLastQuarter = getLastQuarter;
exports.resolveDateRange = resolveDateRange;
function getToday() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    };
}
function getYesterday() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59)
    };
}
function getThisWeek() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
    return {
        preset: 'custom',
        start,
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    };
}
function getLastWeek() {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7);
    return {
        preset: 'custom',
        start,
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 1, 23, 59, 59)
    };
}
function getThisMonth() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}
function getLastMonth() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
        end: new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59)
    };
}
function getThis3Month() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 2, 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}
function getLast3Month() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 5, 1),
        end: new Date(now.getFullYear(), now.getMonth() - 2, 0, 23, 59, 59)
    };
}
function getThis6Month() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 5, 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}
function getLast6Month() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 11, 1),
        end: new Date(now.getFullYear(), now.getMonth() - 5, 0, 23, 59, 59)
    };
}
function getThisYear() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), 0, 1),
        end: new Date(now.getFullYear(), 11, 31, 23, 59, 59)
    };
}
function getLastYear() {
    const now = new Date();
    return {
        preset: 'custom',
        start: new Date(now.getFullYear() - 1, 0, 1),
        end: new Date(now.getFullYear() - 1, 11, 31, 23, 59, 59)
    };
}
function getThisQuarter() {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3);
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), quarter * 3, 1),
        end: new Date(now.getFullYear(), quarter * 3 + 3, 0, 23, 59, 59)
    };
}
function getLastQuarter() {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3);
    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), quarter * 3 - 3, 1),
        end: new Date(now.getFullYear(), quarter * 3, 0, 23, 59, 59)
    };
}
function resolveDateRange(dateRange) {
    switch (dateRange.preset) {
        case 'today':
            return getToday();
        case 'yesterday':
            return getYesterday();
        case 'this-week':
            return getThisWeek();
        case 'last-week':
            return getLastWeek();
        case 'this-month':
            return getThisMonth();
        case 'last-month':
            return getLastMonth();
        case 'this-3-month':
            return getThis3Month();
        case 'last-3-month':
            return getLast3Month();
        case 'this-6-month':
            return getThis6Month();
        case 'last-6-month':
            return getLast6Month();
        case 'this-year':
            return getThisYear();
        case 'last-year':
            return getLastYear();
        case 'this-quarter':
            return getThisQuarter();
        case 'last-quarter':
            return getLastQuarter();
        case 'custom':
            return {
                preset: 'custom',
                start: new Date(dateRange.start),
                end: new Date(dateRange.end)
            };
        default:
            throw new Error('Invalid date range preset');
    }
}
//# sourceMappingURL=date.js.map