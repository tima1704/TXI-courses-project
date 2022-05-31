import { IModalView, ModalActions, ModalActionsTypes } from "./types";

const initalState: IModalView = {
  isLoggedIn: false,
  isVisible: false,
};

export function ModalReducer(
  state: IModalView = initalState,
  action: ModalActions
): IModalView {
  switch (action.type) {
    case ModalActionsTypes.SET_MODAL_VIEW:
      return { ...state, isLoggedIn: action.payload };
      
    case ModalActionsTypes.SET_VISIBLE:
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
}
