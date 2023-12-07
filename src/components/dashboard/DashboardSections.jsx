import DashboardInfos from "./DashboardInfos";

// import statistics from '../../data/statistics.json'
// import contacts from '../../data/contacts.json'
// import invoices from '../../data/invoices.json'
// import companies from '../../data/companies.json'

const DashboardSections = ( {statisticsData, contactsData, invoicesData, companiesData} ) => {
    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                <DashboardInfos data={statisticsData} />
                <DashboardInfos data={contactsData} />
                <DashboardInfos data={invoicesData} />
                <DashboardInfos data={companiesData} />
            </div>
        </div>
     );
}

export default DashboardSections