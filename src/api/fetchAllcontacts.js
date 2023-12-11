
/**
 * Récupère toutes les données des contacts depuis l'API.
 * @returns {Promise<Object>} Un objet contenant le nom des données ("contacts") et les informations des contacts.
 */
export default async function fetchAllContacts() {

    // Récupère l'URL de l'API depuis les variables d'environnement.
    const url = import.meta.env.VITE_URL;

    // Effectue une requête pour récupérer toutes les données des contacts depuis l'API.
    const allContactsResponse = await fetch(url + "/contacts");
    const allContactsJson = await allContactsResponse.json();

    // Construit un objet avec le nom des données ("contacts") et les informations des contacts.
    const contactsDataObject = {"dataName": "contacts", "dataInfos": allContactsJson.data};

    // Retourne l'objet contenant les informations des contacts.
    return contactsDataObject;
} 