export function validateInternalNameCharacters(name: string): boolean {
    return /^[a-z0-9- _]+$/i.test(name);
}
