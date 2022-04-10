import axios from "axios";
import { API_COURCES_ALL } from "Constants/API";
import { ICource} from "Types/cources";
import { ISuccessRes } from "Types/responce";

export const CourcesService = {
  async getAllView() {
    return axios
      .get<ISuccessRes<ICource[]>>(API_COURCES_ALL)
      .then((res) => {
        return res.data.data;
      });
  },
};
