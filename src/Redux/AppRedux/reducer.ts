import { AppActions, AppActionsTypes, IAppState } from "./types";

const initalState: IAppState = {
  isLoadedApp: false,
  isAuth: false,
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

    default:
      return state;
  }
}
