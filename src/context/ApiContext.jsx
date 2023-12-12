import { createContext, useState } from "react";
import fetchAll from '../api/fetchAll';
import fetchCreate from '../api/fetchCreate';

export const ApiContext = createContext();

export default function ApiProvider(props) {

    const [contacts, setContacts] = useState(null);
    const [companies, setCompanies] = useState(null);
    const [invoices, setInvoices] = useState(null);
    const [types, setTypes] = useState(null);

    const fetchEntity = async (method, entityName, setEntity) => {
        try {
            if (method === 'get') {
                const entityData = await fetchAll(entityName);
                setEntity(entityData.dataObject);
            }
            else if (method === 'post') {
                const entityData = await fetchCreate(entityName);
                setEntity(entityData.dataObject);
            }
        } catch (error) {
            console.error(`Error fetching data for ${entityName}: ${error.message}`);
        }
    };

    const fetchContacts = async () => {
        await fetchEntity('get', 'contacts', setContacts);
    };

    const fetchCompanies = async () => {
        await fetchEntity('get', 'companies', setCompanies);
    };

    const fetchInvoices = async () => {
        await fetchEntity('get', 'invoices', setInvoices);
    };

    const fetchTypes = async () => {
        await fetchEntity('get', 'types', setTypes);
    };

    const createInvoices = async () => {
        await fetchEntity('post', 'invoices', setInvoices);
    };

    return (
        <ApiContext.Provider
            value={{
                fetchContacts,
                contacts,
                fetchCompanies,
                companies,
                fetchInvoices,
                createInvoices,
                invoices,
                fetchTypes,
                types
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
}