import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { getQuizAndListen } from "../../firebase/getQuiz";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";

import { AddQuestion } from "./ManageQuiz/AddQuestion";
import { QuizGeneralInfo } from "./ManageQuiz/QuizGeneralInfo";
import { QuestionsList } from "./ManageQuiz/QuestionsList";

type Props = {
    switchSubpage: Function,
    quizId: string
}

export const ManageQuiz: React.FC<Props> = ({ switchSubpage, quizId }) => {
    const dispatch = useDispatch();
    const { manageQuizSetQuiz } = actionCreators;
    const { subpage, quiz, editedQuestion } = useSelector((state: RootState) => state.manageQuiz);

    useEffect(() => {
        const callback = bindActionCreators(manageQuizSetQuiz, dispatch);
        const unsubscribe = getQuizAndListen(quizId, callback);
        return unsubscribe;
    }, [dispatch, manageQuizSetQuiz, quizId])

    if (!quiz) return null;

    const getContent = () => {
        switch (subpage) {
            case "Questions":
                return <QuestionsList />
            case "EditQuestion":
                return <AddQuestion quizId={quiz.id} questionData={editedQuestion} />
            case "AddQuestion":
                return <AddQuestion quizId={quiz.id} />
        }
    }

    return <>
        <QuizGeneralInfo switchSubpage={switchSubpage} />
        {getContent()}
    </>
}