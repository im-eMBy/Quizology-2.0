import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";
import { shuffleArray } from "../../utilis/shuffle";
import { wait } from "../../utilis/wait";

import { correctAnimation, incorrectAnimation } from "./answerAnimations";

export const QuizQuestion: React.FC = () => {
    const dispatch = useDispatch();
    const { questions, currentQuestion, isAnswerClicked } = useSelector((state: RootState) => state.quiz);
    const { quizSetIsAnswerClicked, quizSetCurrentQuestion, quizAddCorrect, quizAddIncorrect, quizEnd } = bindActionCreators(actionCreators, dispatch);
    const [answers, setAnswers] = useState<string[]>([]);
    useEffect(() => {
        if (currentQuestion !== null) {
            const { correct, incorrect } = currentQuestion;
            const answersArr: string[] = [];
            answersArr.push(shuffleArray(correct)[0]);
            shuffleArray(incorrect).slice(0, 3).forEach((incorrect: string) => answersArr.push(incorrect))
            setAnswers(shuffleArray(answersArr));
        }
    }, [currentQuestion])
    if (currentQuestion === null) return null;
    const { text, correct, incorrect } = currentQuestion;

    const handleAnswerClick = async (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        quizSetIsAnswerClicked(true);
        const answerClicked = ev.target as HTMLButtonElement;
        answerClicked.style.backgroundColor = "#D7AF70";
        await wait(800);
        if (correct.includes(answerClicked.value)) {
            quizAddCorrect();
            await correctAnimation(answerClicked);
        }
        if (incorrect.includes(answerClicked.value)) {
            quizAddIncorrect();
            await incorrectAnimation(answerClicked);
        }
        if (questions.indexOf(currentQuestion) === questions.length - 1) {
            quizEnd();
            return
        }
        quizSetCurrentQuestion(questions[questions.indexOf(currentQuestion) + 1]);
        quizSetIsAnswerClicked(false);
    }

    const getAnswers = (): JSX.Element[] => {
        return answers.map((answer: string, i) => <button key={`${answer}${i}`} value={answer} onClick={isAnswerClicked ? undefined : (ev) => handleAnswerClick(ev)}>{answer}</button>)
    }

    return <div className="quiz__question container">
        <p>{text}</p>
        <div className="quiz__answers">
            {getAnswers()}
        </div>
    </div>
}