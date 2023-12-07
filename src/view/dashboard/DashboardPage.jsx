import DashboardMain from "../../components/dashboard/DashboardMain.jsx";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar.jsx";

const DashboardPage = () => {
    return (
        <div className="dashboard-page">

            {/* Barre de navigation (menu hamburger...) */}
            <DashboardNavbar /> 

            {/* Section principale reprenant un header et une grille contenant les informations 
                (Statistics, Last Contacts, Last invoices, Last Companies) */}
            <DashboardMain />

        </div>
    )
}

export default DashboardPage
