import { useState } from "react"
import { SwitchButton } from "./shared/SwitchButton";

import "../scss/_admin.scss";

export const AdminCategories: React.FC = () => {
    const [newCategoryName, setNewCategoryName] = useState("");
    const [newCategoryDisplayedName, setNewCategoryDisplayedName] = useState("");
    const [newCategoryIsVisible, setNewCategoryIsVisible] = useState(false);
    const [newCategoryIsPlayable, setNewCategoryIsPlayable] = useState(false);

    const handleCategorySend = () => {
        
    }

    return <div className="admin-categories__container">
        {/* {getCategories()} */}
        <div className="admin-categories__add-category container">
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
            <button onClick={() => handleCategorySend()}>Dodaj</button>
        </div>
    </div>
}