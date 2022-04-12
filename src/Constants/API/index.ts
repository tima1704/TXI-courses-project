const host = process.env.REACT_APP_API_URL;

const API_COURCES = host + "/courses";
export const API_COURCES_ALL = API_COURCES + "/all";
export const API_COURCE = (id?: string) => API_COURCES + "/" + id;
