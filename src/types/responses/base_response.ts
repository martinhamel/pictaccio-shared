import { ApiResponseStatus } from '@pictaccio/shared/src/types/responses/api_response_status';

export type BaseResponse = {
    status: ApiResponseStatus;
    context?: string;
    correlationId?: string;
}
