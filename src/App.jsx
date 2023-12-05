import { Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
// import Header from "./partials/header.jsx";
// import Footer from "./partials/footer.jsx";
import Dashboard from './pages/dashboard/Dashboard.jsx'

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/contacts" element={<h1>Contacts</h1>} />
        <Route path="/companies" element={<h1>Companies</h1>} />
        <Route path="/invoices" element={<h1>Invoices</h1>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
