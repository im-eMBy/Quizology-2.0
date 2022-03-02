import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";
import { useSuggestValidation } from "./useSuggestValidation";

export const SuggestValidate: React.FC = () => {
    const dispatch = useDispatch();
    const { isValid, proposition} = useSelector((state: RootState) => state.suggest);
    const { text, correct, incorrect } = proposition;
    const { suggestSetIsValid } = actionCreators;
    const validationMsgs = useSuggestValidation(text, correct, incorrect);

    useEffect(() => {
        if(validationMsgs.length <= 0 && !isValid) dispatch(suggestSetIsValid(true));
        if(validationMsgs.length > 0 && isValid) dispatch(suggestSetIsValid(false));
    }, [dispatch, suggestSetIsValid, validationMsgs, isValid])

    const getValidationMessages = (): JSX.Element[] => {
        return validationMsgs.map((message: string, i) => <li key={i}>{message}</li>)
    }

    return <div className="suggest__validate container">
        <ul>
            {validationMsgs.length <= 0 ? <span>Możesz wysłać swoją propozycję</span> : getValidationMessages()}
        </ul>
    </div>
}