import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

export const SuggestValidate: React.FC = () => {
    const { text, displayedCategory, correct, incorrect } = useSelector((state: RootState) => state.suggest);

    const validationMesseges: string[] = [];
    if (correct.length < 1) validationMesseges.push("Dodaj minimum 1 poprawną odpowiedź");
    if (incorrect.length < 3) validationMesseges.push("Dodaj minimum 3 niepoprawne odpowiedzi");
    if (text.length < 10) validationMesseges.push("Minimalna długość pytania to 10 znaków");
    if (correct.findIndex(answer => answer.length > 30) !== -1 || incorrect.findIndex(answer => answer.length > 30) !== -1) {
        validationMesseges.push("Przynajmniej jedna z odpowiedzi przekracza maksymalną długość 30 znaków");
    }

    const getValidationMessages = (): JSX.Element[] => {
        return validationMesseges.map((message: string, i) => <li key={i}>{message}</li>)
    }

    return <div className="suggest__validate container">
        <ul>
            {getValidationMessages()}
        </ul>
    </div>
}