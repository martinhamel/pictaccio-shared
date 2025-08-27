import { BaseResponse } from '@pictaccio/shared/src/types/responses/base_response';

export type LoginResponse = {
    id?: string;
    token?: string;
} & BaseResponse;
