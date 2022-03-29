import { doc, getDoc } from "firebase/firestore";
import { db } from "./init";

export const getQuizzesInfo = async (callback: Function) => {

    const quizzesDoc = await getDoc(doc(db, "general", "quizzes-info"));

    if (quizzesDoc.exists()) {
        callback(quizzesDoc.data().quizzes);
    } else {
        console.log("No such document!");
    }
}