import { types } from "../types/types";
import Swal from "sweetalert2";
import { db } from "../firebase/config";
import { deleteData, updateData } from "../helpers/crudData";
// import { dbListener } from "../helpers/dbListener";


export const eventSetActive = ( event ) => ({
    type: types.eventSetActive,
    payload: event
});

export const clearActiveEvent = () => ({
    type: types.clearActiveEvent
})

export const downloadEvents = ( events ) => ({
    type: types.downloadEvents,
    payload: events
})

export const calendarCreateEvent = ( event ) => {
   
    return async ( dispatch ) => {

        await db.collection('calendar').add(event)

        Swal.fire('Evento creado', event.name, 'success')

    }
    
}


export const calendarUpdateEvent = ( id, eventUpdated ) => {


    return async(dispatch) => {
        try{
            updateData( 'calendar', id, eventUpdated )
            Swal.fire('Evento editado', eventUpdated.name, 'success')
            dispatch(clearActiveEvent())
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
            dispatch(clearActiveEvent())
        }
        catch(e){
            console.log(e);
        }

    }
    
}
