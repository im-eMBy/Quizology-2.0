import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { QuizPreview } from "./QuizPreview";

type Props = {
    switchSubpage: Function,
    setManagedQuiz: Function
}

export const QuizList: React.FC<Props> = ({ switchSubpage, setManagedQuiz }) => {
    const user = useSelector((state: RootState) => state.app.user);
    const quizzes = useSelector((state: RootState) => state.app.quizzesInfo);
    const userQuizzes = useMemo(() => quizzes.filter(quiz => quiz.authorId === user?.uid), [quizzes, user?.uid]);

    const getList = () => {
        return userQuizzes.map(quiz => {
            return <QuizPreview quizInfo={quiz} switchSubpage={switchSubpage} setManagedQuiz={setManagedQuiz} />
        })
    }

    return <div className="quiz-list__container container">
        {getList()}
        <button onClick={() => switchSubpage("Add")}>Stwórz Quiz</button>
    </div>
}