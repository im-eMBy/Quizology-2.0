import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../index";
import { Question, QuestionProposition } from "../shared/types";

export const addQuestion = (proposition: QuestionProposition) => {
    const question: Question = {
        text: proposition.text,
        correct: proposition.correct,
        incorrect: proposition.incorrect
    }
    if (proposition.category === null) {
        throw console.error("Cannot add question with category equal to null.");
    }
    if (proposition.category !== null) {
        updateDoc(doc(db, "questions", proposition.category), {
            questions: arrayUnion(question)
        })
    }
}