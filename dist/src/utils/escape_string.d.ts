export type EscapeStringOptions = {
    escapeSingleQuotes?: boolean;
    escapeDoubleQuotes?: boolean;
    escapeNewLines?: boolean;
    escapeLessThan?: boolean;
    escapeGreaterThan?: boolean;
};
export declare function escapeString(str: string, options?: EscapeStringOptions): string;
