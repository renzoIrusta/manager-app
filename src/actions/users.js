import Swal from "sweetalert2";
import { db, storage } from "../firebase/config";
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
        Swal.fire('Perfil registrado', firstName, 'success')
        dispatch( addUserToStore( newUser, uid ) )

    }

}

export const userCreateWithPhoto = ( uid, email, firstName, lastName, color, phone, image ) => {

    return async( dispatch ) => {
        
        const uploadTask = storage.ref(`images/${uid}/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            error => {
                Swal.fire('error', 'Falló la carga de la imagen', 'error')
            },
            () => {
                Swal.close();
                storage.ref(`images/${uid}/${image.name}`).getDownloadURL()
                .then( async url => {
                   
                    const newUser = {
                        name: firstName,
                        lastName: lastName,
                        email: email,
                        color: color,
                        phone: phone,
                        photoUrl: url 
                    }
            
                    await db.collection('users').doc(`${uid}`).set({data: newUser})

                    Swal.fire('Perfil registrado', firstName, 'success')

                    dispatch( addUserToStore( newUser, uid ) ) 
                } ) 
            }
        )

    }

}

export const addUserToStore = ( {email, name, lastName, color, phone, photoUrl}, uid ) => ({
    type: types.createUser,
    payload: {
        uid: uid,
        name: name,
        lastName: lastName,
        email: email,
        color: color,
        phone: phone,
        photoUrl: photoUrl
    }
})

