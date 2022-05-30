import { AppActions, AppActionsTypes, IAppState } from "./types";

const initalState: IAppState = {
  isLoadedApp: false,
  isAuth: false,
  languageApp: "1",
  regions: [],
};

export function AppReducer(
  state: IAppState = initalState,
  action: AppActions
): IAppState {
  switch (action.type) {
    case AppActionsTypes.APP_ERROR_AUTH:
      return { ...state, isLoadedApp: true, isAuth: false };

    case AppActionsTypes.APP_SUCCESS_AUTH:
      return {
        ...state,
        isLoadedApp: true,
        isAuth: true,
        user: action.payload,
      };

    case AppActionsTypes.APP_SET_LANGUAGE:
      return { ...state, languageApp: action.payload };

    case AppActionsTypes.APP_FILL_REGIONS:
      return { ...state, regions: action.payload };

    default:
      return state;
  }
}
