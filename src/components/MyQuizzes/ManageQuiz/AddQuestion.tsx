import { FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state/action-creators";
import { Question } from "../../../shared/types";
import { addQuestion, editQuestion } from "../../../firebase/quiz-managment/questionsManagment";
import { generateId } from "../../../utilis/generateId";

type Props = {
    quizId: string,
    questionData?: Question
}

export const AddQuestion: React.FC<Props> = ({ quizId, questionData }) => {
    const dispatch = useDispatch();
    const { manageQuizSetSubpage } = bindActionCreators(actionCreators, dispatch);
    const [text, setText] = useState<string>("");
    const [correctAnswers, setCorrectAnswers] = useState<string[]>([]);
    const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);
    const [msg, setMsg] = useState<string | null>(null);

    useEffect(() => {
        if (questionData) {
            setText(questionData.text);
            setCorrectAnswers(questionData.correct);
            setIncorrectAnswers(questionData.incorrect);
        }
    }, [questionData])

    const handleAddCorrect = () => setCorrectAnswers(prev => [...prev, ""]);
    const handleAddIncorrect = () => setIncorrectAnswers(prev => [...prev, ""]);
    const handleRemoveCorrect = (index: number) => setCorrectAnswers(prev => prev.filter((_answer, i) => (i !== index)));
    const handleRemoveIncorrect = (index: number) => setIncorrectAnswers(prev => prev.filter((_answer, i) => (i !== index)));

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

    const handleQuestionSave = (ev: FormEvent) => {
        ev.preventDefault();
        if (correctAnswers.length < 1) {
            setMsg("Dodaj przynajmniej 1 poprawną odpowiedź!");
            return;
        }
        if (incorrectAnswers.length < 3) {
            setMsg("Dodaj przynajmniej 3 niepoprawne odpowiedzi!");
            return;
        }
        if (text.length < 5) {
            setMsg("Za krótkie pytanie, sprawdź treść!");
            return;
        }
        if (correctAnswers.includes("") || incorrectAnswers.includes("")) {
            setMsg("Jedna z odpowiedzi jest pusta! Usuń ją lub dodaj treść.");
            return;
        }
        const question: Question = {
            id: questionData ? questionData.id : generateId(),
            text: text,
            correct: correctAnswers,
            incorrect: incorrectAnswers
        }
        if (questionData) editQuestion(quizId, questionData, question);
        if (!questionData) addQuestion(quizId, question);
        manageQuizSetSubpage("Questions");
    }
    const getCorrectAnswers = (): JSX.Element[] => {
        return correctAnswers.map((answer, index) => {
            return <div key={index} className="add-question__correct-answer">
                <input type="text" onChange={(ev) => handleCorrectChange(ev.target.value, index)} value={answer} />
                <button type="button" onClick={() => handleRemoveCorrect(index)} className="add-question__remove-button">Usuń</button>
            </div>
        })
    }
    const getIncorrectAnswers = (): JSX.Element[] => {
        return incorrectAnswers.map((answer, index) => {
            return <div key={index} className="add-question__incorrect-answer">
                <input type="text" onChange={(ev) => handleIncorrectChange(ev.target.value, index)} value={answer} />
                <button type="button" onClick={() => handleRemoveIncorrect(index)} className="add-question__remove-button">Usuń</button>
            </div>
        })
    }

    return <div className="add-question__container container">
        <form className="add-question__form" onSubmit={handleQuestionSave}>
            <div className="add-question__text">
                <p>Treść pytania:</p>
                <textarea cols={20} rows={8} value={text} onChange={(ev) => setText(ev.target.value)} />
            </div>
            <div className="add-question__correct-answers">
                <p>Poprawne odpowiedzi:</p>
                {getCorrectAnswers()}
                <button type="button" onClick={handleAddCorrect} className="add-question__add-button">Dodaj</button>
            </div>
            <div className="add-question__incorrect-answers">
                <p>Niepoprawne odpowiedzi:</p>
                {getIncorrectAnswers()}
                <button type="button" onClick={handleAddIncorrect} className="add-question__add-button">Dodaj</button>
            </div>
            {msg ? <p>{msg}</p> : null}
            <div className="add-question__buttons">
                <button type="submit" className="add-question__save-button">Zapisz</button>
                <button type="button" onClick={() => manageQuizSetSubpage("Questions")} className="add-question__cancel-button">Anuluj</button>
            </div>
        </form>
    </div>
}