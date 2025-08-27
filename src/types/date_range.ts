export const DateRangePresets = [
    'today',
    'yesterday',
    'this-week',
    'last-week',
    'this-month',
    'last-month',
    'this-3-month',
    'last-3-month',
    'this-6-month',
    'last-6-month',
    'this-year',
    'last-year',
    'this-quarter',
    'last-quarter',
    'custom'
] as const;

export type DateRangePreset = typeof DateRangePresets[number];

export type DateRange<T extends string | Date = Date> = {
    preset?: DateRangePreset;
    start?: T;
    end?: T;
}
