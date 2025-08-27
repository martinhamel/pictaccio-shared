"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransactionInfo = isTransactionInfo;
function isTransactionInfo(transactionInfo) {
    return transactionInfo !== null &&
        typeof transactionInfo === 'object' &&
        typeof transactionInfo.code === 'string' &&
        typeof transactionInfo.success === 'boolean' &&
        typeof transactionInfo.type === 'string';
}
//# sourceMappingURL=is_transaction_info.js.map