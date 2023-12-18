import { createContext, useState } from "react";
import fetchAll from '../api/fetchAll';
import fetchCreate from '../api/fetchCreate';
import fetchDelete from "../api/fetchDelete";
import fetchUpdate from "../api/fetchUpdate";

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
            // const entityData = await fetchDelete(entityName, idRow);
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
            
       
            
        } catch (error) {
            console.error(`Error deleting data for ${entityName}: ${error.message}`);
        }
    };

    const updateRow = async (entityName, idRow, data) => {
        try {
            // const entityData = await fetchUpdate(entityName, idRow);
            await fetchUpdate(entityName, idRow, data);
            const entityData = await fetchAll(entityName);

            switch (entityName) {
                case 'contacts':
                    const companiesOfContacts = await fetchAll('companies');
                    setCompanies(companiesOfContacts);
                    setContacts(entityData);
                    break;
                case 'companies':
                    const typesOfCompanies = await fetchAll('types');
                    setTypes(typesOfCompanies);
                    setCompanies(entityData);
                    break;
                case 'invoices':
                    const companiesOfInvoices = await fetchAll('companies');
                    setCompanies(companiesOfInvoices);
                    setInvoices(entityData);
                    break;
            } 
        } catch (error) {
            console.error(`Error updating data for ${entityName}: ${error.message}`);
        }
    }


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
                updateRow,
                deleteRow
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
}