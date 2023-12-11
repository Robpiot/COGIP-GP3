import { createContext, useState } from "react";

export const ApiContext = createContext();

import fetchAll from '../api/fetchAll';

export default function ApiProvider(props) {

    const [contacts, setContacts] = useState(null);
    const [lastContacts, setLastContacts] = useState(null);
    const [companies, setCompanies] = useState(null);
    const [lastCompanies, setLastCompanies] = useState(null);
    const [invoices, setInvoices] = useState(null);
    const [lastInvoices, setLastInvoices] = useState(null);
    // const [types, setTypes] = useState(null);

    async function fetchContacts() {
        const contacts = await fetchAll('contacts');
        setContacts(contacts.dataObject);
        setLastContacts(contacts.lastDataObject);
    }
    async function fetchCompanies() {
        const companies = await fetchAll('companies');
        setCompanies(companies.dataObject);
        setLastCompanies(companies.lastDataObject);
    }
    async function fetchInvoices() {
        const invoices = await fetchAll('invoices');
        setInvoices(invoices.dataObject);
        setLastInvoices(invoices.lastDataObject);
    }


    return (
        <ApiContext.Provider 
        value={
            { 
                fetchContacts, 
                contacts, 
                lastContacts,
                fetchCompanies, 
                companies, 
                lastCompanies,
                fetchInvoices, 
                invoices,
                lastInvoices
            }
        }>
            {props.children}
        </ApiContext.Provider>
    )
} 