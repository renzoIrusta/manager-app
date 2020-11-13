import { types } from "../types/types";
import Swal from "sweetalert2";
import { db, dbSql, storage } from "../firebase/config";

export const addCutomersToStore = (customers) => ({
    type: types.customersFinded,
    payload: customers
})

export const customersSearcher = ( value ) => {

    return async (dispatch) => {
        
        const query = 'SELECT * FROM users WHERE `data.name` LIKE';
        dbSql.query(`${query} "${value.toLowerCase()}%"`)
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    data.push({
                        id: doc.id,
                        ...doc
                    })
                });
               dispatch( addCutomersToStore( data ))
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

    }

}

export const customerCreate = ( customer, file ) => {
   
    return async ( dispatch ) => {

        try {
            const newCustomer = await db.collection('customers').add({data: customer})
            if( file ){
                    dispatch( customerPhoto( newCustomer.id, file, customer) )        
            }else{
               Swal.fire('Cliente creado', customer.name, 'success') 
            }   
        } catch (error) {
            Swal.fire(error)
        }
    }
    
}

export const customerPhoto = ( id, image, customer ) => {

    return async( dispatch ) => {
        
        const uploadTask = storage.ref(`images/${id}/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            error => {
                Swal.fire('error', 'Falló la carga de la imagen', 'error')
            },
            () => {
                Swal.close();
                storage.ref(`images/${id}/${image.name}`).getDownloadURL()
                .then( async url => {
                
                    await db.collection('customers').doc(`${id}`).update({data: { ...customer, photoUrl: url }})
                    Swal.fire('Cliente creado', customer.name, 'success')
                } ) 
            }
        )

    }

}