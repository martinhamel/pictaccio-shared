import { ClientConfigSchema } from '@pictaccio/shared/src/types/client_config_schema';
import { BaseResponse } from '@pictaccio/shared/src/types/responses/base_response';

export type ConfigResponse = {
    config: ClientConfigSchema;
} & BaseResponse;
