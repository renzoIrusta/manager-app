import { types } from "../types/types";


const initialState = {
    loading: false,
    dashboardModal: false,
    modalState: false,
    secondModalState: false,
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiOpenNavbar:
            return {
                ...state,
                dashboardModal: true,
            }
        case types.uiCloseNavbar:
            return {
                ...state,
                dashboardModal: false,
            }
        case types.uiOpenModal:
            return {
                ...state,
                modalState: true,
            }

        case types.uiCloseModal:
            return {
                ...state,
                modalState: false,
            }
        case types.uiOpenSecondModal:
            return {
                ...state,
                secondModalState: true,
            }
        case types.uiCloseSecondModal:
            return {
                ...state,
                secondModalState: false,
            }

        default:
            return state;
    }

}