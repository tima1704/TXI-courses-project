import axios, { AxiosError } from "axios";
import { API_PROGRESS } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { IValidErrorRes } from "Types/responce";

export const ProgressServices = {
  async createOrUpdateServices(id: string | number, data: any) {
    return axios
      .post(API_PROGRESS(id), data, {
        headers: HttpHeadersAuthorization(),
      })
      .catch((e: AxiosError<IValidErrorRes>) => {
        if (e.response?.data.errors) {
          throw e;
        }
        throw e;
      });
  },
};
