export class CustomExternalUrls {
    contact: string;
    root: string;
    termsAndConditions: string;

    constructor(externalUrls?: { [key: string]: string }) {
        this.contact = externalUrls?.contact ?? '';
        this.root = externalUrls?.root ?? '';
        this.termsAndConditions = externalUrls?.termsAndConditions ?? '';
    }
}
