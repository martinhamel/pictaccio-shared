import { AppIntegrationApp } from '../types/app_integration_app';

type AppIntegrationCategoriesObject = {
    [key in AppIntegrationApp]: AppIntegrationCategory;
};

export type AppIntegrationCategory =
    'cc-payment-processor' |
    'payment-aggregator-processor' |
    'shipping-provider';

export const AppIntegrationCategories: AppIntegrationCategoriesObject = {
    // Shipping Providers
    'canada-post': 'shipping-provider',

    // CC Payment Processors
    'stripe': 'cc-payment-processor',
    'chase': 'cc-payment-processor',
    'elavon': 'cc-payment-processor',

    // Payment Aggregators
    'paypal': 'payment-aggregator-processor'
};
