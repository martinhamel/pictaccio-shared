import { UserInfo } from '@pictaccio/shared/src/types/user_info';
import { UserStatus } from '@pictaccio/shared/src/types/user_status';

export interface User {
    id?: string;
    status?: UserStatus;
    email?: string;
    roles?: string[];
    info?: UserInfo;
    avatar?: string;
    createdOn?: Date;
    lastLogin?: Date;
}
