import { useSelector } from "react-redux";
import { RootState } from "../state/reducers";

import { AdminLogin } from "../components/Admin/AdminLogin";
import { AdminNavigation } from "../components/Admin/AdminNavigation";
import { AdminCategories } from "../components/Admin/AdminCategories";
import { AdminAddCategory } from "../components/Admin/AdminAddCategory";
import { AdminPropositions } from "../components/Admin/AdminPropositions";

import "../scss/_admin.scss";

export const AdminPanel: React.FC = () => {
    const { subpage, password } = useSelector((state: RootState) => state.admin);

    const getContent = (): JSX.Element => {
        switch (subpage) {
            case "Propositions":
                return <AdminPropositions />
            case "Categories":
                return <AdminCategories />
            case "AddCategory":
                return <AdminAddCategory />
            default:
                return <AdminLogin />
        }
    }
    if (password !== process.env.REACT_APP_ADMIN_PASSWORD) return <AdminLogin />
    return <div className="admin__container-outer">
        <AdminNavigation />
        <div className="admin__container-inner">
            {getContent()}
        </div>
    </div>
}