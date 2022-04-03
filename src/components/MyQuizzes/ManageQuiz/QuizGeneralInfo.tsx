import { useSelector } from "react-redux"
import { RootState } from "../../../state/reducers";
import { switchVisibility } from "../../../firebase/quiz-managment/switchVisibility";

import { SwitchButton } from "../../shared/SwitchButton";

export const QuizGeneralInfo: React.FC<{ switchSubpage: Function }> = ({ switchSubpage }) => {
    const quiz = useSelector((state: RootState) => state.manageQuiz.quiz);

    if (!quiz) return null;

    const switchQuizVisibility = () => {
        console.log("clicked");
        switchVisibility(!quiz.isVisible, quiz);
    }
    const getVisibility = () => {
        if (quiz.questions.length < 5) return <p>Quiz niewidoczny dla innych użytkowników. Dodaj przynajmniej 5 pytań.</p>
        return <div>
            <p>Opublikowany:</p>
            <SwitchButton isActive={quiz.isVisible} onChange={switchQuizVisibility} />
        </div>
    }

    return <div className="manage-quiz__general-info container">
        <h2>Zarządzenie Quizem</h2>
        <h3>Tytuł: {quiz?.title}</h3>
        <p>Opis: {quiz?.description}</p>
        {getVisibility()}
        <button onClick={() => switchSubpage("General")}>&#10094; Powrót</button>
    </div>
}