import { Route, Routes } from "react-router-dom";
import Dashboard from './view/dashboard/Dashboard.jsx'
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';
import ShowCompanies from "./view/showCompany.jsx";

function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/showCompany" element={<ShowCompanies />} />
      </Routes>
    </div>
  );
}

export default App;
