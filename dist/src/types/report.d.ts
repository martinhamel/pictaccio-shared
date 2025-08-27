import { DateRange } from '../types/date_range';
export declare const ReportRendererTypes: readonly ["json", "csv"];
export type ReportRendererType = typeof ReportRendererTypes[number];
export declare const ReportPageSizes: readonly [10, 20, 50, 100, 500, 1000];
export type ReportPageSize = typeof ReportPageSizes[number];
export type ReportSeriesCommonParams = {
    renderer?: ReportRendererType;
    view: ReportViewName;
    dateRange: DateRange;
};
export declare const SalesReportViewNames: readonly ["table", "table+product"];
export type SalesReportViewName = typeof SalesReportViewNames[number];
export declare const SalesReportSeriesNames: readonly ["salesSeries", "productSeries", "aggregateSeries"];
export type SalesReportSeriesName = typeof SalesReportSeriesNames[number];
export declare const SalesReportSalesSeriesFeatures: readonly ["orderId", "sessionId", "date", "numberOfSubjects", "subtotal", "shipping", "promoRebate", "taxes", "returns", "returnFees", "total"];
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
};
export type SalesReportSalesSeriesParams = ReportSeriesCommonParams & {};
export declare const SalesReportProductSeriesFeatures: readonly ["orderId", "productId", "productInternalName", "quantity"];
export type SalesReportProductSeriesFeature = typeof SalesReportProductSeriesFeatures[number];
export type SalesReportProductSeriesFeatureEntry = {
    orderId: string;
    productId: string;
    productInternalName: string;
    quantity: number;
};
export declare const SalesReportAggregateSeriesFeatures: readonly ["subtotalSum", "subtotalAvg", "shippingSum", "shippingAvg", "promoRebateSum", "promoRebateAvg", "taxesSum", "taxesAvg", "returnsSum", "returnsAvg", "returnFeesSum", "returnFeesAvg", "totalSum", "totalAvg"];
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
};
export type SalesReportSeriesEntryMap = {
    salesSeries: SalesReportSalesSeriesFeatureEntry;
    productSeries: SalesReportProductSeriesFeatureEntry;
    aggregateSeries: SalesReportAggregateSeriesFeatureEntry;
};
export type SalesReportSeriesParamsMap = {
    salesSeries: SalesReportSalesSeriesParams;
    productSeries: never;
    aggregateSeries: never;
};
export type SalesReportSeriesEntry<S extends SalesReportSeriesName> = SalesReportSeriesEntryMap[S][];
export type SalesReportSeriesParams<S extends SalesReportSeriesName> = SalesReportSeriesParamsMap[S];
export declare const ReportTypes: readonly ["sales"];
export type ReportType = typeof ReportTypes[number];
export type ReportSeriesEntryMap = {
    sales: SalesReportSeriesEntryMap;
};
export type ReportViewName = SalesReportViewName;
export type ReportSeriesName = SalesReportSeriesName;
export type ReportSeriesEntry<R extends ReportType, S extends ReportSeriesName> = ReportSeriesEntryMap[R][S][];
export type ReportSeriesParams = SalesReportSeriesParamsMap[keyof SalesReportSeriesParamsMap];
