import axios from "axios";
import { LANGUAGE, TOKEN } from "Constants/App";
import { ProfileService } from "Helpers/api/Profile";
import { getRegions } from "Helpers/api/Regions";
import { Dispatch } from "redux";
import { AppActions, AppActionsTypes } from "./types";

export const checkAuth = () => async (dispatch: Dispatch<AppActions | any>) => {
  dispatch({ type: AppActionsTypes.APP_LOADING_APP });
  try {
    if (!localStorage.getItem(TOKEN)) {
      dispatch({ type: AppActionsTypes.APP_ERROR_AUTH });
      // eslint-disable-next-line no-throw-literal
      throw new Error("not token");
    }
    const authData = await ProfileService.getProfileInfo();

    if (!authData) {
      throw new Error("not authData");
    }

    if (authData.jwt) {
      localStorage.setItem(TOKEN, authData.jwt);
    }

    authData.jwt = undefined;

    dispatch(checkLanguages());
    dispatch({ type: AppActionsTypes.APP_SUCCESS_AUTH, payload: authData });
  } catch {
    dispatch(checkLanguages());
    dispatch({ type: AppActionsTypes.APP_ERROR_AUTH });
    localStorage.removeItem(TOKEN);
  }
};

export const checkLanguages =
  () => async (dispatch: Dispatch<AppActions | any>) => {
    const language = localStorage.getItem(LANGUAGE);

    if (language && !isNaN(+language)) {
      axios.defaults.params = { lang: language };
      dispatch({ type: AppActionsTypes.APP_SET_LANGUAGE, payload: +language });
    } else {
      localStorage.setItem(LANGUAGE, "1");
      axios.defaults.params = { lang: "1" };
    }

    dispatch(fetchRegions());
  };

export const fetchRegions = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: AppActionsTypes.APP_FETCH_REGIONS });

  let regions = [];

  if (localStorage.getItem("regions")) {
    regions = JSON.parse(localStorage.getItem("regions") as string);
    dispatch({
      type: AppActionsTypes.APP_FILL_REGIONS,
      payload: regions || [],
    });
  }

  regions = await getRegions();
  localStorage.setItem("regions", JSON.stringify(regions));
  dispatch({
    type: AppActionsTypes.APP_FILL_REGIONS,
    payload: regions || [],
  });
};

export const setLanguage = (id: number) => {
  axios.defaults.params = { lang: id };
  localStorage.setItem(LANGUAGE, "1");
  return { type: AppActionsTypes.APP_SET_LANGUAGE, payload: id };
};
