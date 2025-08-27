export type Tag = {
    id?: number;
    scope: TagScope;
    text: string;
};

export const TagScopes = [
    'global',
    'background',
    'product'
] as const;

export type TagScope = typeof TagScopes[number];
