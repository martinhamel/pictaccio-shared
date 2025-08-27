import { OrderStatus, OrderStatuses } from '../../types/order_status';

export function isOrderStatus(orderStatus: any): orderStatus is OrderStatus {
    return orderStatus !== null &&
        OrderStatuses.includes(orderStatus);
}
