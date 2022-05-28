import { IModalVIewAction, IModalVisibleAction, ModalActionsTypes } from "./types"

export const setModalViewAction = (payload: boolean): IModalVIewAction => {
    return {
        type: ModalActionsTypes.SET_MODAL_VIEW,
        payload
    }
}

export const setModalVisibleAction = (): IModalVisibleAction => {
    return {
        type: ModalActionsTypes.SET_VISIBLE,
    }
}