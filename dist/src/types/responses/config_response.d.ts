import { ClientConfigSchema } from '../../types/client_config_schema';
import { BaseResponse } from '../../types/responses/base_response';
export type ConfigResponse = {
    config: ClientConfigSchema;
} & BaseResponse;
