import { Route, Routes } from "react-router-dom";
import DashboardPage from './view/DashboardPage.jsx'
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';

import { useContext, useEffect } from "react";
import { ApiContext } from "./context/ApiContext.jsx";


function App() {
  
  const {fetchContacts, contacts, fetchCompanies, companies, fetchInvoices, invoices} = useContext(ApiContext);

    useEffect(() => {
      const fetchData = async () => {
        if (!contacts) {
          await fetchContacts();
          // console.log(contacts);
        } 
        if (!companies) {
          await fetchCompanies();
          // console.log(companies);
        } 
        if (!invoices) {
          await fetchInvoices();
          // console.log(invoices);
        } 
      };
        
      fetchData();
    }, []);


  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="companies" element={<Companies />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
  );
}

export default App;
