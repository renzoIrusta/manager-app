
import Swal from "sweetalert2";
import { startRegisterWithEmailPassword } from "../actions/auth";
import { storage } from "../firebase/config"



export const uploadImage = ( uid, image, data) => {

    return ( dispatch ) => {
        
        const uploadTask = storage.ref(`images/${uid}/${image.name}`).put(image);
        console.log(uploadTask);
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
                storage.ref(`images/${uid}/${image.name}`).getDownloadURL()
                .then( url => {
                    dispatch( startRegisterWithEmailPassword(data, url) ) 
                } ) 
            }
        )
    }
}

export const asyncUploadImage = async( uid, image, setUrl ) => {
    uploadImage( uid, image, setUrl )
}