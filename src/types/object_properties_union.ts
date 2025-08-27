export type ObjectPropertiesUnion<T> = T extends any ? T[keyof T] : never;
