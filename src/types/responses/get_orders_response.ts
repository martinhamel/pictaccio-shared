import { OrderDescriptor } from '../../types/order_descriptor';
import { ResponseStatus } from '../../types/response_status';

export type GetOrdersResponse = {
    status: ResponseStatus;
    orders?: OrderDescriptor[];
}
