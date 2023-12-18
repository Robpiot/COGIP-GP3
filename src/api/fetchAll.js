
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
 * Les données sont triées par identifiant (ordre croissant).
 * @returns {Promise<Object>} Un objet contenant le nom des données (de la table) et les informations de la table.
 */
export default async function fetchAll(tableName) {

    // Récupère l'URL de l'API depuis les variables d'environnement.
    const url = import.meta.env.VITE_URL;

    try {
        // Effectue une requête pour récupérer toutes les données de la table depuis l'API.
        const response = await fetch(url + tableName);
        const json = await response.json();
        // console.warn('json.data : ', json.data.sort((a, b) => a.created_at - b.created_at));

        // Trie les données par identifiant (ordre croissant).
        const sortedData = json.data.sort((a, b) => a.id - b.id);

        // Construit un objet avec le nom des données (de la table) et les informations triées de la table.
        const dataObject = {"dataName": tableName, "dataInfos": sortedData};

 
        // Crée une copie triée des données pour le dernier objet.
        const copyData = [...sortedData];
        const lastDataObject = {
            "dataName": tableName,
            "dataInfos": copyData.slice(-5)
        };

        // Affiche les objets dans la console à des fins de débogage.
        console.log({dataObject, lastDataObject});
        
        // Retourne les objets contenants les informations des contacts et des derniers contacts.
        return {dataObject, lastDataObject};
        
    }
    catch (error) {
        throw new Error(`Error when retrieving data from the ${tableName} table: ${error.message}`);
    }
} 