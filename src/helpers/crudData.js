import { db } from "../firebase/config";

export const loadData = async ( path ) => {

    const dataSnap = await db.collection(`${ path }`).get()
    const data = [];
    dataSnap.forEach( snapHijo => {
        data.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return data;
    
}

export const updateData = async( collection, id, newData ) => {
    try {
       await db.doc(`${collection}/${id}`).update({ ...newData })
    }
    catch(e) {
        console.log(e);
    }       
}

export const deleteData = async( collection, id ) => {
    try{
        await db.doc(`${collection}/${id}`).delete()
    }
    catch(e){
        console.log(e);
    }
}