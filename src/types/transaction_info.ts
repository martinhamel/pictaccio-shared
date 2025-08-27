import { TransactionType } from '../types/transaction_type';

export type TransactionInfo = {
    code: string;
    success: boolean;
    type: TransactionType;
}
