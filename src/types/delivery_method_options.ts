import { CanadaPostProduct } from '../types/canada_post_product';

export type DeliveryMethodCanadaPostOptions = {
    envelopeEta: number,
    productCode: CanadaPostProduct,
    envelopePrice: number,
    parcelThreshold: number,
    originPostalCode: string
}

export type DeliveryMethodEstablishmentOptions = {
    etaDate: Date,
    lateDate: Date,
    expireDate: Date,
    lateFees: number
}

export type DeliveryMethodPickUpOptions = {
    contactPhone: string,
    daysAvailable: number[],
    contactAddress: string
}

export type DeliveryMethodOptions =
    DeliveryMethodCanadaPostOptions |
    DeliveryMethodEstablishmentOptions |
    DeliveryMethodPickUpOptions;
