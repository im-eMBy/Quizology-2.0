import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useRef, useState, useEffect } from "react";
import { RootState } from "../state/reducers";
import { Category } from "../shared/types";

export const SuggestForm: React.FC = () => {
    const dispatch = useDispatch();
    const { suggestSetCategory, suggestSetDisplayedCategory, suggestSetText, suggestAddCorrect, suggestAddIncorrect } = bindActionCreators(actionCreators, dispatch);
    const { text, displayedCategory, category } = useSelector((state: RootState) => state.suggest);
    const { categories } = useSelector((state: RootState) => state.app);

    const categorySelectElement = useRef<HTMLSelectElement>(null);
    const correctInputElement = useRef<HTMLInputElement>(null);
    const incorrectInputElement = useRef<HTMLInputElement>(null);

    const [newCorrect, setNewCorrect] = useState<string>("");
    const [newIncorrect, setNewIncorrect] = useState<string>("");

    useEffect(() => {
        if (categories.length === 0) return
        if (displayedCategory === null || category === null) {
            suggestSetDisplayedCategory(categories[0].displayName);
            suggestSetCategory(categories[0].name);
        }
        if (category !== null && categorySelectElement.current) categorySelectElement.current.value = category;
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleCategoryChange = () => {
        if (categorySelectElement && categorySelectElement.current) {
            suggestSetCategory(categorySelectElement.current.value);
            suggestSetDisplayedCategory(categorySelectElement.current.options[categorySelectElement.current.selectedIndex].text);
        }
    }
    const handleAddCorrect = () => {
        if (newCorrect === "") return
        suggestAddCorrect(newCorrect);
        setNewCorrect("");
        if (correctInputElement && correctInputElement.current) correctInputElement.current.focus();
    }
    const handleAddIncorrect = () => {
        if (newIncorrect === "") return
        suggestAddIncorrect(newIncorrect);
        setNewIncorrect("");
        if (incorrectInputElement && incorrectInputElement.current) incorrectInputElement.current.focus();
    }

    const getCategoriesList = (): JSX.Element[] => {
        return categories.map((category: Category) => {
            return <option key={category.name} value={category.name}>{category.displayName}</option>
        })
    }

    return <div className='suggest__form container'>
        <h3>Kategoria:</h3>
        <select ref={categorySelectElement} onChange={() => handleCategoryChange()}>
            {getCategoriesList()}
        </select>
        <h3>Treść pytania:</h3>
        <textarea cols={20} rows={8} value={text}
            onChange={ev => suggestSetText(ev.target.value)} />
        <h3>Dodaj prawidłową odpowiedź</h3>
        <input ref={correctInputElement} type="text" value={newCorrect} onChange={ev => setNewCorrect(ev.target.value)} />
        <button onClick={() => handleAddCorrect()}>Dodaj</button>
        <h3>Dodaj nieprawidłową odpowiedź</h3>
        <input ref={incorrectInputElement} type="text" value={newIncorrect} onChange={ev => setNewIncorrect(ev.target.value)} />
        <button onClick={() => handleAddIncorrect()}>Dodaj</button>
    </div>
}


