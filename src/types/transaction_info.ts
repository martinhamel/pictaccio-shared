import { TransactionType } from '@pictaccio/shared/src/types/transaction_type';

export type TransactionInfo = {
    code: string;
    success: boolean;
    type: TransactionType;
}
