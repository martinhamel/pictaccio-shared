import { ApiResponseStatus } from '../../types/responses/api_response_status';

export type BaseResponse = {
    status: ApiResponseStatus;
    context?: string;
    correlationId?: string;
}
