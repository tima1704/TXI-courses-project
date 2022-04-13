import { IUser } from "Types/login";

export interface IAppState {
  isLoadedApp: boolean;
  isAuth: boolean;
  user?: IUser;
}

export enum AppActionsTypes {
  APP_LOADING_APP = "APP_LOADING_APP",
  APP_SUCCESS_AUTH = "APP_SUCCESS_AUTH",
  APP_ERROR_AUTH = "APP_ERROR_AUTH",
}

export type AppActions = loadingApp | successAuth | errorsAuth;

interface loadingApp {
  type: AppActionsTypes.APP_LOADING_APP;
}

interface successAuth {
  type: AppActionsTypes.APP_SUCCESS_AUTH;
  payload: IUser;
}

interface errorsAuth {
  type: AppActionsTypes.APP_ERROR_AUTH;
}
