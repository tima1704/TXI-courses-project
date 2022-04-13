import { combineReducers } from "redux";
import { AppReducer } from "./AppRedux/reducer";

import * as AppActions from "./AppRedux/actions";

export const RootReducer = combineReducers({
  App: AppReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export const AllActions = {
  ...AppActions,
};
