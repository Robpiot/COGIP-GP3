
import Footer from "../partials/footer.jsx";
import { AllContacts } from "../components/AllContacts.jsx";
import { SearchBar } from "../assets/utils/searchBar.jsx";
import { RequestContacts } from "../assets/utils/Requests.jsx";
import { useState, useEffect } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            const result = await RequestContacts();
            const sortedResult = result.sort((a, b) => a.name.localeCompare(b.name));
            setContacts(sortedResult);
        };

    fetchContacts();
  }, []);

  const handleChange = event => {
    setSearchTerm(event.target.value);
    console.log(handleChange)
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="empty"></div>
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="100%" height="100%" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <h1 className="titleSection">All contacts</h1>
      <SearchBar value={searchTerm} onChange={handleChange}/>
      <div className="allInvoices">
        <AllContacts contacts={filteredContacts}/>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
