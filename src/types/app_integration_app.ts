export const AppIntegrationApps = [
    // Shipping
    'canada-post',

    // CC Payment Processors
    'elavon',
    'stripe',
    'chase',

    // Payment Aggregators
    'paypal'
] as const;

export type AppIntegrationApp = typeof AppIntegrationApps[number];
