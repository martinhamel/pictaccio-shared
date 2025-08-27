import { DateRange } from '../types/date_range';

export function getToday(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate()),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    };
}

export function getYesterday(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 23, 59, 59)
    };
}

export function getThisWeek(): DateRange {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());

    return {
        preset: 'custom',
        start,
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
    };
}

export function getLastWeek(): DateRange {
    const now = new Date();
    const start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7);

    return {
        preset: 'custom',
        start,
        end: new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 1, 23, 59, 59)
    };
}

export function getThisMonth(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth(), 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}

export function getLastMonth(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 1, 1),
        end: new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59)
    };
}

export function getThis3Month(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 2, 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}

export function getLast3Month(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 5, 1),
        end: new Date(now.getFullYear(), now.getMonth() - 2, 0, 23, 59, 59)
    };
}

export function getThis6Month(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 5, 1),
        end: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59)
    };
}

export function getLast6Month(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), now.getMonth() - 11, 1),
        end: new Date(now.getFullYear(), now.getMonth() - 5, 0, 23, 59, 59)
    };
}

export function getThisYear(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), 0, 1),
        end: new Date(now.getFullYear(), 11, 31, 23, 59, 59)
    };
}

export function getLastYear(): DateRange {
    const now = new Date();

    return {
        preset: 'custom',
        start: new Date(now.getFullYear() - 1, 0, 1),
        end: new Date(now.getFullYear() - 1, 11, 31, 23, 59, 59)
    };
}

export function getThisQuarter(): DateRange {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3);

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), quarter * 3, 1),
        end: new Date(now.getFullYear(), quarter * 3 + 3, 0, 23, 59, 59)
    };
}

export function getLastQuarter(): DateRange {
    const now = new Date();
    const quarter = Math.floor(now.getMonth() / 3);

    return {
        preset: 'custom',
        start: new Date(now.getFullYear(), quarter * 3 - 3, 1),
        end: new Date(now.getFullYear(), quarter * 3, 0, 23, 59, 59)
    };
}

export function resolveDateRange<T extends Date | string>(dateRange: DateRange<T>): DateRange {
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
