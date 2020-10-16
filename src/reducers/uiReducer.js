import { types } from "../types/types";


const initialState = {
    loading: false,
    dashboardModal: false
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

        default:
            return state;
    }

}