import { BaseResponse } from '../../types/responses/base_response';

export type ValidateResetPasswordCodeResponse = {
    resetToken?: string;
} & BaseResponse;
