import { useState } from "react";
import { Question } from "../../shared/types";

type Props = {
    quizId?: string,
    questionData?: Question
}

export const AddQuestion: React.FC<Props> = ({ quizId, questionData }) => {
    const [text, setText] = useState<string>("");
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);

    const handleAddCorrect = () => {
        setCorrectAnswers(prev => [...prev, ""]);
    }
    const handleAddIncorrect = () => {
        setIncorrectAnswers(prev => [...prev, ""]);
    }
    const handleRemoveCorrect = (index: number) => {
        setCorrectAnswers(prev => prev.filter((_answer, i) => (i !== index)));
    }
    const handleRemoveIncorrect = (index: number) => {
        setIncorrectAnswers(prev => prev.filter((_answer, i) => (i !== index)));
    }
    const handleCorrectChange = (value: string, index: number) => {
        const data = [...correctAnswers];
        data[index] = value;
        setCorrectAnswers(data);
    }
    const handleIncorrectChange = (value: string, index: number) => {
        const data = [...incorrectAnswers];
        data[index] = value;
        setIncorrectAnswers(data);
    }

    const handleQuestionSave = () => {

    }
    const getCorrectAnswers = (): JSX.Element[] => {
        return correctAnswers.map((answer, index) => {
            return <div>
                <input type="text" onChange={(ev) => handleCorrectChange(ev.target.value, index)} value={answer} />
                <button type="button" onClick={() => handleRemoveCorrect(index)}>Usuń</button>
            </div>
        })
    }
    const getIncorrectAnswers = (): JSX.Element[] => {
        return incorrectAnswers.map((answer, index) => {
            return <div>
                <input type="text" onChange={(ev) => handleIncorrectChange(ev.target.value, index)} value={answer} />
                <button type="button" onClick={() => handleRemoveIncorrect(index)}>Usuń</button>
            </div>
        })
    }

    return <form className="add-question__form">
        <div className="add-question__text">
            <p>Treść pytania:</p>
            <textarea cols={20} rows={8} value={text} onChange={(ev) => setText(ev.target.value)} />
        </div>
        <div className="add-question__correct-answers">
            <p>Poprawne odpowiedzi:</p>
            {getCorrectAnswers()}
            <button type="button" onClick={handleAddCorrect}>Dodaj</button>
        </div>
        <div className="add-question__correct-answers">
            <p>Niepoprawne odpowiedzi:</p>
            {getIncorrectAnswers()}
            <button type="button" onClick={handleAddIncorrect}>Dodaj</button>
        </div>
        <button type="submit" onClick={handleQuestionSave}>Zapisz</button>
    </form>
}