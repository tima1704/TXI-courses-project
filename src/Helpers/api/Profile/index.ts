import axios, { AxiosError } from "axios";
import { API_AUTH, API_LOGIN } from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { ILogin, ILoginRes, IUserRes } from "Types/login";
import { ISuccessRes, IValidErrorRes } from "Types/responce";

export const ProfileService = {
  async getProfileInfo() {
    return axios
      .get<ISuccessRes<IUserRes>>(API_AUTH, {
        headers: HttpHeadersAuthorization(),
      })
      .then((res) => res.data.data)
      .catch((e) => {
        throw e;
      });
  },
  async login(data: ILogin) {
    return axios
      .post<ISuccessRes<ILoginRes>>(API_LOGIN, data)
      .then((res) => res.data.data)
      .catch((e: AxiosError<IValidErrorRes>) => {
        throw e.response?.data.errors;
      });
  },
};
