import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { getQuiz } from "../../firebase/getQuiz"
import { actionCreators } from "../../state/action-creators"
import { RootState } from "../../state/reducers"

type Props = {
    switchSubpage: Function,
    setManagedQuiz: Function
}

export const QuizList: React.FC<Props> = ({ switchSubpage, setManagedQuiz }) => {
    const dispatch = useDispatch();
    const { manageQuizSetQuiz } = bindActionCreators(actionCreators, dispatch);
    const user = useSelector((state: RootState) => state.app.user);
    const quizzes = useSelector((state: RootState) => state.app.quizzesInfo);
    const userQuizzes = useMemo(() => quizzes.filter(quiz => quiz.authorId === user?.uid), [quizzes, user?.uid]);

    const handleQuizManageClick = async (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setManagedQuiz(ev.currentTarget.value);
        switchSubpage("Manage");
    }

    const getList = () => {
        return userQuizzes.map(quiz => {
            return <div key={quiz.id} className="quiz-list__quiz-preview">
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <button value={quiz.id} onClick={handleQuizManageClick}>Zarządzaj</button>
            </div>
        })
    }

    return <div className="quiz-list__container container">
        {getList()}
        <button onClick={() => switchSubpage("Add")}>Stwórz Quiz</button>
    </div>
}