import { types } from "../types/types";
import { firebase } from '../firebase/config';
import Swal from "sweetalert2";
import { userCreate, userCreateWithPhoto } from "./users";


export const authLogin = ( { uid, displayName } ) => ({
    type: types.login,
    payload: {
        uid,
        displayName,
    }
})

export const authLogout = () => ({
    type: types.logout
})

export const startRegisterWithEmailPassword = ( {email, password, firstName, lastName, color, phone}, file ) => {

    return ( dispatch ) => {

        
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async( {user} ) => {
            
            await user.updateProfile({
                displayName: firstName,
            })

            if (file){
               dispatch (userCreateWithPhoto( user.uid, email, firstName, lastName, color, phone, file)) 
            } else {
                dispatch(userCreate( user.uid, email, firstName, lastName, color, phone ))
            }   

        })
        .catch( e => {
            Swal.fire('Error', e.message, 'error')
        } )
    }

}

export const startLoginWithEmailPassword = ( email, password ) => {

    return ( dispatch ) => {

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                // console.log(user);
                dispatch(
                    authLogin( user )
                )

            } ) 
            .catch( e => {
                Swal.fire('Error', e.message, 'error')
            } )

    }

}

// export const userCreate = ( {email, firstName, lastName, color} ) => {

//     return async ( dispatch, getState ) => {

//         const uid = getState().auth.uid;

//         const newUser = {
//             name: firstName,
//             lastName: lastName,
//             email: email,
//             color: color 
//         }

//         await db.collection(`users/${uid}/data`).add( newUser )


//     }

// }

