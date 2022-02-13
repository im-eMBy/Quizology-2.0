import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { RootState } from "../state/reducers/index";
import { Category } from "../shared/types";

import "../scss/_play.scss";

export const Play: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetQuizActive, quizInit } = bindActionCreators(actionCreators, dispatch);
    const { categories } = useSelector((state: RootState) => state.app);

    const handleQuizStart = (category: Category, nrOfQuestions: number, time: number) => {
        quizInit(category, nrOfQuestions, time);
        appSetQuizActive(true);
    }

    const getCategories = (): JSX.Element[] => {
        return categories.map(category => <div className="container play__category">
            <h3 className="play__category-name">{category.displayName}</h3>
            <button onClick={() => handleQuizStart(category, 5, 30)}>Szybka - 5 pytań | 30s</button>
            <button onClick={() => handleQuizStart(category, 10, 90)}>Normalna - 10 pytań | 90s</button>
            <button onClick={() => handleQuizStart(category, 10, 30)}>Blitz - 10 pytań | 30s</button>
        </div>)
    }

    return <div className="play__container">
        <h2>Wybierz kategorię:</h2>
        <div className="play__categories-container">
            {getCategories()}
        </div>
    </div>
}