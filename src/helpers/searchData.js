import { db } from "../firebase/config";


export const searchData = async ( path, key, value ) => {


    db.collection("users").where("name", "==", 'renzo')
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    // const dataSnap = await db.collection(`${ path }`).where( key, '==', value ).get();
    // const data = [];
    // dataSnap.forEach( snapHijo => {
    //     console.log(snapHijo.data());
    //     data.push({
    //         id: snapHijo.id,
    //         ...snapHijo.data()
    //     })
    // });
    // console.log(data);
    // return data;
    
}