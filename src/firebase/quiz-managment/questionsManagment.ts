import { Question } from "../../shared/types";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../init";

export const addQuestion = async (quizId: string, question: Question) => {
    await updateDoc(doc(db, "quizzes", quizId), {
        questions: arrayUnion(question)
    })
}

export const removeQuestion = async (quizId: string, question: Question) => {
    await updateDoc(doc(db, "quizzes", quizId), {
        questions: arrayRemove(question)
    })
}

export const editQuestion = async (quizId: string, initialQuestion: Question, editedQuestion: Question) => {
    await removeQuestion(quizId, initialQuestion);
    await addQuestion(quizId, editedQuestion);
}