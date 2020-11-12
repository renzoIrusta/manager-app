import { types } from "../types/types";
import Swal from "sweetalert2";
import { db } from "../firebase/config";
import { searchData } from "../helpers/searchData";

export const addCutomersToStore = (customers) => ({
    type: types.customersFinded,
    payload: customers
})

export const customersSearcher = (path, key, value) => {

    return async (dispatch) => {
        console.log('searcher');
        db.collection("foot").where("name", "==", "renzo")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
        // dispatch(addCutomersToStore(data))

    }

}

