import { types } from '../types/types';

const initialState = [];

export const usersReducer = ( state= initialState, action ) => {

    switch (action.type) {
        
        case types.loadUsers:
            return action.payload
            
        case types.createUser:
            return [ action.payload, ...state ]

        default:
            return state;
    }

}