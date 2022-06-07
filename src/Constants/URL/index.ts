export const URL_HOME = "/";

// URL Cources
export const URL_COURSE_ID = (id: string | number) => "/cource/" + id;
export const URL_COURSE_$ID = "/cource/:id";

// URL support
export const URL_SUPPORT = "/support";

// URL transactions
export const URL_TRANSACTIONS = "/transactions";

// URL USER
export const URL_USER_COURSE = "/personal";
export const URL_USER_COURSE_$ID = "/personal" + URL_COURSE_$ID;
export const URL_USER_COURSE_ID = (id: string | number) =>
  "/personal" + URL_COURSE_ID(id);
