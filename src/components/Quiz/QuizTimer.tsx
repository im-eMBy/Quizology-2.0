import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";
import { QuizResultStripe } from "./QuizResultStripe";

export const QuizTimer: React.FC = () => {
    const dispatch = useDispatch();
    const { time, initialTime, isAnswerClicked, currentQuestion } = useSelector((state: RootState) => state.quiz);
    const { quizTakeTime } = actionCreators;
    const [timerId, setTimerId] = useState<NodeJS.Timer>();
    //starting timer
    useEffect(() => {
        if (currentQuestion !== null && isAnswerClicked === false) {
            const intervalId = setInterval(() => dispatch(quizTakeTime()), 1000);
            setTimerId(intervalId);
        }
    }, [currentQuestion, isAnswerClicked, quizTakeTime, dispatch])
    //stoping timer
    useEffect(() => {
        if (isAnswerClicked === true && timerId !== undefined) {
            clearInterval(timerId)
        }
        return () => {
            if (timerId !== undefined) clearInterval(timerId)
        }
    }, [isAnswerClicked, timerId])

    return <>
        <p>Pozostały czas: {time}s</p>
        <QuizResultStripe width={Math.round(time / initialTime * 100)} transitionDuration={1} />
    </>
}