import { QuizInfo } from "../../shared/types";
import { removeQuiz } from "../../firebase/quiz-managment/removeQuiz";
import { getQuizzesInfo } from "../../firebase/quizzesInfo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/action-creators";
import { SafeButton } from "../shared/SafeButton";

type Props = {
    quizInfo: QuizInfo,
    switchSubpage: Function,
    setManagedQuiz: Function
}

export const QuizPreview: React.FC<Props> = ({ quizInfo, switchSubpage, setManagedQuiz }) => {
    const dispatch = useDispatch();
    const { appSetQuizzesInfo } = bindActionCreators(actionCreators, dispatch);

    const handleManageClick = async (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setManagedQuiz(ev.currentTarget.value);
        switchSubpage("Manage");
    }
    const handleRemoveClick = async () => {
        await removeQuiz(quizInfo);
        getQuizzesInfo(appSetQuizzesInfo);
    }

    return <div key={quizInfo.id} className="quiz-list__quiz-preview">
        <h3>{quizInfo.title}</h3>
        <p>{quizInfo.description}</p>
        <div className="quiz-preview__buttons">
            <button value={quizInfo.id} onClick={handleManageClick}>Zarządzaj</button>
            <SafeButton onClick={handleRemoveClick}>Usuń Quiz</SafeButton>
        </div>
    </div>
}