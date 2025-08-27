import { AppIntegrationApp } from '../types/app_integration_app';
type AppIntegrationCategoriesObject = {
    [key in AppIntegrationApp]: AppIntegrationCategory;
};
export type AppIntegrationCategory = 'cc-payment-processor' | 'payment-aggregator-processor' | 'shipping-provider';
export declare const AppIntegrationCategories: AppIntegrationCategoriesObject;
export {};
