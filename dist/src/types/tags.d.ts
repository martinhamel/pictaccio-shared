export type Tag = {
    id?: number;
    scope: TagScope;
    text: string;
};
export declare const TagScopes: readonly ["global", "background", "product"];
export type TagScope = typeof TagScopes[number];
