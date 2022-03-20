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
    const isQuizEnd = useSelector((state: RootState) => state.quiz.isQuizEnd);
    const category = useSelector((state: RootState) => state.quiz.category);
    const nrOfQuestions = useSelector((state: RootState) => state.quiz.nrOfQuestions);
    const initialTime = useSelector((state: RootState) => state.quiz.initialTime);
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const currentQuestion = useSelector((state: RootState) => state.quiz.currentQuestion);
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

    if (questions[0] === undefined) return null;
    if (currentQuestion === null) return <div className="quiz__container">
        <div className="quiz__start-container container">
            <h3>{category?.displayName}</h3>
            <p>Liczba pytań: {nrOfQuestions}</p>
            <p>Czas: {initialTime}s</p>
            <p>Gotowy?</p>
            <button className="quiz__start-button" onClick={() => handleStartButtonClick()}>Start</button>
        </div>
    </div>

    return <div className="quiz__container">
        <QuizStatus />
        {isQuizEnd ? null : <QuizQuestion />}
    </div>
}