import { AdminCategories } from "../components/AdminCategories";

export const AdminPanel:React.FC = () => {

    return <div className="admin__container-outer">
        <nav className="admin__nav"></nav>
        <div className="admin__container-inner">
            <AdminCategories />
        </div>
    </div>
}