import { createContext, useState } from "react";

export const ApiContext = createContext();

import fetchAll from '../api/fetchAll';



export default function ApiProvider(props) {

    const [contacts, setContacts] = useState(null);
    const [lastContacts, setLastContacts] = useState(null);
    const [contactsLength, setContactsLength] = useState(null);

    const [companies, setCompanies] = useState(null);
    const [lastCompanies, setLastCompanies] = useState(null);
    const [companiesLength, setCompaniesLength] = useState(null);

    const [invoices, setInvoices] = useState(null);
    const [lastInvoices, setLastInvoices] = useState(null);
    const [invoicesLength, setInvoicesLength] = useState(null);

    // const [types, setTypes] = useState(null);

    async function fetchContacts() {
        const contacts = await fetchAll('contacts');
        setContacts(contacts.dataObject);
        setContactsLength(contacts.dataObject.dataInfos.length);
        setLastContacts(contacts.lastDataObject);
    }
    async function fetchCompanies() {
        const companies = await fetchAll('companies');
        setCompanies(companies.dataObject);
        setCompaniesLength(companies.dataObject.dataInfos.length);
        setLastCompanies(companies.lastDataObject);
    }
    async function fetchInvoices() {
        const invoices = await fetchAll('invoices');
        setInvoices(invoices.dataObject);
        setInvoicesLength(invoices.dataObject.dataInfos.length);
        setLastInvoices(invoices.lastDataObject);
    }


    return (
        <ApiContext.Provider 
        value={
            { 
                fetchContacts, 
                contacts,
                contactsLength, 
                lastContacts,
                fetchCompanies, 
                companies, 
                companiesLength,
                lastCompanies,
                fetchInvoices, 
                invoices,
                invoicesLength,
                lastInvoices
            }
        }>
            {props.children}
        </ApiContext.Provider>
    )
} 