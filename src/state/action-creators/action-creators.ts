import { ActionTypes, AppAction, SuggestAction, AdminAction, QuizAction, ManageQuizAction } from "../action-types";
import { Dispatch } from "redux";
import { Question, Quiz, QuizInfo, UserObject } from "../../shared/types";

//app
export const appSetPage = (page: string) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_PAGE,
            page: page
        })
    }
}
export const appSetUser = (user: UserObject | null) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_USER,
            user: user
        })
    }
}
export const appSetQuizzesInfo = (quizzesInfo: QuizInfo[]) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_QUIZZES_INFO,
            quizzesInfo: quizzesInfo
        })
    }
}
export const appSetCategories = (categories: []) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_CATEGORIES,
            categories: categories
        })
    }
}
export const appSetQuizActive = (isActive: boolean) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_QUIZ_ACTIVE,
            isActive: isActive
        })
    }
}
//manage quiz
export const manageQuizSetQuiz = (quiz: Quiz) => {
    return (dispatch: Dispatch<ManageQuizAction>) => {
        dispatch({
            type: ActionTypes.MANAGE_QUIZ_SET_QUIZ,
            quiz: quiz
        })
    }
}
export const manageQuizSetSubpage = (subpage: string) => {
    return (dispatch: Dispatch<ManageQuizAction>) => {
        dispatch({
            type: ActionTypes.MANAGE_QUIZ_SET_SUBPAGE,
            subpage: subpage
        })
    }
}
export const manageQuizSetEditedQuestion = (question: Question) => {
    return (dispatch: Dispatch<ManageQuizAction>) => {
        dispatch({
            type: ActionTypes.MANAGE_QUIZ_SET_EDITED_QUESTION,
            question: question
        })
    }
}
//suggest
export const suggestSetIsValid = (isValid: boolean) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_IS_VALID,
            isValid: isValid
        })
    }
}
export const suggestSetCategory = (category: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_CATEGORY,
            category: category
        })
    }
}
export const suggestSetDisplayedCategory = (displayedCategory: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY,
            displayedCategory: displayedCategory
        })
    }
}
export const suggestSetText = (text: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_TEXT,
            text: text
        })
    }
}
export const suggestAddCorrect = (correct: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_ADD_CORRECT,
            correct: correct
        })
    }
}
export const suggestRemoveCorrect = (correct: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_REMOVE_CORRECT,
            correct: correct
        })
    }
}
export const suggestAddIncorrect = (incorrect: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_ADD_INCORRECT,
            incorrect: incorrect
        })
    }
}
export const suggestRemoveIncorrect = (incorrect: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_REMOVE_INCORRECT,
            incorrect: incorrect
        })
    }
}
export const suggestResetForm = () => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_RESET_FORM
        })
    }
}
//quiz
export const quizInit = (id: string, nrOfQuestions: number, time: number) => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_INIT,
            id: id,
            time: time,
            nrOfQuestions: nrOfQuestions
        })
    }
}
export const quizSetQuizObject = (quiz: Quiz) => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_SET_QUIZ_OBJECT,
            quiz: quiz
        })
    }
}
export const quizSetQuestions = (questions: Question[]) => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_SET_QUESTIONS,
            questions: questions
        })
    }
}
export const quizSetCurrentQuestion = (currentQuestion: Question) => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_SET_CURRENT_QUESTION,
            currentQuestion: currentQuestion
        })
    }
}
export const quizSetIsAnswerClicked = (isClicked: boolean) => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_SET_IS_ANSWER_CLICKED,
            isClicked: isClicked
        })
    }
}
export const quizAddCorrect = () => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_ADD_CORRECT
        })
    }
}
export const quizAddIncorrect = () => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_ADD_INCORRECT
        })
    }
}
export const quizTakeTime = () => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_TAKE_TIME
        })
    }
}
export const quizEnd = () => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_END
        })
    }
}
export const quizReset = () => {
    return (dispatch: Dispatch<QuizAction>) => {
        dispatch({
            type: ActionTypes.QUIZ_RESET
        })
    }
}
//admin
export const adminSetSubPage = (subpage: "Propositions" | "Categories" | "AddCategory") => {
    return (dispatch: Dispatch<AdminAction>) => {
        dispatch({
            type: ActionTypes.ADMIN_SET_SUB_PAGE,
            subpage: subpage
        })
    }
}
export const adminSetPassword = (password: string) => {
    return (dispatch: Dispatch<AdminAction>) => {
        dispatch({
            type: ActionTypes.ADMIN_SET_PASSWORD,
            password: password
        })
    }
}