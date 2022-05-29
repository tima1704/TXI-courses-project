import { combineReducers } from "redux";
import * as AppActions from "./AppRedux/actions";
import { AppReducer } from "./AppRedux/reducer";
import * as ModalActions from "./ModalReducer/actions";
import { ModalReducer } from "./ModalReducer/reducer";

export const RootReducer = combineReducers({
  App: AppReducer,
  Modal: ModalReducer
});

export type RootState = ReturnType<typeof RootReducer>;

export const AllActions = {
  ...AppActions,
  ...ModalActions
};
