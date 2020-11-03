const { types } = require("../types/types");

export const eventAddNew = ( event ) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

export const clearActiveEvent = () => ({
    type: types.clearActiveEvent
})

export const eventUpdates = ( event ) => ({
    type: types.eventUpdate,
    payload: event
})

export const eventDelete = () => ({
    type: types.eventDelete,
})