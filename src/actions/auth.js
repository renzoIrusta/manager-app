import { types } from "../types/types";
import { firebase } from '../firebase/config';
import Swal from "sweetalert2";


export const authLogin = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const authLogout = () => ({
    type: types.logout
})

export const startRegisterWithEmailPassword = ( email, password, name, lastname, color ) => {

    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async({ user }) => {

            // await user.updateProfile({
            //     displayName: name,
            //     lastname: lastname, 
            //     color: color 
            // })

            dispatch(
                authLogin( user.uid, user.displayName )
            )

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

                dispatch(
                    authLogin( user.uid, user.displayName )
                )

            } ) 
            .catch( e => {
                Swal.fire('Error', e.message, 'error')
            } )

    }

}