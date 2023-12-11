import DashboardInfos from "./DashboardInfos";

// import statistics from '../../data/statistics.json'
// import contacts from '../../data/contacts.json'
// import invoices from '../../data/invoices.json'
// import companies from '../../data/companies.json'

import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

const DashboardSections = ( {/*statisticsData, contactsData, invoicesData, companiesData*/} ) => {
    
    const { 
        lastContacts, 
        lastCompanies, 
        lastInvoices ,
        invoicesLength,
        contactsLength,
        companiesLength
    } = useContext(ApiContext);

    const statisticsData = {
        "dataName": "statistics",
        "dataInfos": [
            {"id": 1, "name": "Invoices", "number": invoicesLength}, 
            {"id": 2, "name": "Contacts",  "number": contactsLength}, 
            {"id": 3, "name": "Companies",  "number": companiesLength}
        ]
    };

    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                {statisticsData ? <DashboardInfos data={statisticsData} /> : <p>Chargement des statistiques...</p>}
                {lastContacts ? <DashboardInfos data={lastContacts} /> : <p>Chargement des contacts...</p>}
                {lastInvoices ? <DashboardInfos data={lastInvoices} /> : <p>Chargement des factures...</p>}
                {lastCompanies ? <DashboardInfos data={lastCompanies} /> : <p>Chargement des compagnies...</p>}
            </div>
        </div>
     );
}

export default DashboardSections