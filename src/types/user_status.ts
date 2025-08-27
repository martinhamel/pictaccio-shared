export const UserStatuses = [
    'ghost',
    'invited',
    'created',
    'enabled',
    'disabled',
    'archived'
] as const;

export type UserStatus = typeof UserStatuses[number];
