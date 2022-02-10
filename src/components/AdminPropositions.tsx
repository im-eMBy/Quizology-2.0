import { useCallback, useEffect, useState } from "react"
import { QuestionProposition } from "../shared/types";
import { getPropositionsAndListen } from "../firebase/propositions";

export const AdminPropositions: React.FC = () => {
    const [propositions, setPropositions] = useState<QuestionProposition[]>([]);
    const [displayedCategory, setDisplayedCategory] = useState<string>("");

    const propositionsListener = useCallback(() => {
        return getPropositionsAndListen(setPropositions);
    }, [])

    useEffect(() => {
        const unsubscribe = propositionsListener();
        return () => unsubscribe();
    }, [propositionsListener])

    const getPropositionsDisplayed = (): JSX.Element[] => {
        const propsToDisplay = displayedCategory === "" ? propositions : propositions.filter((el: QuestionProposition) => el.displayedCategory === displayedCategory);
        return propsToDisplay.map(proposition => <div className="container admin__proposition" key={proposition.category}>
            <div className="admin__proposition-data">
                <p>{proposition.displayedCategory}</p>
                <p className="admin__proposition-text">{proposition.text}</p>
                <div className="admin__proposition-answers">
                    <div>
                        {proposition.correct.map((answer, i) => <span className="admin__proposition-correct" key={i}>{answer}</span>)}
                    </div>
                    <div>
                        {proposition.incorrect.map((answer, i) => <span className="admin__proposition-incorrect" key={i}>{answer}</span>)}
                    </div>
                </div>
            </div>
            <div className="admin__proposition-buttons">
                <button className="admin__proposition-add-button">Akceptuj</button>
                <button className="admin__proposition-reject-button">Odrzuć</button>
            </div>
        </div>)
    }
    return <div className="admin__propositions">
        <div className="admin__propositions-container">
            {getPropositionsDisplayed()}
        </div>
    </div>
}