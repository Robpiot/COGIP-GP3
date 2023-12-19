import Footer from "../partials/footer.jsx";
import { AllInvoices } from "../components/AllInvoices.jsx";
import { SearchBar } from "../assets/utils/searchBar.jsx";
import { RequestInvoices, RequestCompanies } from "../assets/utils/Requests.jsx";
import { useState, useEffect } from 'react';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const invoicesResult = await RequestInvoices();
      const companiesResult = await RequestCompanies();

      const invoicesWithCompanyData = invoicesResult.map((invoice) => {
        const company = companiesResult.find(
          (company) => company.id === invoice.id_company
        );
        return {
          ...invoice,
          companyName: company ? company.name : "Unknown",
          companyId: company ? company.id : null,
        };
      });

      invoicesWithCompanyData.sort(
        (a, b) => new Date(b.due_date) - new Date(a.due_date)
      );

      setInvoices(invoicesWithCompanyData);
    };

    fetchData();
  }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(handleChange)
  }

  const filteredInvoices = invoices.filter(invoice =>
    invoice.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="empty"></div>
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="100%" height="100%" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <h1 className="titleSection">All invoices</h1>
      <SearchBar value={searchTerm} onChange={handleChange} />
      <div className="allInvoices">
        <AllInvoices invoices={filteredInvoices} />
      </div>
      <Footer />
    </div>
  );
};

export default Invoices;
