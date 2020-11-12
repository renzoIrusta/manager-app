import { types } from '../types/types';

const initialState = [];

export const customersReducer = ( state= initialState, action ) => {

    switch (action.type) {
        
        case types.customersFinded:
            return action.payload
            
        case types.customersClean:
            return []

        default:
            return state;
    }

}