import { Route, Routes } from "react-router-dom";
import Dashboard from './view/dashboard/Dashboard.jsx'
import Home from "./view/home.jsx";
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";
import Header from "./partials/header.jsx";
import Footer from "./partials/footer.jsx";

import '../src/assets/css/style.css'
import { HomePage } from './view/HomePage.jsx';

function App() {

  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
