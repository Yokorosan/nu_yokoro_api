export interface ITransactionRequest {
  name: string;
  value: number;
  transaction_group_name: string;
}

export interface ITransactionRequestResponse {
  name: string;
  value: number;
  transaction_group_name: string;
  createdAt: Date;
}
