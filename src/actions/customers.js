import { types } from "../types/types";
import Swal from "sweetalert2";
import { db, storage } from "../firebase/config";
import { generateKeywords } from "../helpers/keywordGenerator";
import { loadData } from "../helpers/crudData";
import { prepareDate } from "../helpers/prepareDate";

export const addCutomersToStore = (customers) => ({
    type: types.customersFound,
    payload: customers
})

export const customerSelect = (customer) => ({
    type: types.customerSelected,
    payload: customer
})

export const addServicesToStore = (services) => ({
    type: types.customerServices,
    payload: services
})


export const customersSearcher = (value) => {

    return async (dispatch) => {

        // const query = 'SELECT * FROM customers WHERE `data.name` LIKE';
        // dbSql.query(`${query} "${value.toLowerCase()}%"`)
        db.collection('customers').where('keywords', 'array-contains', value).get()
            .then(function (querySnapshot) {
                const data = [];
                querySnapshot.forEach(function (doc) {
                    data.push({
                        id: doc.id,
                        ...doc.data()
                    })
                });
                dispatch(addCutomersToStore(data))
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });

    }

}

export const customerCreate = (customer, file) => {

    let keywords = generateKeywords(customer.firstName, customer.lastName);

    return async (dispatch) => {

        try {
            const newCustomer = await db.collection('customers').add({ data: customer, keywords })
            if (file) {
                dispatch(customerPhoto(newCustomer.id, file, customer))
            } else {
                Swal.fire('Cliente creado', customer.name, 'success')
            }
        } catch (error) {
            Swal.fire(error)
        }
    }

}

export const customerPhoto = (id, image, customer) => {

    return async (dispatch) => {

        const uploadTask = storage.ref(`customersImages/${id}/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {
                return (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            error => {
                Swal.fire('error', 'Falló la carga de la imagen', 'error')
            },
            () => {
                Swal.close();
                storage.ref(`customersImages/${id}/${image.name}`).getDownloadURL()
                    .then(async url => {

                        await db.collection('customers').doc(`${id}`).update({ data: { ...customer, photoUrl: url } })
                        Swal.fire('Cliente creado', customer.name, 'success')
                    })
            }
        )

    }

}

export const customerCreateService = (service, customerId, file) => {

    return async ( dispatch ) => {
        try {
            const newService = await db.collection(`customers/${customerId}/services`).add(service)
            if (file) {
                dispatch(customerServicePhoto(customerId, newService, file))
            } else {
                Swal.fire('Servicio creado', service.name, 'success')
            }
        } catch (error) {
            Swal.fire(error)
        }
    }

}

export const customerServicePhoto = (customerId, service, image) => {

    return async (dispatch) => {

        const uploadTask = storage.ref(`customersImages/${customerId}/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            snapshot => {
                return (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            error => {
                Swal.fire('error', 'Falló la carga de la imagen', 'error')
            },
            () => {
                Swal.close();
                storage.ref(`customersImages/${customerId}/${image.name}`).getDownloadURL()
                    .then(async url => {

                        await db.collection(`customers/${customerId}/services`).doc(service.id).update({ servicePhotoUrl: url })
                        Swal.fire('Servicio creado', service.name, 'success')
                    })
            }
        )

    }

}

export const customerGetServices = (customerId) => {

    return async (dispatch) => {
        try {
            const services = await loadData(`customers/${customerId}/services`)
            const servicesDate = prepareDate(services)
            dispatch(addServicesToStore(servicesDate))
        } catch (error) {
            Swal.fire(error)
        }
    }

}

