import { AppIntegrationApp } from '../types/app_integration_app';
export type AppIntegrationConfiguration = {
    app: AppIntegrationApp;
    configuration: AppIntegrationConfigurationUnion;
};
export type AppIntegrationConfigurationUnion = AppIntegrationConfigurationCanadaPost | AppIntegrationConfigurationElavon | AppIntegrationConfigurationPaypal | AppIntegrationConfigurationStripe;
export type AppIntegrationConfigurations = {
    [app in AppIntegrationApp]?: AppIntegrationConfigurationUnion;
};
export type AppIntegrationSharedConfiguration = {
    active: boolean;
};
export type AppIntegrationConfigurationCanadaPost = AppIntegrationSharedConfiguration & {
    customerId: string;
    username: string;
    password: string;
};
export type AppIntegrationConfigurationPaypal = AppIntegrationSharedConfiguration & {
    username: string;
    password: string;
    signature: string;
    endpoint: string;
};
export type AppIntegrationConfigurationElavon = AppIntegrationSharedConfiguration & {
    merchantId: string;
    userId: string;
    pin: string;
};
export type AppIntegrationConfigurationStripe = AppIntegrationSharedConfiguration & {
    publishableKey: string;
    secretKey: string;
    endpoint: string;
};
export declare function isAppIntegrationConfigurationCanadaPost(config: AppIntegrationConfigurationUnion, appName: AppIntegrationApp): config is AppIntegrationConfigurationCanadaPost;
export declare function isAppIntegrationConfigurationElavon(config: AppIntegrationConfigurationUnion, appName: AppIntegrationApp): config is AppIntegrationConfigurationElavon;
export declare function isAppIntegrationConfigurationPaypal(config: AppIntegrationConfigurationUnion, appName: AppIntegrationApp): config is AppIntegrationConfigurationPaypal;
export declare function isAppIntegrationConfigurationStripe(config: AppIntegrationConfigurationUnion, appName: AppIntegrationApp): config is AppIntegrationConfigurationStripe;
