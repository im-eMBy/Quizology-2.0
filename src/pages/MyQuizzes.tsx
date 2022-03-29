import { useState } from "react";

import { AddQuiz } from "../components/MyQuizzes/AddQuiz";
import { QuizList } from "../components/MyQuizzes/QuizList";
import { ManageQuiz } from "../components/MyQuizzes/ManageQuiz";

import "../scss/_my-quizzes.scss";


export const MyQuizzes: React.FC = () => {
    const [subpage, setSubpage] = useState<"General" | "Manage" | "Add">("General");
    const [managedQuizId, setManagedQuizId] = useState<string | null>(null);

    const getContent = () => {
        switch (subpage) {
            case "General":
                return <QuizList switchSubpage={setSubpage} setManagedQuiz={setManagedQuizId} />
            case "Add":
                return <AddQuiz switchSubpage={setSubpage} />
            case "Manage":
                if (managedQuizId) {
                    return <ManageQuiz switchSubpage={setSubpage} quizId={managedQuizId} />
                }
                break;
            default:
                return <QuizList switchSubpage={setSubpage} setManagedQuiz={setManagedQuizId} />
        }
    }

    return <div className="my-quizzes__container">
        {getContent()}
    </div>
}