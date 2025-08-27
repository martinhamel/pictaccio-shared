"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomExternalUrls = void 0;
class CustomExternalUrls {
    contact;
    root;
    termsAndConditions;
    constructor(externalUrls) {
        this.contact = externalUrls?.contact ?? '';
        this.root = externalUrls?.root ?? '';
        this.termsAndConditions = externalUrls?.termsAndConditions ?? '';
    }
}
exports.CustomExternalUrls = CustomExternalUrls;
//# sourceMappingURL=custom_external_urls.js.map