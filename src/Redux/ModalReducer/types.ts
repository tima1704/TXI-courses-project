export interface IModalView {
  isLoggedIn: boolean;
  isVisible: boolean;
}

export enum ModalActionsTypes {
  SET_MODAL_VIEW = "SET_MODAL_VIEW",
  SET_VISIBLE = "SET_VISIBLE",
}

export interface IModalVIewAction {
  type: ModalActionsTypes.SET_MODAL_VIEW;
  payload: boolean;
}

export interface IModalVisibleAction {
  type: ModalActionsTypes.SET_VISIBLE;
}

export type ModalActions = IModalVIewAction | IModalVisibleAction;
