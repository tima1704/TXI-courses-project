import axios, { AxiosError } from "axios";
import { API_PAYMENTS, API_PAYMENTS_TRANSACTIONS } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { ISuccessRes, IValidErrorRes } from "Types/responce";
import { ITransaction } from "Types/transactions";

export interface IInvoice {
  invoiceId: number;
  amount: number;
  currency: string;
}

export const PaymentsServices = {
  async createPaymentInvoise(priceId: number) {
    return axios
      .post<ISuccessRes<IInvoice>>(
        API_PAYMENTS,
        { priceId },
        { headers: HttpHeadersAuthorization() }
      )
      .then((res) => {
        return res.data.data;
      })
      .catch((e: AxiosError<IValidErrorRes>) => {
        if (e.response?.data.errors) {
          throw e.response.data.errors;
        }
        throw e;
      });
  },
  async getAllTransactions() {
    return axios
      .get<ISuccessRes<ITransaction[]>>(API_PAYMENTS_TRANSACTIONS, {
        headers: HttpHeadersAuthorization(),
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        throw e;
      });
  },
};
