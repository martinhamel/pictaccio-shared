export type StoreFeaturesStatus = {
    languageConfigured: boolean;
    customizationConfigured: boolean;
    paymentConfigured: boolean;
    contactConfigured: boolean;
    taxesConfigured: boolean;
}

export type StoreConfigurationStatus = {
    isReady: boolean;
    features: StoreFeaturesStatus;
}
