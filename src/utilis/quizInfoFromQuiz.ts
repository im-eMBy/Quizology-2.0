import { QuizInfo, Quiz } from "../shared/types";

export const quizInfoFromQuiz = (quiz: Quiz): QuizInfo => {
    return {
        id: quiz.id,
        title: quiz.title,
        description: quiz.description,
        author: quiz.author,
        authorId: quiz.authorId,
        isVisible: quiz.isVisible,
    }
}