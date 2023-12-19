import Footer from "../partials/footer.jsx";
import { AllCompanies } from "../components/AllCompanies.jsx";
import { SearchBar } from "../assets/utils/searchBar.jsx";
import { RequestCompanies } from "../assets/utils/Requests.jsx";
import { useState, useEffect } from 'react';

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCompanies = async () => {
      const result = await RequestCompanies();
      const sortedResult = result.sort((a, b) => a.name.localeCompare(b.name));
      setCompanies(sortedResult);
    };

    fetchCompanies();
  }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(handleChange)
  }

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.types_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="empty"></div>
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="100%" height="100%" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <h1 className="titleSection">All Companies</h1>
      <SearchBar value={searchTerm} onChange={handleChange} />
      <div className="allInvoices">
        <AllCompanies companies={filteredCompanies} />
      </div>
      <Footer />
    </div>
  );
};

export default Companies;
