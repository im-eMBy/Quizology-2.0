import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/action-creators";
import { RootState } from "../../../state/reducers";
import { QuestionPreview } from "./QuestionPreview";

export const QuestionsList = () => {
    const dispatch = useDispatch();
    const { manageQuizSetSubpage } = bindActionCreators(actionCreators, dispatch);
    const quiz = useSelector((state: RootState) => state.manageQuiz.quiz);

    const getQuestions = () => quiz?.questions.map((question, i) => <QuestionPreview key={i} question={question} />);

    return <div className="manage-quiz__questions container">
        {getQuestions()}
        <button onClick={() => manageQuizSetSubpage("AddQuestion")}>Dodaj pytanie</button>
    </div>
}