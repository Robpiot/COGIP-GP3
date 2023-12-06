import DashboardInfos from "./DashboardInfos";
import DashboardStatistics from "./DashboardStatistics";

let statistics = { "dataName": "statistics", "dataInfos": [
    {"id": 1, "number": 245, "name": "invoices"},
    {"id": 2, "number": 472, "name": "contacts"},
    {"id": 3, "number": 348, "name": "companies"}
]};
let contacts = { "dataName": "contacts", "dataInfos": [
    {"id": 1, "name": "Henry Bailleux", "phone": "0485 78 76 01", "email": "henry.bailleux@gr.be" },
    {"id": 2, "name": "John Doe", "phone": "0485 78 76 02", "email": "john.doe@hotmail.fr" },
    {"id": 3, "name": "Laura Dujardin", "phone": "0485 78 76 03", "email": "laura.dujardin@skynet.be" },
    {"id": 4, "name": "Pierre Forêt", "phone": "0485 78 76 04", "email": "pierre.foret@gmail.com" }
]};
let invoices = { "dataName": "invoices", "dataInfos": [
    {"id": 1, "number": "FF20220815-001", "date": "15/07/22", "company": "Jouet Jean-Michel 1" },
    {"id": 2, "number": "FF20220815-002", "date": "06/03/23", "company": "Jouet Jean-Michel 2" },
    {"id": 3, "number": "FF20220815-003", "date": "30/11/20", "company": "Jouet Jean-Michel 3" },
    {"id": 4, "number": "FF20220815-004", "date": "28/02/22", "company": "Jouet Jean-Michel 4" }
]};
let companies = { "dataName": "companies", "dataInfos": [
    {"id": 1, "name": "Jouet Jean-Michel 1", "TVA": "FR873 736 001", "country": "FRANCE" },
    {"id": 2, "name": "Jouet Jean-Michel 2", "TVA": "FR873 736 002", "country": "BELGIQUE" },
    {"id": 3, "name": "Jouet Jean-Michel 3", "TVA": "FR873 736 003", "country": "SUISSE" },
    {"id": 4, "name": "Jouet Jean-Michel 4", "TVA": "FR873 736 004", "country": "ESPAGNE" }
]};

const DashboardSections = () => {
    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                {/* <DashboardStatistics statistics={statistics} /> */}
                <DashboardInfos data={statistics} />
                <DashboardInfos data={contacts} />
                <DashboardInfos data={invoices} />
                <DashboardInfos data={companies} />
            </div>
        </div>
     );
}

export default DashboardSections