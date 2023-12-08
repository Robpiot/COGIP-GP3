import { Route, Routes } from "react-router-dom";
import DashboardPage from './view/DashboardPage.jsx'
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';

import { useState, useEffect } from "react";
import { fetchAllContacts } from "./api/fetchAllcontacts.js";

function App() {


  // TODO: utilisation de redux ou pas ???
  const [allContacts, setAllContacts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const contactsData = await fetchAllContacts();
        setAllContacts(contactsData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }  
    fetchData();
  }, [])

  console.log(allContacts);


  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="companies" element={<Companies />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="dashboard" element={<DashboardPage allContacts={allContacts} />} />
      </Routes>
    </div>
  );
}

export default App;
