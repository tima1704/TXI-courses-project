import { IModalVIewAction, ModalActionsTypes, TModals } from "./types";

export const setModalViewAction = (payload?: TModals): IModalVIewAction => {
  return {
    type: ModalActionsTypes.SET_MODAL_VIEW,
    payload,
  };
};
