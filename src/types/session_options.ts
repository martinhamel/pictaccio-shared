import { SessionColor } from '../types/session_color';

export type SessionDefaultableOptions = {
    digitalGroupPrice: number[];
    digitalGroupPriceIsScaling: boolean;
    digitalPrice: number[];
    digitalPriceIsScaling: boolean;
    digitalAutoSendEnable: boolean;
    digitalGroupsEnable: boolean;
    digitalEnable: boolean;
    discountEnable: boolean;
    discountCatalogId: string;
    discountPrices: number[];
    discountGroupPrices: number[];
    touchupsEnable: boolean;
    touchupsPrice: number[];
    touchupsPriceIsScaling: boolean;
}

export type SessionOptions = SessionDefaultableOptions & {
    color: SessionColor;
}
