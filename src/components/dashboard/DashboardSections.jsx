import DashboardInfos from "./DashboardInfos";

// import statistics from '../../data/statistics.json'
// import contacts from '../../data/contacts.json'
// import invoices from '../../data/invoices.json'
// import companies from '../../data/companies.json'

import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

const DashboardSections = ( {/*statisticsData, contactsData, invoicesData, companiesData*/} ) => {
    
    const { 
        contacts,
        companies,
        invoices
        // lastContacts, 
        // lastCompanies, 
        // lastInvoices ,
        // invoicesLength,
        // contactsLength,
        // companiesLength
    } = useContext(ApiContext);

    console.log('contacts : ', contacts);
    console.log('companies : ', companies);
    console.log('invoices : ', invoices);

    const statisticsData = {
        "dataName": "statistics",
        "dataInfos": [
            {"id": 1, "name": "Invoices", "number": invoices?.dataInfos.length}, 
            {"id": 2, "name": "Contacts",  "number": contacts?.dataInfos.length}, 
            {"id": 3, "name": "Companies",  "number": companies?.dataInfos.length}
            // {"id": 1, "name": "Invoices", "number": invoicesLength}, 
            // {"id": 2, "name": "Contacts",  "number": contactsLength}, 
            // {"id": 3, "name": "Companies",  "number": companiesLength}
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

    // console.log('invoices : ', invoices);
    // console.log('fourLastInvoices : ', fourLastInvoices);




    // const fourLastContacts = lastContacts ? {
    //     ...lastContacts,
    //     "dataInfos": lastContacts.dataInfos.slice(1)
    // } : null;
    
    // const fourLastCompanies = lastCompanies ? {
    //     ...lastCompanies,
    //     "dataInfos": lastCompanies.dataInfos.slice(1)
    // } : null;
    
    // const fourLastInvoices = lastInvoices ? {
    //     ...lastInvoices,
    //     "dataInfos": lastInvoices.dataInfos.slice(1)
    // } : null;


    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                {statisticsData ? <DashboardInfos data={statisticsData} /> : <p>Chargement des statistiques...</p>}
                {contacts ? <DashboardInfos data={fourLastContacts} /> : <p>Chargement des contacts...</p>}
                {invoices ? <DashboardInfos data={fourLastInvoices} /> : <p>Chargement des factures...</p>}
                {companies ? <DashboardInfos data={fourLastCompanies} /> : <p>Chargement des compagnies...</p>}
                {/* {lastContacts ? <DashboardInfos data={fourLastContacts} /> : <p>Chargement des contacts...</p>}
                {lastInvoices ? <DashboardInfos data={fourLastInvoices} /> : <p>Chargement des factures...</p>}
                {lastCompanies ? <DashboardInfos data={fourLastCompanies} /> : <p>Chargement des compagnies...</p>} */}
            </div>
        </div>
     );
}

export default DashboardSections