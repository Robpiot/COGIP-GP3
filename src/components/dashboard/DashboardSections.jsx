import DashboardInfos from "./DashboardInfos";

// import statistics from '../../data/statistics.json'
// import contacts from '../../data/contacts.json'
// import invoices from '../../data/invoices.json'
// import companies from '../../data/companies.json'

import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

const DashboardSections = ( {statisticsData, /*contactsData, invoicesData, companiesData*/} ) => {
    
    const {lastContacts, lastCompanies, lastInvoices} = useContext(ApiContext);

    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                <DashboardInfos data={statisticsData} />
                {lastContacts ? <DashboardInfos data={lastContacts} /> : <p>Chargement des contacts...</p>}
                {lastInvoices ? <DashboardInfos data={lastInvoices} /> : <p>Chargement des factures...</p>}
                {lastCompanies ? <DashboardInfos data={lastCompanies} /> : <p>Chargement des compagnies...</p>}
            </div>
        </div>
     );
}

export default DashboardSections