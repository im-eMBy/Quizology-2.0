import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../../state/action-creators';
import { bindActionCreators } from 'redux';
import { useRef, useState, useEffect, FormEvent } from "react";
import { RootState } from "../../state/reducers";
import { Category } from "../../shared/types";
import { addProposition } from "../../firebase/propositions";

export const SuggestForm: React.FC = () => {
    const dispatch = useDispatch();
    const { suggestSetCategory, suggestSetDisplayedCategory } = actionCreators;
    const { suggestSetText, suggestAddCorrect, suggestAddIncorrect, suggestResetForm } = bindActionCreators(actionCreators, dispatch);
    const { isValid, proposition } = useSelector((state: RootState) => state.suggest);
    const { text, displayedCategory, category, correct, incorrect } = proposition;
    const { categories } = useSelector((state: RootState) => state.app);

    const categorySelectElement = useRef<HTMLSelectElement>(null);
    const correctInputElement = useRef<HTMLInputElement>(null);
    const incorrectInputElement = useRef<HTMLInputElement>(null);

    const [newCorrect, setNewCorrect] = useState<string>("");
    const [newIncorrect, setNewIncorrect] = useState<string>("");

    useEffect(() => {
        if (categories.length === 0) return;
        if (displayedCategory === null || category === null) {
            dispatch(suggestSetDisplayedCategory(categories[0].displayName));
            dispatch(suggestSetCategory(categories[0].name));
        }
        if (category !== null && categorySelectElement.current) categorySelectElement.current.value = category;
    }, [categories, category, displayedCategory, dispatch, suggestSetCategory, suggestSetDisplayedCategory]) 

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        addProposition({
            category: category,
            displayedCategory: displayedCategory,
            text: text,
            correct: correct,
            incorrect: incorrect
        })
        suggestResetForm();
    }
    const handleCategoryChange = () => {
        if (categorySelectElement && categorySelectElement.current) {
            dispatch(suggestSetCategory(categorySelectElement.current.value));
            dispatch(suggestSetDisplayedCategory(categorySelectElement.current.options[categorySelectElement.current.selectedIndex].text));
        }
    }
    const handleAddCorrect = () => {
        const answer = newCorrect.trim();
        if (answer === "") return;
        suggestAddCorrect(answer);
        setNewCorrect("");
        if (correctInputElement && correctInputElement.current) correctInputElement.current.focus();
    }
    const handleAddIncorrect = () => {
        const answer = newIncorrect.trim();
        if (answer === "") return;
        suggestAddIncorrect(answer);
        setNewIncorrect("");
        if (incorrectInputElement && incorrectInputElement.current) incorrectInputElement.current.focus();
    }

    const getCategoriesList = (): JSX.Element[] => {
        return categories.map((category: Category) => {
            return <option key={category.name} value={category.name}>{category.displayName}</option>
        })
    }

    return <form className='suggest__form container' onSubmit={handleSubmit}>
        <label htmlFor="suggest-category">Kategoria:</label>
        <select ref={categorySelectElement} id="suggest-category" onChange={() => handleCategoryChange()}>
            {getCategoriesList()}
        </select>
        <label htmlFor="suggest-text">Treść pytania:</label>
        <textarea id="suggest-text" cols={20} rows={8} value={text}
            onChange={ev => suggestSetText(ev.target.value)} />
        <label htmlFor="suggest-add-correct">Dodaj prawidłową odpowiedź:</label>
        <input ref={correctInputElement} id="suggest-add-correct" type="text" value={newCorrect} onChange={ev => setNewCorrect(ev.target.value)} />
        <button onClick={handleAddCorrect} type="button" className="suggest__add-button">Dodaj</button>
        <label htmlFor="suggest-add-incorrect">Dodaj nieprawidłową odpowiedź:</label>
        <input ref={incorrectInputElement} id="suggest-add-incorrect" type="text" value={newIncorrect} onChange={ev => setNewIncorrect(ev.target.value)} />
        <button onClick={handleAddIncorrect} type="button" className="suggest__add-button">Dodaj</button>
        <button type="submit" disabled={isValid ? false : true} className={isValid ? "suggest__send-button suggest__send-button--active" : "suggest__send-button"}>Wyślij pytanie</button>
    </form>
}


