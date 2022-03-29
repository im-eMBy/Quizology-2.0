import { Question } from "../../../shared/types"

type Props = {
    question: Question
}

export const QuestionPreview: React.FC<Props> = ({ question }) => {

    const getCorrect = () => question.correct.map((answer, i) => <li key={i}>{answer}</li>);
    const getIncorrect = () => question.incorrect.map((answer, i) => <li key={i}>{answer}</li>);

    return <div className="manage-quiz__question-preview">
        <p>{question.text}</p>
        <div className="question-preview__answers">
            <ul className="question-preview__correct-list">
                {getCorrect()}
            </ul>
            <ul className="question-preview__incorrect-list">
                {getIncorrect()}
            </ul>
        </div>
        <button>Edytuj</button>
    </div>
}