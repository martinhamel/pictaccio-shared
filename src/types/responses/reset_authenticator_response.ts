import { BaseResponse } from '@pictaccio/shared/src/types/responses/base_response';

export type ResetAuthenticatorResponse = {
    uri?: string;
} & BaseResponse;
