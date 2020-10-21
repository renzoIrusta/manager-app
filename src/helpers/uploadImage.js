import Swal from "sweetalert2";
import { storage } from "../firebase/config"



export const uploadImage = ( uid, image ) => {

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
            storage.ref(`images/${uid}/${image.name}`).getDownloadURL()
            .then( url => {
                console.log(url);
            } )
        }
    )

}