import { createContext, useState } from "react";

export const ApiContext = createContext();

import fetchAllContacts from '../api/fetchAllContacts';

export default function ApiProvider(props) {

    const [contacts, setContacts] = useState(null);
    const [companies, setCompanies] = useState(null);
    const [invoices, setInvoices] = useState(null);
    const [types, setTypes] = useState(null);
    
    // // Récupère l'URL de l'API depuis les variables d'environnement.
    // const url = import.meta.env.VITE_URL;

    // /**
    //  * Récupère toutes les données des contacts depuis l'API.
    //  * @returns {Promise<Object>} Un objet contenant le nom des données ("contacts") et les informations des contacts.
    //  */
    // async function fetchContacts() {
    //     // Effectue une requête pour récupérer toutes les données des contacts depuis l'API.
    //     const allContactsResponse = await fetch(url + "/contacts");
    //     const allContactsJson = await allContactsResponse.json();

    //     // Construit un objet avec le nom des données ("contacts") et les informations des contacts.
    //     const contactsDataObject = {"dataName": "contacts", "dataInfos": allContactsJson.data};

    //     // Retourne l'objet contenant les informations des contacts.
    //     setContacts(contactsDataObject);
    //     // return contactsDataObject;
    // }

    async function fetchContacts() {
        const contactsDataObject = await fetchAllContacts();
        setContacts(contactsDataObject);
    }
    // const contactsDataObject = fetchAllContacts();
    // setContacts(contactsDataObject);


    return (
        <ApiContext.Provider value={{fetchContacts, contacts}}>
            {props.children}
        </ApiContext.Provider>
    )

} 