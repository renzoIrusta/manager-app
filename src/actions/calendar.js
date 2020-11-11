import { types } from "../types/types";
import Swal from "sweetalert2";
import { db } from "../firebase/config";
import { deleteData, loadData, updateData } from "../helpers/crudData";
import { prepareDate } from "../helpers/prepareDate";

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

export const eventUpdate = ( id, event ) => ({
    type: types.eventUpdate,
    payload: {
        id: id,
        ...event
    }
})

export const eventDelete = ( event ) => ({
    type: types.eventDelete,
})

export const downloadEvents = ( events ) => ({
    type: types.downloadEvents,
    payload: events
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

export const fetchEvents = () => {

    return async ( dispatch ) => {
        try {
            const events = await loadData('calendar');

            const eventsAndDates = prepareDate( events )

            dispatch( downloadEvents( eventsAndDates ) )
    
        }
        catch(e){
            console.log(e);
        }
    }

}

export const calendarUpdateEvent = ( id, eventUpdated ) => {


    return async(dispatch) => {
        try{
            updateData( 'calendar', id, eventUpdated )
            dispatch( eventUpdate( id, eventUpdated ) )
            Swal.fire('Evento editado', eventUpdated.name, 'success')
        }
        catch(e){
            console.log(e);
        }
    }

}

export const calendarDeleteEvent = ( eventId ) => {

    return async( dispatch ) => {

        try{
            await deleteData( 'calendar', eventId )
            dispatch( eventDelete() )
        }
        catch(e){
            console.log(e);
        }

    }
    
}