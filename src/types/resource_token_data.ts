import { ResourceIdentifier } from '@pictaccio/shared/src/types/resource_identifier';

export type ResourceTokenData = {
    sourceUserId: string;
    resources: ResourceIdentifier[];
}
