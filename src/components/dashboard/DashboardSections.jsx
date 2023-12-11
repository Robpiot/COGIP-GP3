import DashboardInfos from "./DashboardInfos";

// import statistics from '../../data/statistics.json'
// import contacts from '../../data/contacts.json'
// import invoices from '../../data/invoices.json'
// import companies from '../../data/companies.json'

import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

const DashboardSections = ( {statisticsData, /*contactsData,*/ invoicesData, companiesData} ) => {
    
    const {contacts} = useContext(ApiContext);
    console.log(contacts);

    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                <DashboardInfos data={statisticsData} />
                {contacts ? <DashboardInfos data={contacts} /> : <p>Chargement des contacts...</p>}
                <DashboardInfos data={invoicesData} />
                <DashboardInfos data={companiesData} />
            </div>
        </div>
     );
}

export default DashboardSections