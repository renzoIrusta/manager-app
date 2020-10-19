import { types } from '../types/types';

const initialState = {
    logged: true
}

export const authReducer = ( state= initialState, action ) => {

    switch (action.type) {
        
        case types.login:
            return {
                ...state,
                logged: true,
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        
        case types.logout:
            return {}

        default:
            return state;
    }

}

