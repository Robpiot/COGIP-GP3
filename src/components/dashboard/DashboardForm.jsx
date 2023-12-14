import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import CreateInvoices from "./form/CreateInvoices";
import CreateCompanies from "./form/CreateCompanies";
import CreateContacts from "./form/CreateContacts";


const Form = () => {

    const { componentToDisplay } = useContext(DashboardContext);

    return (
        <section className="form">
            <h3>New {componentToDisplay}</h3>
            <div className="separate"></div>
            <div className="form-container">
                {componentToDisplay === 'Invoices' && <CreateInvoices />}
                {componentToDisplay === 'Companies' && <CreateCompanies />}
                {componentToDisplay === 'Contacts' && <CreateContacts />}
            </div>
        </section>
    );
}

export default Form;