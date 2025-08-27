import { DateRange } from '@pictaccio/shared/src/types/date_range';

export const ReportRendererTypes = [
    'json',
    'csv'
] as const;

export type ReportRendererType = typeof ReportRendererTypes[number];

export const ReportPageSizes = [10, 20, 50, 100, 500, 1000] as const;

export type ReportPageSize = typeof ReportPageSizes[number];

export type ReportSeriesCommonParams = {
    renderer?: ReportRendererType; // TODO: Remove when download is final in GUI
    view: ReportViewName;
    dateRange: DateRange;
}

export const SalesReportViewNames = [
    'table',
    'table+product'
] as const;

export type SalesReportViewName = typeof SalesReportViewNames[number];

export const SalesReportSeriesNames = [
    'salesSeries',
    'productSeries',
    'aggregateSeries'
] as const;

export type SalesReportSeriesName = typeof SalesReportSeriesNames[number];

export const SalesReportSalesSeriesFeatures = [
    'orderId',
    'sessionId',
    'date',
    'numberOfSubjects',
    'subtotal',
    'shipping',
    'promoRebate',
    'taxes',
    'returns',
    'returnFees',
    'total'
] as const;

export type SalesReportSalesSeriesFeature = typeof SalesReportSalesSeriesFeatures[number];

export type SalesReportSalesSeriesFeatureEntry = {
    orderId: string;
    sessionId: string;
    date: Date;
    numberOfSubjects: number;
    subtotal: string;
    shipping: string;
    promoRebate: string;
    taxes: string;
    returns: string;
    returnFees: string;
    total: string;
}

export type SalesReportSalesSeriesParams = ReportSeriesCommonParams & {
}

export const SalesReportProductSeriesFeatures = [
    'orderId',
    'productId',
    'productInternalName',
    'quantity'
] as const;

export type SalesReportProductSeriesFeature = typeof SalesReportProductSeriesFeatures[number];

export type SalesReportProductSeriesFeatureEntry = {
    orderId: string;
    productId: string;
    productInternalName: string;
    quantity: number;
}

export const SalesReportAggregateSeriesFeatures = [
    'subtotalSum',
    'subtotalAvg',
    'shippingSum',
    'shippingAvg',
    'promoRebateSum',
    'promoRebateAvg',
    'taxesSum',
    'taxesAvg',
    'returnsSum',
    'returnsAvg',
    'returnFeesSum',
    'returnFeesAvg',
    'totalSum',
    'totalAvg'
] as const;

export type SalesReportAggregateSeriesFeatureEntry = {
    subtotalSum: string;
    subtotalAvg: string;
    shippingSum: string;
    shippingAvg: string;
    promoRebateSum: string;
    promoRebateAvg: string;
    taxesSum: string;
    taxesAvg: string;
    returnsSum: string;
    returnsAvg: string;
    returnFeesSum: string;
    returnFeesAvg: string;
    totalSum: string;
    totalAvg: string;
}

export type SalesReportSeriesEntryMap = {
    salesSeries: SalesReportSalesSeriesFeatureEntry,
    productSeries: SalesReportProductSeriesFeatureEntry,
    aggregateSeries: SalesReportAggregateSeriesFeatureEntry
}

export type SalesReportSeriesParamsMap = {
    salesSeries: SalesReportSalesSeriesParams,
    productSeries: never,
    aggregateSeries: never
}

export type SalesReportSeriesEntry<S extends SalesReportSeriesName> = SalesReportSeriesEntryMap[S][];
export type SalesReportSeriesParams<S extends SalesReportSeriesName> = SalesReportSeriesParamsMap[S];

export const ReportTypes = [
    'sales'
] as const;

export type ReportType = typeof ReportTypes[number];

export type ReportSeriesEntryMap = {
    sales: SalesReportSeriesEntryMap;
}

export type ReportViewName = SalesReportViewName;
export type ReportSeriesName = SalesReportSeriesName;
export type ReportSeriesEntry<R extends ReportType, S extends ReportSeriesName> = ReportSeriesEntryMap[R][S][];
export type ReportSeriesParams = SalesReportSeriesParamsMap[keyof SalesReportSeriesParamsMap];
