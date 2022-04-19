export const URL_HOME = "/";

// URL Cources
export const URL_COURSE_ID = (id: string | number) => "/cource/" + id;
export const URL_COURSE_$ID = "/cource/:id";

// URL Login
export const URL_LOGIN = "/login";

// URL USER
export const URL_USER_COURSE = "/p";
export const URL_USER_COURSE_$ID = "/p" + URL_COURSE_$ID;
export const URL_USER_COURSE_ID = (id: string | number) =>
  "/p" + URL_COURSE_ID(id);
