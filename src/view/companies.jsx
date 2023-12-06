import Header from "../partials/header.jsx";
import Footer from "../partials/footer.jsx";
import { AllCompanies } from "../components/AllCompanies.jsx";

const Companies = () => {
  return (
    <div>
      <Header />
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="" height="" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <h1 className="titleSection">All Companies</h1>
      <input className="field" type="text" placeholder="Search company name"/>
      <div className="allInvoices">
        <AllCompanies />
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
