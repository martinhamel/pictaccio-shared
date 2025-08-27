export type DatePart = 'full' | 'date' | 'time';
export declare function formatDate(date: Date, part?: DatePart, relative?: boolean, timezone?: string, lang?: string): string;
