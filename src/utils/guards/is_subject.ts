import { Subject } from '@pictaccio/shared/src/types/subject';

export function isSubject(subject: any): subject is Subject {
    return subject !== null &&
        typeof subject === 'object' &&
        typeof subject.code === 'string' &&
        (typeof subject.group === 'string' || subject.group === undefined || subject.group === null) &&
        typeof subject.id === 'string' &&
        typeof subject.name === 'string' &&
        subject.photos !== null &&
        typeof subject.photos === 'object' &&
        typeof subject.uniqueId === 'string';
}
