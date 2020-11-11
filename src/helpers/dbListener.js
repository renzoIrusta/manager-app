import { db } from "../firebase/config";

export const dbListener = ( path ) => {

    const docs = [];

    db.collection(path).onSnapshot((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
          docs.push({ id: doc.id, ...doc.data() });
        });

      });

    return docs;

}