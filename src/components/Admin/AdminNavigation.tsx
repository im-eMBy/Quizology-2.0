import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from '../../state/action-creators';
import { bindActionCreators } from 'redux';
import { RootState } from "../../state/reducers";

export const AdminNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const { adminSetSubPage } = bindActionCreators(actionCreators, dispatch);
    const { subpage } = useSelector((state: RootState) => state.admin);

    const handleNavClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const elementClicked = ev.target as HTMLButtonElement;
        if (elementClicked.value === "Propositions" || elementClicked.value === "Categories" || elementClicked.value === "AddCategory") {
            adminSetSubPage(elementClicked.value);
        }
    }
    // 
    return <nav className="admin__navigation">
        <ul>
            <li className="admin__navigation-element">
                <button onClick={handleNavClick} value="Propositions" style={subpage === "Propositions" ? { color: "#eb9115" } : undefined}>Propozycje</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={handleNavClick} value="Categories" style={subpage === "Categories" ? { color: "#eb9115" } : undefined}>Kategorie</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={handleNavClick} value="AddCategory" style={subpage === "AddCategory" ? { color: "#eb9115" } : undefined}>Dodaj Kategorię</button>
            </li>
        </ul>
    </nav>
}