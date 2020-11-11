import { types } from '../types/types';

const initialState = {
    events: [],
    activeEvent: null
}

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.downloadEvents:
            return {
                ...state,
                events: [ ...action.payload ]
            }
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        case types.clearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }

        default:
            return state;
    }

}