export const DanglingAssetTypes = [
    'background',
    'product'
] as const;

export type DanglingAssetType = typeof DanglingAssetTypes[number];
