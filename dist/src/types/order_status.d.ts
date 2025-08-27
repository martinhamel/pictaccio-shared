export declare const OrderStatuses: readonly ["pending", "photo-processing", "ready-to-print", "printing-packaging", "ready-to-ship", "completed", "correction-requested", "cancelled"];
export type OrderStatus = typeof OrderStatuses[number];
