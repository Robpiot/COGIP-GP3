import { ApiContext } from "../../context/ApiContext";
import { useContext } from "react";

import DashboardInfos from "./DashboardInfos";
import LoadingDashboard from "../LoadingDashboard";

const DashboardSections = () => {
  const { contacts, companies, invoices } = useContext(ApiContext);

  const statisticsData = {
    dataName: "statistics",
    dataInfos: [
      {
        id: 1,
        name: "Invoices",
        number: invoices?.dataObject.dataInfos.length,
      },
      {
        id: 2,
        name: "Contacts",
        number: contacts?.dataObject.dataInfos.length,
      },
      {
        id: 3,
        name: "Companies",
        number: companies?.dataObject.dataInfos.length,
      },
    ],
  };

  return (
    <div className="dashboard-sections">
      <div className="dashboard-grid">
        {statisticsData ? (
          <DashboardInfos data={statisticsData} />
        ) : (
          <p>Chargement des statistiques...</p>
        )}
        {contacts ? (
          <DashboardInfos data={contacts.lastDataObject} />
        ) : (
          <p>Chargement des contacts...</p>
        )}
        {invoices ? (
          <DashboardInfos data={invoices.lastDataObject} />
        ) : (
          <p>Chargement des factures...</p>
        )}
        {companies ? (
          <DashboardInfos data={companies.lastDataObject} />
        ) : (
          <p>Chargement des compagnies...</p>
        )}
      </div>
    </div>
  );
};

export default DashboardSections;
