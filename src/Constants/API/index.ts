export const host = process.env.REACT_APP_API_URL;

export const API_AUTH = host + "/auth";
export const API_LOGIN = host + "/login";

export const API_REGIONS = host + "/regions";

export const API_PROGRESS = (id: number | string) => host + "/progress/" + id;

const API_COURCES = host + "/courses";
export const API_COURCES_ALL = API_COURCES + "/all";
export const API_COURCE = (id?: string) => API_COURCES + "/" + id;
export const API_COURCE_USER_ALL = API_COURCES + "/p/all";
export const API_COURCE_USER = (id: string) => API_COURCES + "/p/" + id;
export const API_COURCE_PLAY = `${API_COURCES}`;
