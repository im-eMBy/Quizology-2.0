import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./init";

export const getQuiz = async (quizId: string, callback: Function) => {

    const quizDoc = await getDoc(doc(db, "quizzes", quizId));

    if (quizDoc.exists()) {
        callback(quizDoc.data());
    }
    else {
        console.log("No such document!");
    }
}

export const getQuizAndListen = (quizId: string, callback: Function) => {
    const unsub = onSnapshot(doc(db, "quizzes", quizId), doc => callback(doc.data()));
    return unsub
}