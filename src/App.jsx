import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Dashboard from './view/dashboard/Dashboard.jsx'
import Home from "./view/home.jsx";
import Invoices from "./view/invoices.jsx";
import Companies from "./view/companies.jsx";
import Contacts from "./view/contacts.jsx";
import Header from "./partials/header.jsx";
import Footer from "./partials/footer.jsx";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
