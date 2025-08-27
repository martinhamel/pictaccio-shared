import { OrderStatus } from '../types/order_status';

export type OrderMeta = {
    assignmentUserId?: string;
    productionStatus?: OrderStatus;
}
