import { db } from "../firebase/config";
import { types } from "../types/types";


export const userCreate = ( uid, email, firstName, lastName, color, phone ) => {

    return async ( dispatch ) => {

        const newUser = {
            name: firstName,
            lastName: lastName,
            email: email,
            color: color,
            phone: phone, 
        }

        await db.collection('users').doc(`${uid}`).set({data: newUser})
        
        dispatch( addUserToStore( newUser, uid ) )

    }

}

export const addUserToStore = ( {email, name, lastName, color, phone}, uid ) => ({
    type: types.createUser,
    payload: {
        uid: uid,
        name: name,
        lastName: lastName,
        email: email,
        color: color,
        phone: phone
    }
})

