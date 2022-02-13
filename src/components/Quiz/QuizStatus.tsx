import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";

import { QuizResultStripe } from "./QuizResultStripe";
import { QuizTimer } from "./QuizTimer";

export const QuizStatus: React.FC = () => {
    const dispatch = useDispatch();
    const { questions, time, nrOfQuestions, currentQuestion, correctCount, incorrectCount, isQuizEnd } = useSelector((state: RootState) => state.quiz);
    const { appSetQuizActive, quizReset } = bindActionCreators(actionCreators, dispatch);

    const percentageOfCorrect: number = correctCount + incorrectCount === 0 ? 0 : Math.round(correctCount * 100 / (correctCount + incorrectCount));
    const questionsLeft = currentQuestion !== null ? nrOfQuestions - questions.indexOf(currentQuestion) - 1 : 0;

    const handleQuizQuit = () => {
        quizReset();
        appSetQuizActive(false);
    }

    return <div className={isQuizEnd ? "container quiz__status quiz__status--end" : "container quiz__status"}>
        <p>Poprawne odpowiedzi: {correctCount}/{correctCount + incorrectCount} ({percentageOfCorrect}%)</p>
        <QuizResultStripe width={percentageOfCorrect} transitionDuration={0.5} />
        <QuizTimer />
        {time === 0 || isQuizEnd !== true ? <p>Pozostałe pytania: {questionsLeft}</p> : null}
        {isQuizEnd ? <button onClick={() => handleQuizQuit()}>Powrót</button> : null}
    </div>
}