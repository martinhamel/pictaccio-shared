"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubject = isSubject;
function isSubject(subject) {
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
//# sourceMappingURL=is_subject.js.map