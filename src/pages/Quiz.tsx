import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";
import { bindActionCreators } from "redux";
import { getQuestions } from "../firebase/questions";
import { shuffleArray } from "../utilis/shuffle";

import { QuizQuestion } from "../components/Quiz/QuizQuestion";
import { QuizStatus } from "../components/Quiz/QuizStatus";

import "../scss/_quiz.scss";

export const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const { isQuizEnd, category, nrOfQuestions, time, questions, currentQuestion } = useSelector((state: RootState) => state.quiz);
    const { quizSetQuestions } = actionCreators;
    const { quizSetCurrentQuestion } = bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        const initQuestions = async () => {
            if (category !== null) {
                const questions = await getQuestions(category.name);
                const randomQuestions = shuffleArray(questions).slice(0, nrOfQuestions);
                dispatch(quizSetQuestions(randomQuestions));
            }
        }
        initQuestions()
            .catch(console.error);
    }, [quizSetQuestions, dispatch, category, nrOfQuestions])

    const handleStartButtonClick = () => {
        quizSetCurrentQuestion(questions[0]);
    }

    if (currentQuestion === null) return <div className="quiz__container">
        <div className="quiz__start-container container">
            <h3>{category?.displayName}</h3>
            <p>Liczba pytań: {nrOfQuestions}</p>
            <p>Czas: {time}s</p>
            <p>Gotowy?</p>
            <button className="quiz__start-button" onClick={() => handleStartButtonClick()}>Start</button>
        </div>
    </div>

    return <div className="quiz__container">
        <QuizStatus />
        {isQuizEnd ? null : <QuizQuestion />}
    </div>
}