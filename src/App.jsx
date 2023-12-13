import { Route, Routes } from "react-router-dom";
import DashboardPage from './view/DashboardPage.jsx'
// import HomePage from "./view/HomePage.jsx";
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";
import { ShowContacts } from "./view/showContacts.jsx";
import ShowCompany from './view/showCompany.jsx';

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';


function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="companies" element={<Companies />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path='showContacts/:id' element={<ShowContacts />}/>
          <Route path='ShowCompany/:id' element={<ShowCompany />}/>
          {/* <Route path="dashboard/:section" element={<DashboardPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
