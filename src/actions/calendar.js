import { types } from "../types/types";
import Swal from "sweetalert2";
import { db } from "../firebase/config";

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

export const calendarCreateEvent = ( event ) => {
   
    return async ( dispatch ) => {

        const docRef = await db.collection('calendar').add(event)

        Swal.fire('Evento creado', event.name, 'success')
        const newEvent = {
            id: docRef.id,
            ...event
        }
        dispatch( eventAddNew( newEvent ) )
    }
    
}