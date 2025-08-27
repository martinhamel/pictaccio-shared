import { BaseResponse } from '../../types/responses/base_response';

export type LoginResponse = {
    id?: string;
    token?: string;
} & BaseResponse;
