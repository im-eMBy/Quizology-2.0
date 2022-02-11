import { useState } from "react"

import { addCategory } from "../firebase/categories";

import { SwitchButton } from "./shared/SwitchButton";

export const AdminAddCategory: React.FC = () => {
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategoryDisplayedName, setNewCategoryDisplayedName] = useState("");
    const [newCategoryIsVisible, setNewCategoryIsVisible] = useState(false);
    const [newCategoryIsPlayable, setNewCategoryIsPlayable] = useState(false);

    const handleCategorySend = () => {
        addCategory({
            name: newCategoryName,
            displayName: newCategoryDisplayedName,
            visible: newCategoryIsVisible,
            playable: newCategoryIsPlayable
        });
        setNewCategoryName("");
        setNewCategoryDisplayedName("");
        setNewCategoryIsVisible(false);
        setNewCategoryIsPlayable(false);
    }

    return <div className="admin__add-category container">
        <h2>Dodaj nową kategorię:</h2>
        <div>
            <h3>Nazwa:</h3>
            <input type="text" value={newCategoryName} onChange={(ev) => setNewCategoryName(ev.target.value)} />
        </div>
        <div>
            <h3>Wyświetlana nazwa:</h3>
            <input type="text" value={newCategoryDisplayedName} onChange={(ev) => setNewCategoryDisplayedName(ev.target.value)} />
        </div>
        <div>
            <p>Widoczna:</p>
            <SwitchButton onChange={() => setNewCategoryIsVisible(!newCategoryIsVisible)} isActive={newCategoryIsVisible} />
        </div>
        <div>
            <p>Grywalna:</p>
            <SwitchButton onChange={() => setNewCategoryIsPlayable(!newCategoryIsPlayable)} isActive={newCategoryIsPlayable} />
        </div>
        <button className="admin__add-button" onClick={() => handleCategorySend()}>Dodaj</button>
    </div>
}