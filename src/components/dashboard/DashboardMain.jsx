
import DashboardHeader from "./DashboardHeader";
import DashboardSections from "./DashboardSections";
import DashboardForm from "./DashboardForm";


import statisticsData from '../../data/statistics.json'
import contactsData from '../../data/contacts.json'
import invoicesData from '../../data/invoices.json'
import companiesData from '../../data/companies.json'

const DashboardMain = ( { componentToDisplay, isMenuOpen } ) => {

    return (
        <main 
            className="dashboard-main"
            style={{
                zIndex: isMenuOpen ? '0' : '2',
            }}  
        >
            <DashboardHeader />

            { 
                (componentToDisplay === 'Dashboard') && (
                    <DashboardSections
                        statisticsData={statisticsData}
                        // contactsData={contactsData}
                        invoicesData={invoicesData}
                        companiesData={companiesData}
                    />
                ) 
            }

            { (componentToDisplay === 'Contacts') && (<DashboardForm data={contactsData} />) }
            { (componentToDisplay === 'Invoices') && (<DashboardForm data={invoicesData} />) }
            { (componentToDisplay === 'Companies') && (<DashboardForm data={companiesData} />) }
              
        </main>
    );
}

export default DashboardMain;