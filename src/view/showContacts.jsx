import Header from "../partials/header.jsx";
import Footer from "../partials/footer.jsx";
import { InfoUser } from "../components/InfoUser.jsx";

export function ShowContacts() {
    return (
    <div>
      <div className="empty"></div>
      <div className="svgSectionIn">
          <svg className="svgInvoices" width="100%" height="100%" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
          </svg> 
      </div>
      <div className="User">
        <InfoUser />
      </div>
      <Footer />
    </div>
    )
}