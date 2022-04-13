const host = process.env.REACT_APP_API_URL;

export const API_AUTH = host + "/auth";
export const API_LOGIN = host + "/login";

const API_COURCES = host + "/courses";
export const API_COURCES_ALL = API_COURCES + "/all";
export const API_COURCE = (id?: string) => API_COURCES + "/" + id;
