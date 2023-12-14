import { createContext, useState } from "react";
import fetchAll from '../api/fetchAll';
import fetchCreate from '../api/fetchCreate';
import fetchDelete from "../api/fetchDelete";

export const ApiContext = createContext();

export default function ApiProvider(props) {

    const [contacts, setContacts] = useState(null);
    const [companies, setCompanies] = useState(null);
    const [invoices, setInvoices] = useState(null);
    const [types, setTypes] = useState(null);

    const fetchEntity = async (method, entityName, setEntity, data) => {
        try {
            if (method === 'get') {
                const entityData = await fetchAll(entityName);
                setEntity(entityData);
            }
            else if (method === 'post') {
                await fetchCreate(entityName, data);
                const entityData = await fetchAll(entityName);
                setEntity(entityData);
                // const entityData = await fetchCreate(entityName, data);
                // setEntity(entityData.dataObject);
            }
        } catch (error) {
            console.error(`Error fetching data for ${entityName}: ${error.message}`);
        }
    };

    
    const deleteRow = async (entityName, idRow) => {
        try {
            await fetchDelete(entityName, idRow);
            const entityData = await fetchAll(entityName);
            switch (entityName) {
                case 'contacts':
                    setContacts(entityData);
                    break;
                case 'companies':
                    setCompanies(entityData);
                    break;
                case 'invoices':
                    setInvoices(entityData);
                    break;
            }
            // const entityData = await fetchDelete(entityName, idRow);
            // setEntity(entityData);
            
        } catch (error) {
            console.error(`Error fetching data for ${entityName}: ${error.message}`);
        }
    };


    return (
        <ApiContext.Provider
            value={{
                fetchContacts: async () => await fetchEntity('get', 'contacts', setContacts),
                createContacts: async (data) => await fetchEntity('post', 'contacts', setContacts, data),
                contacts,
                fetchCompanies: async () => await fetchEntity('get', 'companies', setCompanies),
                createCompanies: async (data) => await fetchEntity('post', 'companies', setCompanies, data),
                companies,
                fetchInvoices: async () => await fetchEntity('get', 'invoices', setInvoices),
                createInvoices: async (data) => await fetchEntity('post', 'invoices', setInvoices, data),
                invoices,
                fetchTypes: async () => await fetchEntity('get', 'types', setTypes),
                types,
                deleteRow
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
}