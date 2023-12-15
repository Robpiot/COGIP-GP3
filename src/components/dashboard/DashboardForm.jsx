import { DashboardContext } from "../../context/DashboardContext";
import { useContext, useEffect, useState } from "react";
import CreateInvoices from "./form/CreateInvoices";
import CreateCompanies from "./form/CreateCompanies";
import CreateContacts from "./form/CreateContacts";
import UpdateInvoice from "./form/UpdateInvoice";

import toUppercase from "../../functions/toUppercase";
import UpdateCompanie from "./form/UpdateCompanie";
import UpdateContact from "./form/UpdateContact";


const Form = () => {

    const { componentToDisplay } = useContext(DashboardContext);
    
    const [title, setTitle] = useState("");

    useEffect(() => {
        if (componentToDisplay.includes('update')) {
            const titleToUpdated = toUppercase(componentToDisplay.slice(6));
            setTitle("Update " + titleToUpdated);
        } else {
            setTitle("New " + componentToDisplay);
        }
    }, [componentToDisplay]);

    return (
        <section className="form">
            <h3>{title}</h3>
            <div className="separate"></div>
            <div className="form-container">
                {componentToDisplay === 'Invoice' && <CreateInvoices />}
                {componentToDisplay === 'Companie' && <CreateCompanies />}
                {componentToDisplay === 'Contact' && <CreateContacts />}
                {componentToDisplay === 'updateinvoice' && <UpdateInvoice />}
                {componentToDisplay === 'updatecompanie' && <UpdateCompanie />}
                {componentToDisplay === 'updatecontact' && <UpdateContact />}
            </div>
        </section>
    );
}

export default Form;