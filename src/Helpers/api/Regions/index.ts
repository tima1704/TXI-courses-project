import axios from "axios";
import { API_REGIONS } from "Constants/API";

export const getRegions = () => {
  return axios.get(API_REGIONS).then((res) => res.data.data);
};
