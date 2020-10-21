import { db } from "../firebase/config";

export const loadData = async ( path ) => {

    const dataSnap = await db.collection(`${ path }`).get()
    const data = [];

    dataSnap.forEach( snapHijo => {
        data.push({
            idData: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return data;

}

export const configInfo = async( uid, idData ) => {
    await db.doc(`users/${uid}/data/${idData}`).update({
        color: "naranjita",
        email: "arrobita",
        name: "lalala"
    })
}