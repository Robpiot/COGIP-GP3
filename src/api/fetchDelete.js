/**
 * Envoie une requête POST pour supprimer des données dans une table via l'API.
 * @param {string} tableName - Le nom de la table.
 * @param {Object} id - L'identifiant de la ligne à supprimer.
 * @returns {Promise<Object>} Un objet contenant le nom des données (de la table) et les informations de la table.
 */
export default async function fetchDelete(tableName, id) {
    const url = import.meta.env.VITE_URL;

    try {
        const response = await fetch(url + tableName + "/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // const json = await response.json();

        // const dataObject = { "dataName": tableName, "dataInfos": json.data };
        // const copyData = [...json.data];
        // const lastDataObject = {
        //     "dataName": tableName,
        //     "dataInfos": copyData.slice(-5)
        // };

        // return { dataObject, lastDataObject };

    } catch (error) {
        throw new Error(`Error when deleting data in the ${tableName} table`);
    }
}