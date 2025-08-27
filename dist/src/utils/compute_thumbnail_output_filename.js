"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeThumbnailOutputFileName = computeThumbnailOutputFileName;
const crypto_1 = require("crypto");
const path_1 = require("path");
function computeThumbnailOutputFileName(path, file, size, extension = '.webp') {
    const hash = (0, crypto_1.createHash)('sha256');
    hash.update(file);
    hash.update(size);
    return (0, path_1.join)(path, `${hash.digest('hex')}${extension}`);
}
//# sourceMappingURL=compute_thumbnail_output_filename.js.map