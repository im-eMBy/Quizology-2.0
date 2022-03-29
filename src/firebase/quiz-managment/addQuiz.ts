import { db } from "../init";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { Quiz, QuizInfo } from "../../shared/types";

export const addQuiz = async (data: Quiz) => {
    await setDoc(doc(db, "quizzes", data.id), data);
    await addQuizInfo({
        id: data.id,
        author: data.author,
        authorId: data.authorId,
        title: data.title,
        description: data.description
    });
    await addQuizToUserObject(data.authorId, data.id);
}

const addQuizInfo = async (data: QuizInfo) => {
    await updateDoc(doc(db, "general", "quizzes-info"), {
        quizzes: arrayUnion(data)
    });
}
const addQuizToUserObject = async (userId: string, quizId: string) => {
    await updateDoc(doc(db, "users", userId), {
        quizzes: arrayUnion(quizId)
    });
}