import { types } from "../types/types";
import Swal from "sweetalert2";
import { db, dbSql, storage } from "../firebase/config";
import { generateKeywords } from "../helpers/keywordGenerator";

export const addCutomersToStore = (customers) => ({
    type: types.customersFinded,
    payload: customers
})

export const customersSearcher = ( value ) => {

    return async (dispatch) => {
        
        // const query = 'SELECT * FROM customers WHERE `data.name` LIKE';
        // dbSql.query(`${query} "${value.toLowerCase()}%"`)
        db.collection('customers').where( 'keywords', 'array-contains', value ).get()
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    data.push({
                        id: doc.id,
                        ...doc.data()
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

    let keywords = generateKeywords( customer.firstName, customer.lastName );
   
    return async ( dispatch ) => {

        try {
            const newCustomer = await db.collection('customers').add({ data: customer, keywords })
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
        
        const uploadTask = storage.ref(`customersImages/${id}/${image.name}`).put(image);
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
                storage.ref(`customersImages/${id}/${image.name}`).getDownloadURL()
                .then( async url => {
                
                    await db.collection('customers').doc(`${id}`).update({data: { ...customer, photoUrl: url }})
                    Swal.fire('Cliente creado', customer.name, 'success')
                } ) 
            }
        )

    }

}