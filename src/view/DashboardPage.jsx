import { useEffect, useState } from "react";
import DashboardMain from "../components/dashboard/DashboardMain.jsx";
import DashboardNavbar from "../components/dashboard/DashboardNavbar.jsx";

const DashboardPage = () => {

    /*
        variable qui permet de savoir ce qu'il faut afficher dans le DashboardMain :
        - si "Dashboard", afficher les sections 
        - si "Invoices", "Companies" ou "Contacts", afficher un formulaire
    */
    const [page, setPage] = useState('Dashboard');

    /*
        variable qui permet de savoir si le menu hamburger est ouvert ou fermé
     */
    const [isMenuOpen, setMenuOpen] = useState(false);

    function getComponent(data) {
        setPage(data);
    }

    function change(isOpen) {
        setMenuOpen(isOpen);
        // console.log(isOpen);
    }

    // useEffect(() => {
    //     setPage('Dashboard');
    // }, [])

    return (
        <div className="dashboard-page">

            {/* Barre de navigation (menu hamburger...) */}
            <DashboardNavbar 
                onPage={getComponent} 
                page={page} 
                isMenuOpen={isMenuOpen}
                onMenuChange={change}
            /> 

            {/* Section principale reprenant un header et une grille contenant les informations 
                (Statistics, Last Contacts, Last invoices, Last Companies) */}
            <DashboardMain page={page} isMenuOpen={isMenuOpen} />
            
        </div>
    )
}

export default DashboardPage
