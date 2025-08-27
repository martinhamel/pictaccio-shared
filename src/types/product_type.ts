export const ProductTypes = [
    'touchup',
    'digital',
    'custom',
    'themed',
    'normal'
] as const;

export type ProductType = typeof ProductTypes[number];
