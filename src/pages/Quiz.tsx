import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";
import { bindActionCreators } from "redux";
import { shuffleArray } from "../utilis/shuffle";
import { getQuiz } from "../firebase/getQuiz";

import { QuizQuestion } from "../components/Quiz/QuizQuestion";
import { QuizStatus } from "../components/Quiz/QuizStatus";

import "../scss/_quiz.scss";

export const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const quizObject = useSelector((state: RootState) => state.quiz.quizObject);
    const isQuizEnd = useSelector((state: RootState) => state.quiz.isQuizEnd);
    const id = useSelector((state: RootState) => state.quiz.id);
    const nrOfQuestions = useSelector((state: RootState) => state.quiz.nrOfQuestions);
    const initialTime = useSelector((state: RootState) => state.quiz.initialTime);
    const questions = useSelector((state: RootState) => state.quiz.questions);
    const currentQuestion = useSelector((state: RootState) => state.quiz.currentQuestion);
    const { quizSetQuestions, quizSetQuizObject } = actionCreators;
    const { quizSetCurrentQuestion } = bindActionCreators(actionCreators, dispatch);
    //init fetched quiz object
    useEffect(() => {
        const initQuizObject = async () => {
            if (id !== null) {
                const callback = bindActionCreators(quizSetQuizObject, dispatch);
                await getQuiz(id, callback);
            }
        }
        initQuizObject()
            .catch(console.error);
    }, [quizSetQuizObject, dispatch, id])
    //init questions
    useEffect(() => {
        if (!quizObject) return;
        const randomQuestions = shuffleArray(quizObject.questions).slice(0, nrOfQuestions);
        dispatch(quizSetQuestions(randomQuestions));
    }, [dispatch, quizSetQuestions, quizObject, nrOfQuestions])

    const handleStartButtonClick = () => {
        quizSetCurrentQuestion(questions[0]);
    }

    if (quizObject === null) return null;
    if (currentQuestion === null) return <div className="quiz__container">
        <div className="quiz__start-container container">
            <h3>{quizObject?.title}</h3>
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