import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  ITransactionRequest,
  ITransactionRequestResponse,
} from "../interfaces/transaction";

const createTransaction: SchemaOf<ITransactionRequest> = yup.object().shape({
  name: yup.string().required(),
  value: yup.number().required(),
  transaction_group_name: yup.string().required(),
});

const createTransactionResponse: SchemaOf<ITransactionRequestResponse> = yup
  .object()
  .shape({
    name: yup.string().required(),
    value: yup.number().required(),
    transaction_group_name: yup.string().required(),
    createdAt: yup.date().required(),
  });

export { createTransaction, createTransactionResponse };
