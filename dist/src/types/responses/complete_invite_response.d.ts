import { BaseResponse } from '../../types/responses/base_response';
export type CompleteInviteResponse = {
    id?: string;
    otpUri?: string;
} & BaseResponse;
