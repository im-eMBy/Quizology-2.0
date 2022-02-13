import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";
import { shuffleArray } from "../utilis/shuffle";

export const QuizQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const { questions, currentQuestion } = useSelector((state: RootState) => state.quiz);
    const { quizSetCurrentQuestion } = bindActionCreators(actionCreators, dispatch);
    if (currentQuestion === null) return null;
    const { text, correct, incorrect } = currentQuestion;

    const handleAnswerClick = () => {
        quizSetCurrentQuestion(questions[questions.indexOf(currentQuestion) + 1]);
    }


    const getAnswers = (): JSX.Element[] => {
        const answers = [];
        answers.push(shuffleArray(correct)[0]);
        shuffleArray(incorrect).slice(0, 3).forEach(incorrect => answers.push(incorrect))
        return shuffleArray(answers).map(answer => <button onClick={() => handleAnswerClick()}>{answer}</button>)
    }

    return <div className="quiz__question">
        <p>{text}</p>
        <div className="quiz__answers">
            {getAnswers()}
        </div>
    </div>
}