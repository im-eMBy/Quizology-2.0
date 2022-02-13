import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";
import { getQuestions } from "../firebase/questions";
import { shuffleArray } from "../utilis/shuffle";

import { QuizQuestion } from "../components/QuizQuestion";

import "../scss/_quiz.scss";
import { bindActionCreators } from "redux";

export const Quiz: React.FC = () => {
    const dispatch = useDispatch();
    const { category, nrOfQuestions, time, questions, currentQuestion } = useSelector((state: RootState) => state.quiz);
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


    if (currentQuestion === null) return <div className="quiz__container container">
        <p>{category?.displayName} | {nrOfQuestions} pytań | {time}s</p>
        <button className="quiz__start-button" onClick={() => handleStartButtonClick()}>Start</button>
    </div>

    return <div className="quiz__container">
        <QuizQuestion />
    </div>
}