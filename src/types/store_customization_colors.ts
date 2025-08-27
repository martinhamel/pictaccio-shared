export class StoreCustomizationColors {
    accent: string;

    constructor(colors?: { [key: string]: string }) {
        this.accent = colors?.accent ?? '#000000';
    }
}
