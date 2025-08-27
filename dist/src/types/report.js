"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportTypes = exports.SalesReportAggregateSeriesFeatures = exports.SalesReportProductSeriesFeatures = exports.SalesReportSalesSeriesFeatures = exports.SalesReportSeriesNames = exports.SalesReportViewNames = exports.ReportPageSizes = exports.ReportRendererTypes = void 0;
exports.ReportRendererTypes = [
    'json',
    'csv'
];
exports.ReportPageSizes = [10, 20, 50, 100, 500, 1000];
exports.SalesReportViewNames = [
    'table',
    'table+product'
];
exports.SalesReportSeriesNames = [
    'salesSeries',
    'productSeries',
    'aggregateSeries'
];
exports.SalesReportSalesSeriesFeatures = [
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
];
exports.SalesReportProductSeriesFeatures = [
    'orderId',
    'productId',
    'productInternalName',
    'quantity'
];
exports.SalesReportAggregateSeriesFeatures = [
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
];
exports.ReportTypes = [
    'sales'
];
//# sourceMappingURL=report.js.map