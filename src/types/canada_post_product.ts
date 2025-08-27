export const CanadaPostProducts = [
    'DOM.EP',
    'DOM.XP',
    'DOM.PC',
    'DOM.RP'
] as const;

export type CanadaPostProduct = typeof CanadaPostProducts[number];
