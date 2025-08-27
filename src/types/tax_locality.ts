export const TaxLocalities = [
    // Canada
    'ca-ab',
    'ca-bc',
    'ca-mb',
    'ca-nb',
    'ca-nl',
    'ca-ns',
    'ca-nt',
    'ca-nu',
    'ca-on',
    'ca-pe',
    'ca-qc',
    'ca-sk',
    'ca-yt'
] as const;

export type TaxLocality = typeof TaxLocalities[number];
