import { createContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardProvider(props) {

    // State qui stocke les données pour l'update (tableName + idRow)
    const [editRow, setEditRow] = useState({tableName: null, idRow: null});
    
    // State qui détermine si le menu hamburger est ouvert ou fermé
    const [isMenuOpen, setMenuOpen] = useState(false);

    // State qui détermine quel composant afficher dans DashboardMain
    const [componentToDisplay, setComponentToDisplay] = useState('Dashboard');

    /**
     * Fonction permettant de changer le composant affiché dans le tableau de bord. 
     * @param {string} componentName - Le nom du composant à afficher. 
     */
    function changeComponentToDisplay(componentName) {
        setComponentToDisplay(componentName)
    }


    return (
        <DashboardContext.Provider value={{
            setEditRow,
            editRow,
            setMenuOpen,
            isMenuOpen,
            changeComponentToDisplay, 
            componentToDisplay,
        }}>
            {props.children}
        </DashboardContext.Provider>
    )

}