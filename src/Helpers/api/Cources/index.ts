import axios from "axios";
import { API_COURCE, API_COURCES_ALL } from "Constants/API";
import { ICource, ICourceItem } from "Types/cources";
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
};
