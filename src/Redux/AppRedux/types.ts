import { IUser } from "Types/login";

export interface IAppState {
  isLoadedApp: boolean;
  isAuth: boolean;
  languageApp: string | number;
  regions: any[];
  user?: IUser;
}

export enum AppActionsTypes {
  APP_LOADING_APP = "APP_LOADING_APP",
  APP_SUCCESS_AUTH = "APP_SUCCESS_AUTH",
  APP_ERROR_AUTH = "APP_ERROR_AUTH",
  APP_SET_LANGUAGE = "APP_SET_LANGUAGE",
  APP_FETCH_REGIONS = "APP_FETCH_REGIONS",
  APP_FILL_REGIONS = "APP_FILL_REGIONS",
}

export type AppActions =
  | loadingApp
  | successAuth
  | errorsAuth
  | setLanguageApp
  | fetchRegions
  | fillRegions;

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

interface setLanguageApp {
  type: AppActionsTypes.APP_SET_LANGUAGE;
  payload: string | number;
}

interface fetchRegions {
  type: AppActionsTypes.APP_FETCH_REGIONS;
}

interface fillRegions {
  type: AppActionsTypes.APP_FILL_REGIONS;
  payload: any;
}
