import formatDate from "../functions/dateFormat";
import toUppercase from "../functions/toUppercase";


/**
 * Fonction utilitaire qui prend en paramètre des données et retourne un objet contenant les titres de colonnes et les données adaptés au type de données spécifié.
 * @param {Object} data - Les données à traiter.
 * @returns {Object} - Un objet contenant les titres de colonnes (title_1, title_2, title_3, title_4) et les données formatées pour affichage dans un tableau (datas).
 */
export default function switchInfos(data) {

    // Initialiser les variables pour stocker les titres des colonnes du tableau et les lignes de données.
    let title_1 = '';
    let title_2 = '';
    let title_3 = '';
    let title_4 = '';
    let datas = [];

    // Vérifier le type de données et définir les titres et les données en conséquence.
    switch (data.dataName) {

        case 'contacts':
            title_1 = 'Name';
            title_2 = 'Phone';
            title_3 = 'Email';
            title_4 = 'Company';
            datas = data.dataInfos.map(info => ({
                id: info.id,
                col_1: toUppercase(info.name),
                col_2: info.phone,
                col_3: info.email,
                col_4: info.company_name
            }));
            return {title_1, title_2, title_3, title_4, datas};

        case 'invoices':
            title_1 = 'Invoice Number';
            title_2 = 'Date';
            title_3 = 'Company';
            datas = data.dataInfos.map(info => ({
                id: info.id,
                col_1: info.ref,
                col_2: formatDate(info.due_at),
                col_3: toUppercase(info.name)
            }));
            return {title_1, title_2, title_3, datas};

        case 'companies':
            title_1 = 'Name';
            title_2 = 'TVA';
            title_3 = 'Country';
            title_4 = 'Type';
            datas = data.dataInfos.map(info => ({
                id: info.id,
                col_1: info.name,
                col_2: info.tva,
                col_3: toUppercase(info.country),
                col_4: info.types_name
            }));
            return {title_1, title_2, title_3, title_4, datas};

        default:
            break;
    }
}