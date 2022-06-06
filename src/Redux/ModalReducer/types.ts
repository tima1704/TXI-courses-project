export interface IModalView {
  type?: TModals;
}

export type TModals = "login" | "register" | "editProfile" | "errorCoursePaid" | "sentMail" | "someWrong" | "passwordChanged";

export enum ModalActionsTypes {
  SET_MODAL_VIEW = "SET_MODAL_VIEW",
}

export type ModalActions = IModalVIewAction;

export interface IModalVIewAction {
  type: ModalActionsTypes.SET_MODAL_VIEW;
  payload: TModals | undefined;
}
