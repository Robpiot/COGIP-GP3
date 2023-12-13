import { createContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardProvider(props) {

    const [componentToDisplay, setComponentToDisplay] = useState('Dashboard');

    function changeComponentToDisplay(componentName) {
        setComponentToDisplay(componentName)
    }

    return (
        <DashboardContext.Provider value={{changeComponentToDisplay, componentToDisplay}}>
            {props.children}
        </DashboardContext.Provider>
    )

}