import { types } from '../types/types';

const initialState = {
    customersFound: [],
    customerActive: {},
};

export const customersReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.customersFound:
            return {
                ...state,
                customersFound: action.payload
            }

        case types.customerSelected:
            return {
                ...state,
                customerActive: action.payload
            }

        case types.customersClean:
            return {
                found: [],
                customerActive: {},
            }

        default:
            return state;
    }

}