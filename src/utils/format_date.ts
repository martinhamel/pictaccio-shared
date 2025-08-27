import { DateTime } from 'luxon';

export type DatePart =
    'full' |
    'date' |
    'time';

export function formatDate(date: Date,
                           part: DatePart = 'full',
                           relative = false,
                           timezone = 'America/Montreal',
                           lang = 'fr'): string {
    let format: string;

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

function utcDate(date: Date): DateTime {
    return DateTime.fromJSDate(date);
}
