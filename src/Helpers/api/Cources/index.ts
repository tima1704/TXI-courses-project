import axios from "axios";
import {
  API_COURCE,
  API_COURCES_ALL,
  API_COURCE_USER,
  API_COURCE_USER_ALL,
} from "Constants/API";
import HttpHeadersAuthorization from "Helpers/common";
import { ICource, ICourceItem, ICourceUserItem } from "Types/cources";
import { ISuccessRes } from "Types/responce";

export const CourcesService = {
  async getAllView() {
    return axios.get<ISuccessRes<ICource[]>>(API_COURCES_ALL).then((res) => {
      return res.data.data;
    });
  },
  async getCourceById(id?: string) {
    return axios
      .get<ISuccessRes<ICourceItem>>(API_COURCE(id))
      .then((res) => res.data.data);
  },
  async getAllUser() {
    return axios
      .get<ISuccessRes<ICource[]>>(API_COURCE_USER_ALL, {
        headers: HttpHeadersAuthorization(),
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        throw e;
      });
  },
  async getUserCource(id: string) {
    return axios
      .get<ISuccessRes<ICourceUserItem>>(API_COURCE_USER(id), {
        headers: HttpHeadersAuthorization(),
      })
      .then((res) => {
        return res.data.data;
      })
      .catch((e) => {
        throw e;
      });
  },
  async getUserCourceContent(id: string) {
    return axios
    .get<ISuccessRes<ICourceUserItem>>(API_COURCE_USER(id), {
      headers: HttpHeadersAuthorization(),
    })
    .then((res) => {
      return res.data.data
    })
    .catch((e) => {
      throw e;
    });
  },
};
