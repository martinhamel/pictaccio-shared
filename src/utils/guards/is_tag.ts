import { Tag, TagScopes } from '../../types/tags';

export function isTag(tag: any): tag is Tag {
    return typeof tag === 'object' &&
        tag !== null &&
        typeof tag.text === 'string' &&
        typeof tag.scope === 'string' &&
        TagScopes.includes(tag.scope);
}
