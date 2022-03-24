import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db } from "./init";
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

export const getQuestions = async (category: string) => {
    const docSnap = await getDoc(doc(db, "questions", category));
    if (docSnap.exists()) {
        const questions = docSnap.data().questions;
        return questions;
    }
}