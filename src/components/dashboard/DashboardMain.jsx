import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSections from "./DashboardSections";
import DashboardForm from "./DashboardForm";


const DashboardMain = ( { isMenuOpen } ) => {

    const { componentToDisplay } = useContext(DashboardContext);

    return (
        <main 
            className="dashboard-main"
            style={{
                zIndex: isMenuOpen ? '0' : '2',
            }}  
        >
            <DashboardHeader />

            { 
                (componentToDisplay === 'Dashboard') ? (
                    <DashboardSections />
                ) : (
                    <DashboardForm formName={componentToDisplay} />
                )
            }
              
        </main>
    );
}

export default DashboardMain;