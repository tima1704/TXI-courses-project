import { IModalView, ModalActions, ModalActionsTypes } from "./types";

const initalState: IModalView = {};

export function ModalReducer(
  state: IModalView = initalState,
  action: ModalActions
): IModalView {
  switch (action.type) {
    case ModalActionsTypes.SET_MODAL_VIEW:
      return { ...state, type: action.payload };

    default:
      return state;
  }
}
