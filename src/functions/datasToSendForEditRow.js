/**
 * Prépare les données à envoyer lors de la modification d'une ligne.
 * @param {Object} data - Les données de la table, comprenant le nom des données ('invoices', 'contacts', 'companies').
 * @param {Object} row - La ligne de données à modifier.
 * @param {string} colKey - La clé de la colonne à modifier ('col_1', 'col_2', 'col_3', etc.).
 * @param {string|number|Date} inputValue - La nouvelle valeur à attribuer à la cellule modifiée.
 * @returns {Object} - Les données préparées à envoyer pour la modification de la ligne.
 */
export default function datasToSendForEditRow(data, row, colKey, inputValue) {
    
    let datasToSend = null;

    if (data.dataName === 'invoices') {   
        datasToSend = {
            "ref": row.ref,
            "id_company": row.id_company
        };         
        if (colKey === 'col_1') {
            if (!data.dataInfos.find(row => row.ref === inputValue.trim())) {
                datasToSend.ref = inputValue;
            } else {
                alert('Cette référence est déjà présente en DB ! \nEntrez une autre référence.');
            }
        } else if (colKey === 'col_2') {
            datasToSend.due_at = new Date(inputValue);
        } else if (colKey === 'col_3') {
            datasToSend.id_company = parseInt(inputValue, 10);
        } 
    }
    else if (data.dataName === 'contacts') {  
        datasToSend = {
            "name": row.name,
            "company_id": row.company_id,
            "email": row.email,
            "phone": row.phone
        };          
        if (colKey === 'col_1') {
            datasToSend.name = inputValue;
        } else if (colKey === 'col_2') {
            datasToSend.phone = inputValue;
        } else if (colKey === 'col_3') {
            datasToSend.email = inputValue;
        } else if (colKey === 'col_4') {
            datasToSend.company_id = parseInt(inputValue, 10);
        } 
    }
    else if (data.dataName === 'companies') {  
        datasToSend = {
            "name": row.name,
            "type_id": row.type_id,
            "country": row.country,
            "tva": row.tva
        };          
        if (colKey === 'col_1') {
            datasToSend.name = inputValue;
        } else if (colKey === 'col_2') {
            if (!data.dataInfos.find(row => row.tva === inputValue.trim())) {
                // console.log(data.dataInfos.find(row => row.tva === inputValue.trim()));
                datasToSend.tva = inputValue;
            } else {
                alert('Ce numéro de TVA est déjà présent en DB ! \nEntrez un autre numéro de TVA.');
            }
        } else if (colKey === 'col_3') {
            datasToSend.country = inputValue;
        } 
    }

    return datasToSend;
}