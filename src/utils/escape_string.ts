export type EscapeStringOptions = {
    // If true, escape single quotes
    escapeSingleQuotes?: boolean;
    // If true, escape double quotes
    escapeDoubleQuotes?: boolean;
    // If true, escape new lines
    escapeNewLines?: boolean;
    // If true, escape less than signs
    escapeLessThan?: boolean;
    // If true, escape greater than signs
    escapeGreaterThan?: boolean;
}

const defaultEscapeStringOptions: EscapeStringOptions = {
    escapeSingleQuotes: false,
    escapeDoubleQuotes: false,
    escapeNewLines: false,
    escapeLessThan: true,
    escapeGreaterThan: true
}

export function escapeString(str: string, options = defaultEscapeStringOptions): string {
    const { escapeSingleQuotes, escapeDoubleQuotes, escapeNewLines, escapeLessThan, escapeGreaterThan } = options;
    let escapedStr = str;
    if (escapeSingleQuotes) {
        escapedStr = escapedStr.replace(/'/g, '\\\'');
    }
    if (escapeDoubleQuotes) {
        escapedStr = escapedStr.replace(/"/g, '\\"');
    }
    if (escapeNewLines) {
        escapedStr = escapedStr.replace(/\r{0,1}\n/g, '\\n');
    }
    if (escapeLessThan) {
        escapedStr = escapedStr.replace(/</g, '&lt;');
    }
    if (escapeGreaterThan) {
        escapedStr = escapedStr.replace(/>/g, '&gt;');
    }
    return escapedStr.trim();
}
