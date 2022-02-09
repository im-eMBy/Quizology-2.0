import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

import { AdminNavigation } from "../components/AdminNavigation";
import { AdminCategories } from "../components/AdminCategories";
import { AdminAddCategory } from "../components/AdminAddCategory";

import "../scss/_admin.scss";


export const AdminPanel: React.FC = () => {
    const { adminSubPage } = useSelector((state: RootState) => state.app);

    const getContent = (): JSX.Element => {
        switch (adminSubPage) {
            case "Propositions":
                return <h2>Propositions</h2>
            case "Categories":
                return <AdminCategories />
            case "AddCategory":
                return <AdminAddCategory />
            default:
                return <h2>Propositions</h2>
        }
    }

    return <div className="admin__container-outer">
        <AdminNavigation />
        <div className="admin__container-inner">
            {getContent()}
        </div>
    </div>
}