import { createContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardProvider(props) {

    // State qui détermine quel composant afficher dans DashboardMain
    const [componentToDisplay, setComponentToDisplay] = useState('Dashboard');

    // State qui détermine si le menu hamburger est ouvert ou fermé
    const [isMenuOpen, setMenuOpen] = useState(false);

    function changeComponentToDisplay(componentName) {
        setComponentToDisplay(componentName)
    }

    return (
        <DashboardContext.Provider value={{
            changeComponentToDisplay, 
            componentToDisplay,
            setMenuOpen,
            isMenuOpen
        }}>
            {props.children}
        </DashboardContext.Provider>
    )

}