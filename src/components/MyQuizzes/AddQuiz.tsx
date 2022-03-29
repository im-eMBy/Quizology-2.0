import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { addQuiz } from "../../firebase/quiz-managment/addQuiz";
import { Quiz } from "../../shared/types";
import { RootState } from "../../state/reducers";
import { generateId } from "../../utilis/generateId";

type Props = {
    switchSubpage: Function
}

export const AddQuiz: React.FC<Props> = ({ switchSubpage }) => {
    const user = useSelector((state: RootState) => state.app.user);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [msg, setMsg] = useState<string | null>(null);

    const handleSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        if (title.trim().length < 3) { setMsg("Tytuł nie może być krótszy, niż 3 znaki"); return; }
        if (!user) return;
        const quiz: Quiz = {
            id: generateId(),
            author: user.name,
            authorId: user.uid,
            title: title.trim(),
            description: description.trim(),
            questions: [],
            questionStats: []
        }
        await addQuiz(quiz);
        switchSubpage("General");
    }

    return <div className="add-quiz__container container">
        <h2>Dodaj Quiz</h2>
        <form className="add-quiz__form" onSubmit={handleSubmit}>
            <label htmlFor="Quiz-Title">Tytuł:</label>
            <input id="Quiz-Title" type="text" onChange={(ev) => setTitle(ev.target.value)} value={title} />
            <label htmlFor="Quiz-Description">Opis:</label>
            <textarea id="Quiz-Description" cols={30} rows={10} onChange={(ev) => setDescription(ev.target.value)} value={description} />
            <button type="submit">Zapisz</button>
            <button type="button" onClick={() => switchSubpage("General")}>Anuluj</button>
            {msg !== null ? <p className="add-quiz__msg">{msg}</p> : null}
        </form>
    </div>
}