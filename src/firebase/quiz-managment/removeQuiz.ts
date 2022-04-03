import { doc, deleteDoc, updateDoc, arrayRemove } from "firebase/firestore";
import { QuizInfo } from "../../shared/types";
import { db } from "../init";

export const removeQuiz = async (quiz: QuizInfo) => {
    await removeQuizFromUserObject(quiz);
    await removeQuizInfo(quiz);
    await deleteDoc(doc(db, "quizzes", quiz.id));
}

const removeQuizInfo = async (quiz: QuizInfo) => {
    await updateDoc(doc(db, "general", "quizzes-info"), {
        quizzes: arrayRemove(quiz)
    });
}

const removeQuizFromUserObject = async (quiz: QuizInfo) => {
    await updateDoc(doc(db, "users", quiz.authorId), {
        quizzes: arrayRemove(quiz.id)
    });
}