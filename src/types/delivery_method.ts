export const DeliveryMethods = [
    'fixed-rate',
    'establishment',
    'pick-up',
    'canada-post'
] as const;

export type DeliveryMethod = typeof DeliveryMethods[number];
