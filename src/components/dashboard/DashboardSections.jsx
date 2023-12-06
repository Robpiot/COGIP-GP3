import DashboardStatistics from "./DashboardStatistics";

let statistics = [
    {"number": 245, "name": "invoices"},
    {"number": 472, "name": "contacts"},
    {"number": 348, "name": "companies"}
];
let contacts = [
    {"name": "Henry Bailleux", "phone": "0485 78 76 01", "email": "henry.bailleux@gr.be" },
    {"name": "John Doe", "phone": "0485 78 76 02", "email": "john.doe@hotmail.fr" },
    {"name": "Laura Dujardin", "phone": "0485 78 76 03", "email": "laura.dujardin@skynet.be" },
    {"name": "Pierre Forêt", "phone": "0485 78 76 04", "email": "pierre.foret@gmail.com" }
];
let invoices = [
    {"number": "FF20220815-001", "date": "15/07/22", "company": "Jouet Jean-Michel 1" },
    {"number": "FF20220815-002", "date": "06/03/23", "company": "Jouet Jean-Michel 2" },
    {"number": "FF20220815-003", "date": "30/11/20", "company": "Jouet Jean-Michel 3" },
    {"number": "FF20220815-004", "date": "28/02/22", "company": "Jouet Jean-Michel 4" }
];
let companies = [
    {"name": "Jouet Jean-Michel 1", "TVA": "FR873 736 001", "country": "FRANCE" },
    {"name": "Jouet Jean-Michel 2", "TVA": "FR873 736 002", "country": "BELGIQUE" },
    {"name": "Jouet Jean-Michel 3", "TVA": "FR873 736 003", "country": "SUISSE" },
    {"name": "Jouet Jean-Michel 4", "TVA": "FR873 736 004", "country": "ESPAGNE" }
];

const DashboardSections = () => {
    return ( 
        <div className="dashboard-sections">
            <div className="dashboard-grid">
                <DashboardStatistics statistics={statistics} />
            </div>
        </div>
     );
}

export default DashboardSections