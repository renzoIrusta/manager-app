const { types } = require("../types/types");
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

        const newUser = {
            name: firstName,
            lastName: lastName,
            email: email,
            color: color,
            phone: phone, 
        }

        await db.collection('users').doc(`${uid}`).set({data: newUser})
        Swal.fire('Perfil registrado', firstName, 'success')
        dispatch( addUserToStore( newUser, uid ) )

    }
    
}