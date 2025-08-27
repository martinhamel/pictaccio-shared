import { ThumbnailSize } from '@pictaccio/shared/src/types/thumbnail_size';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

export function computeThumbnailOutputFileName(path: string,
    file: string,
    size: ThumbnailSize,
    extension = '.webp'): string {
    const hash = createHash('sha256');
    hash.update(file);
    hash.update(size);

    return join(path, `${hash.digest('hex')}${extension}`);
}
