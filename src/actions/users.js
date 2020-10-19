import { db } from "../firebase/config";
import { types } from "../types/types";


export const userCreate = ( email, firstName, lastName, color, uid ) => {

    return async ( dispatch, getState ) => {

        const uid = getState().auth.uid;

        const newUser = {
            name: firstName,
            lastName: lastName,
            email: email,
            color: color 
        }

        const data = await db.collection(`users/${uid}/data`).add( newUser )
        console.log( data.id );
        dispatch( addUserToStore( newUser, data.id ) )

    }

}

export const addUserToStore = ( {email, name, lastName, color}, id ) => ({
    type: types.createUser,
    payload: {
        dataUserId: id,
        name: name,
        lastName: lastName,
        email: email,
        color: color
    }
})