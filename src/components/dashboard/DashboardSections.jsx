import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

import DashboardInfos from "./DashboardInfos";


const DashboardSections = () => {
    
    const { 
        contacts,
        companies,
        invoices
    } = useContext(ApiContext);


    const statisticsData = {
        "dataName": "statistics",
        "dataInfos": [
            {"id": 1, "name": "Invoices", "number": invoices?.dataInfos.length}, 
            {"id": 2, "name": "Contacts",  "number": contacts?.dataInfos.length}, 
            {"id": 3, "name": "Companies",  "number": companies?.dataInfos.length}
        ]
    };


    const fourLastContacts = contacts ? {
        ...contacts,
        "dataInfos": contacts.dataInfos.slice(-4)
    } : null;
    
    const fourLastCompanies = companies ? {
        ...companies,
        "dataInfos": companies.dataInfos.slice(-4)
    } : null;
    
    const fourLastInvoices = invoices ? {
        ...invoices,
        "dataInfos": invoices.dataInfos.slice(-4)
    } : null;


    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                {statisticsData ? <DashboardInfos data={statisticsData} /> : <p>Chargement des statistiques...</p>}
                {contacts ? <DashboardInfos data={fourLastContacts} /> : <p>Chargement des contacts...</p>}
                {invoices ? <DashboardInfos data={fourLastInvoices} /> : <p>Chargement des factures...</p>}
                {companies ? <DashboardInfos data={fourLastCompanies} /> : <p>Chargement des compagnies...</p>}
            </div>
        </div>
     );
}

export default DashboardSections