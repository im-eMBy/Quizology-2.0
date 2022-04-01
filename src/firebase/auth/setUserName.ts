import { updateDoc, doc } from "firebase/firestore"
import { db } from "../init"

export const setUserName = async (uid: string, name: string) => {
    await updateDoc(doc(db, "users", uid), {
        name: name
    })
}