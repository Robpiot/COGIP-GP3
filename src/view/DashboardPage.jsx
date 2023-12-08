import { useEffect, useState } from "react";
import DashboardMain from "../components/dashboard/DashboardMain.jsx";
import DashboardNavbar from "../components/dashboard/DashboardNavbar.jsx";

const DashboardPage = ( {allContacts} ) => {

    console.log('allContacts : ', allContacts);

    /*
        variable qui permet de savoir quel composant afficher dans le DashboardMain :
        - si "Dashboard", afficher les sections 
        - si "Invoices", "Companies" ou "Contacts", afficher un formulaire
    */
    const [componentToDisplay, setComponentToDisplay] = useState('Dashboard');

    /*
        variable qui permet de savoir si le menu hamburger est ouvert ou fermé
     */
    const [isMenuOpen, setMenuOpen] = useState(false);

    function changeComponent(componentName) {
        setComponentToDisplay(componentName);
    }

    function change(isOpen) {
        setMenuOpen(isOpen);
    }


    return (
        <div className="dashboard-page">

            {/* Barre de navigation (menu hamburger en écran mobile) */}
            <DashboardNavbar 
                onChangeComponent={changeComponent} 
                componentToDisplay={componentToDisplay} 
                isMenuOpen={isMenuOpen}
                onMenuChange={change}
            /> 

            {/* Section principale reprenant un header et une grille contenant les informations 
                (Statistics, Last Contacts, Last invoices, Last Companies) */}
            <DashboardMain componentToDisplay={componentToDisplay} isMenuOpen={isMenuOpen} />
            
        </div>
    )
}

export default DashboardPage
