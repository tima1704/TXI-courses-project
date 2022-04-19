import { TOKEN } from "Constants/App";
import { ProfileService } from "Helpers/api/Profile";
import { Dispatch } from "redux";
import { AppActions, AppActionsTypes } from "./types";

export const checkAuth = () => async (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: AppActionsTypes.APP_LOADING_APP });
  try {
    if (!localStorage.getItem(TOKEN)) {
      dispatch({ type: AppActionsTypes.APP_ERROR_AUTH });
    }
    const authData = await ProfileService.getProfileInfo();

    if (!authData) {
      throw new Error("not authData");
    }

    if (authData.jwt) {
      localStorage.setItem(TOKEN, authData.jwt);
    }

    authData.jwt = undefined;

    dispatch({ type: AppActionsTypes.APP_SUCCESS_AUTH, payload: authData });
  } catch {
    dispatch({ type: AppActionsTypes.APP_ERROR_AUTH });
    localStorage.removeItem(TOKEN);
  }
};
