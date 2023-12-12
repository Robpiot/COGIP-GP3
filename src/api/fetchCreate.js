/**
 * Envoie une requête POST pour créer des données dans une table via l'API.
 * @param {string} tableName - Le nom de la table.
 * @param {Object} data - Les données à envoyer.
 * @returns {Promise<Object>} Un objet contenant le nom des données (de la table) et les informations de la table.
 */
export default async function createData(tableName, data) {
    const url = import.meta.env.VITE_URL;

    try {
        const response = await fetch(url + tableName, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        const dataObject = { "dataName": tableName, "dataInfos": json.data };
        const copyData = [...json.data];
        const lastDataObject = {
            "dataName": tableName,
            "dataInfos": copyData.slice(-5)
        };

        return { dataObject, lastDataObject };
    } catch (error) {
        throw new Error(`Error when creating data in the ${tableName} table`);
    }
}