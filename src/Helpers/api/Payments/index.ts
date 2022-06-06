import axios, { AxiosError } from "axios";
import { API_PAYMENTS } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { ISuccessRes, IValidErrorRes } from "Types/responce";

interface IRes {
  invoiceId: number;
  amount: number;
  currency: string;
}

export const PaymentsServices = {
  async createPaymentInvoise(priceId: number) {
    return axios
      .post<ISuccessRes<IRes>>(
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
};
