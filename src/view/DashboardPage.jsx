import { useContext, useState } from "react";
import { DashboardContext } from "../context/DashboardContext.jsx";
import DashboardMain from "../components/dashboard/DashboardMain.jsx";
import DashboardNavbar from "../components/dashboard/DashboardNavbar.jsx";


const DashboardPage = () => {
        
    // State qui détermine quel composant afficher dans DashboardMain
    const { componentToDisplay } = useContext(DashboardContext);
    
    // State qui détermine si le menu hamburger est ouvert ou fermé
    const [isMenuOpen, setMenuOpen] = useState(false);
    

    /**
     * Fonction qui met à jour la variable d'état isMenuOpen avec la valeur spécifiée (ouvert ou fermé).
     * @param {boolean} isMenuOpenValue - Indique si le menu est ouvert (true) ou fermé (false).
     */
    function change(isMenuOpenValue) {
        setMenuOpen(isMenuOpenValue);
    }


    return (
        <div className="dashboard-page">

            {/* Barre de navigation (menu hamburger en écran mobile) */}
            <DashboardNavbar isMenuOpen={isMenuOpen} onMenuChange={change} /> 

            {/* Section principale reprenant un header et une grille contenant les informations 
                (Statistics, Last Contacts, Last invoices, Last Companies) */}
            <DashboardMain isMenuOpen={isMenuOpen} />
            
        </div>
    )
}

export default DashboardPage
