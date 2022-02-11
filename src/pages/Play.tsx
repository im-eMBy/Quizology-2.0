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
            <p className="play__category-name">{category.displayName}</p>
            <button onClick={() => handleQuizStart(category, 3, 60)}>Graj</button>
        </div>)
    }

    return <div className="play__container">
        <h2>Wybierz kategorię:</h2>
        <div className="play__categories-container">
            {getCategories()}
        </div>
    </div>
}