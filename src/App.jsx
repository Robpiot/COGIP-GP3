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
  
  const {fetchContacts, contacts, fetchCompanies, companies, fetchInvoices, invoices, fetchTypes, types} = useContext(ApiContext);

    useEffect(() => {
      const fetchData = async () => {
        if (!contacts) {
          await fetchContacts();
        } 
        if (!companies) {
          await fetchCompanies();
        } 
        if (!invoices) {
          await fetchInvoices();
        } 
        if (!types) {
          await fetchTypes();
        } 
      };
        
      fetchData();
    }, []);

    // console.log('contacts : ', contacts);
    // console.log('companies : ', companies);
    // console.log('invoices : ', invoices);
    // console.log('types : ', types);

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
