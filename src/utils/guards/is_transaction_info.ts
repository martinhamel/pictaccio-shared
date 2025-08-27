import { TransactionInfo } from '@pictaccio/shared/src/types/transaction_info';

export function isTransactionInfo(transactionInfo: any): transactionInfo is TransactionInfo {
    return transactionInfo !== null &&
        typeof transactionInfo === 'object' &&
        typeof transactionInfo.code === 'string' &&
        typeof transactionInfo.success === 'boolean' &&
        typeof transactionInfo.type === 'string';
}
