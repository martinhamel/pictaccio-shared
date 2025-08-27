export const Operators = [
    '==',
    '!=',
    '>',
    '<',
    '<=',
    '>=',
    '<=>',
    '><',
    '~',
    '~~',
    '~~ IN',
    '~~ NOT IN',
    'IN',
    'NOT IN',
    '!~',
    '!~~',
    '@>'
] as const;

export type Operator = typeof Operators[number];
