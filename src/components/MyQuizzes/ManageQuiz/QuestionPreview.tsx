import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { removeQuestion } from "../../../firebase/quiz-managment/questionsManagment";
import { Question } from "../../../shared/types";
import { actionCreators } from "../../../state/action-creators";
import { RootState } from "../../../state/reducers";

type Props = {
    question: Question
}

export const QuestionPreview: React.FC<Props> = ({ question }) => {
    const dispatch = useDispatch();
    const { manageQuizSetEditedQuestion, manageQuizSetSubpage } = bindActionCreators(actionCreators, dispatch);
    const quiz = useSelector((state: RootState) => state.manageQuiz.quiz);

    const handleQuestionRemove = () => {
        if (!quiz) return;
        removeQuestion(quiz.id, question);
    }
    const handleQuestionEdit = () => {
        manageQuizSetEditedQuestion(question);
        manageQuizSetSubpage("EditQuestion");
    }

    const getCorrect = () => question.correct.map((answer, i) => <li key={i}>{answer}</li>);
    const getIncorrect = () => question.incorrect.map((answer, i) => <li key={i}>{answer}</li>);

    return <div className="manage-quiz__question-preview">
        <p>{question.text}</p>
        <div className="question-preview__answers">
            <ul className="question-preview__correct-list">
                {getCorrect()}
            </ul>
            <ul className="question-preview__incorrect-list">
                {getIncorrect()}
            </ul>
        </div>
        <div className="question-preview__buttons">
            <button onClick={handleQuestionEdit}>Edytuj</button>
            <button onClick={handleQuestionRemove}>Usuń</button>
        </div>

    </div>
}