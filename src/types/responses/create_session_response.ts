import { BaseResponse } from '@pictaccio/shared/src/types/responses/base_response';

export type CreateSessionResponse = {
    sessionId?: number;
} & BaseResponse;
