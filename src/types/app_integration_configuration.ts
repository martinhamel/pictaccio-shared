import { AppIntegrationApp } from '@pictaccio/shared/src/types/app_integration_app';

export type AppIntegrationConfiguration = {
    app: AppIntegrationApp;
    configuration: AppIntegrationConfigurationUnion;
}

export type AppIntegrationConfigurationUnion =
    AppIntegrationConfigurationCanadaPost |
    AppIntegrationConfigurationElavon |
    AppIntegrationConfigurationPaypal |
    AppIntegrationConfigurationStripe;

export type AppIntegrationConfigurations = {
    [app in AppIntegrationApp]?: AppIntegrationConfigurationUnion;
}

export type AppIntegrationSharedConfiguration = {
    active: boolean;
}

export type AppIntegrationConfigurationCanadaPost = AppIntegrationSharedConfiguration & {
    customerId: string;
    username: string;
    password: string;
}

export type AppIntegrationConfigurationPaypal = AppIntegrationSharedConfiguration & {
    username: string;
    password: string;
    signature: string;
    endpoint: string;
}

export type AppIntegrationConfigurationElavon = AppIntegrationSharedConfiguration & {
    merchantId: string;
    userId: string;
    pin: string;
}

export type AppIntegrationConfigurationStripe = AppIntegrationSharedConfiguration & {
    publishableKey: string;
    secretKey: string;
    endpoint: string;
}

export function isAppIntegrationConfigurationCanadaPost(config: AppIntegrationConfigurationUnion,
    appName: AppIntegrationApp)
    : config is AppIntegrationConfigurationCanadaPost {
    return config !== undefined && appName === 'canada-post';
}

export function isAppIntegrationConfigurationElavon(config: AppIntegrationConfigurationUnion,
    appName: AppIntegrationApp)
    : config is AppIntegrationConfigurationElavon {
    return config !== undefined && appName === 'elavon';
}

export function isAppIntegrationConfigurationPaypal(config: AppIntegrationConfigurationUnion,
    appName: AppIntegrationApp)
    : config is AppIntegrationConfigurationPaypal {
    return config !== undefined && appName === 'paypal';
}

export function isAppIntegrationConfigurationStripe(config: AppIntegrationConfigurationUnion,
    appName: AppIntegrationApp)
    : config is AppIntegrationConfigurationStripe {
    return config !== undefined && appName === 'stripe';
}
