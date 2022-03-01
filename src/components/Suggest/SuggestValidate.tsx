import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";
import { useSuggestValidation } from "./useSuggestValidation";

export const SuggestValidate: React.FC = () => {
    const dispatch = useDispatch();
    const { text, correct, incorrect } = useSelector((state: RootState) => state.suggest);
    
    const validationMsgs = useSuggestValidation(text, correct, incorrect);

    const getValidationMessages = (): JSX.Element[] => {
        return validationMsgs.map((message: string, i) => <li key={i}>{message}</li>)
    }

    return <div className="suggest__validate container">
        <ul>
            {getValidationMessages()}
        </ul>
    </div>
}