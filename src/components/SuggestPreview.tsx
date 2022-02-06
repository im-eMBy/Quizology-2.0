import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../state/reducers";

import deleteIcon from "../icons/delete-icon.png";

export const SuggestPreview: React.FC = () => {
    const dispatch = useDispatch();
    const { suggestRemoveCorrect, suggestRemoveIncorrect } = bindActionCreators(actionCreators, dispatch);
    const { text, displayedCategory, correct, incorrect } = useSelector((state: RootState) => state.suggest);

    const getCorrectAnswers = () => {
        return correct.map((answer: string, i: number) => {
            return <div className="preview__answer" key={i + answer}>
                <span>{answer}</span>
                <button className="preview__remove-answer-button" onClick={() => suggestRemoveCorrect(answer)}>
                    <img src={deleteIcon} alt="Usuń" />
                </button>
            </div>
        })
    }
    const getIncorrectAnswers = () => {
        return incorrect.map((answer: string, i: number) => {
            return <div className="preview__answer" key={i + answer}>
                <span>{answer}</span>
                <button className="preview__remove-answer-button" onClick={() => suggestRemoveIncorrect(answer)}>
                    <img src={deleteIcon} alt="Usuń" />
                </button>
            </div>
        })
    }

    return <div className='suggest__preview'>
        <h2>Kategoria: {displayedCategory}</h2>
        <p className='preview__text'>{text}</p>
        <div className="preview__answers-container">
            <h2>Prawidłowe odpowiedzi</h2>
            {getCorrectAnswers()}
        </div>
        <div className="preview__answers-container">
            <h2>Nieprawidłowe odpowiedzi</h2>
            {getIncorrectAnswers()}
        </div>
    </div>
}