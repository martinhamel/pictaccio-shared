export const OrderStatuses = [
    'pending',
    'photo-processing',
    'ready-to-print',
    'printing-packaging',
    'ready-to-ship',
    'completed',
    'correction-requested',
    'cancelled'
] as const;

export type OrderStatus = typeof OrderStatuses[number];
