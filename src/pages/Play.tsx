import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { RootState } from "../state/reducers/index";

import "../scss/_play.scss";

export const Play: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetQuizActive, quizInit } = bindActionCreators(actionCreators, dispatch);
    const { quizzesInfo } = useSelector((state: RootState) => state.app);

    const handleQuizStart = (id: string, nrOfQuestions: number, time: number) => {
        quizInit(id, nrOfQuestions, time);
        appSetQuizActive(true);
    }

    const getCategories = (): (JSX.Element | null)[] => {
        return quizzesInfo.map(quiz => {
            if (!quiz.isVisible) return null;
            return <div key={quiz.title} className="play__category">
                <h2 className="play__category-name">{quiz.title}</h2>
                <p>{quiz.description}</p>
                <button onClick={() => handleQuizStart(quiz.id, 5, 30)}>Szybka - 5 pytań | 30s</button>
                <button onClick={() => handleQuizStart(quiz.id, 10, 90)}>Normalna - 10 pytań | 90s</button>
                <button onClick={() => handleQuizStart(quiz.id, 10, 30)}>Blitz - 10 pytań | 30s</button>
            </div>
        })
    }

    return <>
        <div className="play__container container">
            <h1>Wybierz kategorię:</h1>
            <div className="play__categories-container">
                {getCategories()}
            </div>
        </div>
    </>

}