// import { createContext, useState } from "react";
// import fetchAll from '../api/fetchAll';
// import fetchCreate from '../api/fetchCreate';

// export const ApiContext = createContext();

// export default function ApiProvider(props) {
//     const [contacts, setContacts] = useState(null);
//     const [companies, setCompanies] = useState(null);
//     const [invoices, setInvoices] = useState(null);
//     const [types, setTypes] = useState(null);

//     const fetchEntity = async (method, entityName, setEntity, data) => {
//         try {
//             const entityData = method === 'get'
//                 ? await fetchAll(entityName)
//                 : await fetchCreate(entityName, data);

//             setEntity(entityData.dataObject);
//         } catch (error) {
//             console.error(`Erreur lors de la récupération des données pour ${entityName} : ${error.message}`);
//         }
//     };

//     const fetchData = async (method, entityName, setEntity, data) => {
//         await fetchEntity(method, entityName, setEntity, data);
//     };

//     return (
//         <ApiContext.Provider
//             value={{
//                 fetchContacts: () => fetchData('get', 'contacts', setContacts),
//                 contacts,
//                 fetchCompanies: () => fetchData('get', 'companies', setCompanies),
//                 companies,
//                 fetchInvoices: () => fetchData('get', 'invoices', setInvoices),
//                 createInvoices: (data) => fetchData('post', 'invoices', setInvoices, data),
//                 invoices,
//                 fetchTypes: () => fetchData('get', 'types', setTypes),
//                 types
//             }}
//         >
//             {props.children}
//         </ApiContext.Provider>
//     );
// }

// ///////////////////////////////////////////////////////////////////////////

import { createContext, useState } from "react";
import fetchAll from '../api/fetchAll';
import fetchCreate from '../api/fetchCreate';

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
                setEntity(entityData.dataObject);
            }
            else if (method === 'post') {
                // await fetchCreate(entityName, data);
                const entityData = await fetchCreate(entityName, data);
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

    const createInvoices = async (data) => {
        await fetchEntity('post', 'invoices', setInvoices, data);
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