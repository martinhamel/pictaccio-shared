import { BaseResponse } from '@pictaccio/shared/src/types/responses/base_response';

export type CompleteInviteResponse = {
    id?: string;
    otpUri?: string;
} & BaseResponse;
