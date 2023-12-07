import { useEffect, useState } from "react";
import DashboardMain from "../components/dashboard/DashboardMain.jsx";
import DashboardNavbar from "../components/dashboard/DashboardNavbar.jsx";

const DashboardPage = () => {

    const [page, setPage] = useState('Dashboard');

    function getComponent(data) {
        setPage(data);
    }

    // useEffect(() => {
    //     setPage('Dashboard');
    // }, [])

    return (
        <div className="dashboard-page">

            {/* Barre de navigation (menu hamburger...) */}
            <DashboardNavbar onPage={getComponent} /> 

            {/* Section principale reprenant un header et une grille contenant les informations 
                (Statistics, Last Contacts, Last invoices, Last Companies) */}
            <DashboardMain page={page} />
            
        </div>
    )
}

export default DashboardPage
