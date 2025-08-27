import { UserInfo } from '../types/user_info';
import { UserStatus } from '../types/user_status';

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
