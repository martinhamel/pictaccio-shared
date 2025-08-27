import { OrderDescriptor } from '@pictaccio/shared/src/types/order_descriptor';
import { ResponseStatus } from '@pictaccio/shared/src/types/response_status';

export type GetOrdersResponse = {
    status: ResponseStatus;
    orders?: OrderDescriptor[];
}
