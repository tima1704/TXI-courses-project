import axios, { AxiosError } from "axios";
import { API_SUPPORT } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { IValidErrorRes } from "Types/responce";

export const SupportServices = {
  async create(data: any) {
    return axios
      .post(API_SUPPORT, data, {
        headers: HttpHeadersAuthorization(),
      })
      .catch((e: AxiosError<IValidErrorRes>) => {
        if (e.response?.data.errors) {
          throw e.response?.data.errors;
        }
        throw e;
      });
  },
};
