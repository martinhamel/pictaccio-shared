import { ThumbnailSize } from '../types/thumbnail_size';
import { createHash } from 'crypto';
import { join } from 'path';

export function computeThumbnailOutputFileName(path: string,
    file: string,
    size: ThumbnailSize,
    extension = '.webp'): string {
    const hash = createHash('sha256');
    hash.update(file);
    hash.update(size);

    return join(path, `${hash.digest('hex')}${extension}`);
}
