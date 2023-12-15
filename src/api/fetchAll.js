
// /**
//  * Récupère toutes les données des contacts depuis l'API.
//  * @returns {Promise<Object>} Un objet contenant le nom des données ("contacts") et les informations des contacts.
//  */
// export default async function fetchAllContacts() {

//     // Récupère l'URL de l'API depuis les variables d'environnement.
//     const url = import.meta.env.VITE_URL;

//     // Effectue une requête pour récupérer toutes les données des contacts depuis l'API.
//     const allContactsResponse = await fetch(url + "/contacts");
//     const allContactsJson = await allContactsResponse.json();

//     // Construit un objet avec le nom des données ("contacts") et les informations des contacts.
//     const contactsDataObject = {"dataName": "contacts", "dataInfos": allContactsJson.data};

//     // Retourne l'objet contenant les informations des contacts.
//     return contactsDataObject;
// } 

/**
 * Récupère toutes les données d'une table depuis l'API.
 * @returns {Promise<Object>} Un objet contenant le nom des données (de la table) et les informations de la table.
 */
export default async function fetchAll(tableName) {

    // Récupère l'URL de l'API depuis les variables d'environnement.
    const url = import.meta.env.VITE_URL;

    try {
        // Effectue une requête pour récupérer toutes les données de la table depuis l'API.
        const response = await fetch(url + tableName);
        const json = await response.json();
    
        // Construit un objet avec le nom des données (de la table) et les informations de la table.
        const dataObject = {"dataName": tableName, "dataInfos": json.data};
 
        const copyData = [...json.data];
        const lastDataObject = {
            "dataName": tableName,
            "dataInfos": copyData.slice(-5)
        };
        // console.warn('dataObject : ', dataObject);
        // console.warn('lastDataObject : ', lastDataObject);
        // console.log({dataObject, lastDataObject});
        
        // Retourne les objets contenants les informations des contacts et des derniers contacts.
        return {dataObject, lastDataObject};
        
    }
    catch (error) {
        throw new Error(`Error when retrieving data from the ${tableName} table`);
    }
} 