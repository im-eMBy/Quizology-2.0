import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
import { Quiz, QuizInfo } from "../../shared/types"
import { quizInfoFromQuiz } from "../../utilis/quizInfoFromQuiz";
import { db } from "../init"

export const switchVisibility = async (isVisible: boolean, quiz: Quiz) => {
    await updateDoc(doc(db, "quizzes", quiz.id), {
        isVisible: isVisible
    });
    const quizInfo: QuizInfo = quizInfoFromQuiz(quiz);
    await updateDoc(doc(db, "general", "quizzes-info"), {
        quizzes: arrayRemove(quizInfo)
    });
    await updateDoc(doc(db, "general", "quizzes-info"), {
        quizzes: arrayUnion({
            ...quizInfo,
            isVisible: isVisible
        })
    });
}