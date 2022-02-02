import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../state/reducers";
import { Category } from "../shared/types";

 export const SuggestQuestion:React.FC = () => {
   const dispatch = useDispatch();
    const { suggestSetCategory, suggestSetText } = bindActionCreators(actionCreators, dispatch);
    const { category, text } = useSelector((state: RootState) => state.suggest);
    const { categories } = useSelector((state: RootState) => state.app);



    const getCategoriesList = () => {
      return categories.map((category: Category) => {
           return <option key={category.name} value={category.name}>{category.displayName}</option>
       })
   }

    return <div className='suggest__container-outer'>
    {/* <SuggestQuestionValidate questionData={question} onSend={handleQuestionSend}/> */}
    <div className='suggest__container-inner'>
        {/* <SuggestQuestionPreview questionData={question} categoryName={categoryName} onDelete={handleAnswerDelete}/> */}
        <div className='suggest__form'>
            <h3>Kategoria:</h3>
            <select onChange={(ev) => suggestSetCategory(ev.target.value)}>
                {getCategoriesList()}
            </select>
            <h3>Treść pytania:</h3>
            <textarea cols={20} rows={8} value={text}
                      onChange={ev => suggestSetText(ev.target.value)}/>
            {/* <h3>Dodaj prawidłową odpowiedź</h3>
            <input type="text" ref={correctInput} value={correctValue} onChange={ev => handleCorrectChange(ev)}/>
            <button onClick={() => handleAddCorrect()}>Dodaj</button>
            <h3>Dodaj nieprawidłową odpowiedź</h3>
            <input type="text" ref={incorrectInput} value={incorrectValue}
                   onChange={ev => handleIncorrectChange(ev)}/>
            <button onClick={() => handleAddIncorrect()}>Dodaj</button> */}
        </div>
    </div>
</div>
 }