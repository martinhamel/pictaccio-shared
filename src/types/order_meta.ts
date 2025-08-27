import { OrderStatus } from '@pictaccio/shared/src/types/order_status';

export type OrderMeta = {
    assignmentUserId?: string;
    productionStatus?: OrderStatus;
}
