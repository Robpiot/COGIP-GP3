import Header from "../partials/header.jsx";
import Footer from "../partials/footer.jsx";
import { AllContacts } from "../components/AllContacts.jsx";

const Contacts = () => {
  return (
    <div>
      <Header />
      <div className="empty"></div>
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="100%" height="100%" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <h1 className="titleSection">All contacts</h1>
      <input className="field" type="text" placeholder="Search contact"/>
      <div className="allInvoices">
        <AllContacts />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
