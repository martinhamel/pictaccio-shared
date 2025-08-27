const SpreadsheetExportFormats = [
    'csv-normal',
    'csv-excel'
] as const;

export type SpreadsheetExportFormat = typeof SpreadsheetExportFormats[number];
