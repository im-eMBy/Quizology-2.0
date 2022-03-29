import { Question } from "../../shared/types";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../init";

export const addQuestion = (quizId: string, question: Question) => {
    updateDoc(doc(db, "quizzes", quizId), {
        questions: arrayUnion(question)
    })
}

export const removeQuestion = (quizId: string, question: Question) => {
    updateDoc(doc(db, "quizzes", quizId), {
        questions: arrayRemove(question)
    })
}