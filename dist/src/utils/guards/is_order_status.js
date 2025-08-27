"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderStatus = isOrderStatus;
const order_status_1 = require("../../types/order_status");
function isOrderStatus(orderStatus) {
    return orderStatus !== null &&
        order_status_1.OrderStatuses.includes(orderStatus);
}
//# sourceMappingURL=is_order_status.js.map