import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../state/reducers";

import deleteIcon from "../assets/icons/delete-icon.png";

export const SuggestPreview: React.FC = () => {
    const dispatch = useDispatch();
    const { suggestRemoveCorrect, suggestRemoveIncorrect } = bindActionCreators(actionCreators, dispatch);
    const { text, displayedCategory, correct, incorrect } = useSelector((state: RootState) => state.suggest);

    const getCorrectAnswers = (): JSX.Element[] => {
        return correct.map((answer: string, i: number) => {
            return <div className="preview__answer" key={i + answer}>
                <span>{answer}</span>
                <button className="preview__remove-answer-button" onClick={() => suggestRemoveCorrect(answer)}>
                    <img src={deleteIcon} alt="Usuń" />
                </button>
            </div>
        })
    }
    const getIncorrectAnswers = (): JSX.Element[] => {
        return incorrect.map((answer: string, i: number) => {
            return <div className="preview__answer preview__answer--incorrect" key={i + answer}>
                <span>{answer}</span>
                <button className="preview__remove-answer-button" onClick={() => suggestRemoveIncorrect(answer)}>
                    <img src={deleteIcon} alt="Usuń" />
                </button>
            </div>
        })
    }

    return <div className='suggest__preview container'>
        <h2>Kategoria: {displayedCategory}</h2>
        <p className='preview__text'>{text}</p>
        <h2>Prawidłowe odpowiedzi</h2>
        <div className="preview__answers-container">
            {getCorrectAnswers()}
        </div>
        <h2>Nieprawidłowe odpowiedzi</h2>
        <div className="preview__answers-container">
            {getIncorrectAnswers()}
        </div>
    </div>
}