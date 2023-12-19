import { ApiContext } from "../../context/ApiContext";
import { useContext, useRef, useState } from "react";

import toUppercase from "../../functions/toUppercase";
import formatDate from "../../functions/dateFormat";

import { UserContext } from "../../assets/utils/UserContext";

const DashboardInfos = ({ data }) => {

    // console.log('data : ', data);
    const { user } = useContext(UserContext);
    const { deleteRow, companies, updateRow } = useContext(ApiContext);
    const [isBeingEdited, setIsBeingEdited] = useState({
        idRow: null,
        col_1: false,
        col_2: false,
        col_3: false,
        col_4: false
    });
    
    const inputRefCol1 = useRef();
    const inputRefCol2 = useRef();
    const inputRefCol3 = useRef();
    const inputRefCol4 = useRef();
    
    
    /**
     * Gère l'édition d'une cellule dans une ligne du tableau en récupérant la nouvelle valeur de l'input et en déclenchant la logique d'édition.
     * @param {Object} rowToEdit - La ligne à éditer.
     * @param {string} colKey - La clé de colonne indiquant quelle cellule est éditée (col_1, col_2, col_3, etc.).
     */
    async function handleEditRow(rowToEdit, colKey) {
        // Obtenir la référence appropriée en fonction de la clé de colonne
        const inputRef = colKey === 'col_1' ? inputRefCol1 : colKey === 'col_2' ? inputRefCol2 :  colKey === 'col_3' ? inputRefCol3 : inputRefCol4;

        // Obtenir la nouvelle valeur de l'input
        const inputValue = inputRef.current.value;

        // Trouver la ligne correspondante dans la table (stockée dans le state) en fonction de l'ID de la ligne à éditer.
        const row = data.dataInfos.find(row => row.id === rowToEdit.id);
        // console.log('row : ', row);

        let datasToSend = '';

        if (inputValue.trim() !== '' && inputValue.trim() !== null) {

            if (data.dataName === 'invoices') {   
                datasToSend = {
                    "ref": row.ref,
                    "id_company": row.id_company
                };         
                if (colKey === 'col_1') {
                    if (!data.dataInfos.find(row => row.ref === inputValue.trim())) {
                        datasToSend.ref = inputValue;
                    } else {
                        alert('Cette référence est déjà présente en DB ! \nEntrer une autre référence.');
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
                        alert('Ce numéro de TVA est déjà présent en DB ! \nEntrer un autre numéro de TVA.');
                    }
                } else if (colKey === 'col_3') {
                    datasToSend.country = inputValue;
                } 
            }
            console.log('datasToSend : ', datasToSend);
            await updateRow(data.dataName, rowToEdit.id, datasToSend);
        }

        // Réinitialiser l'état d'édition après la mise à jour
        setIsBeingEdited({...isBeingEdited, idRow: null, [colKey]: false});
    }


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
            break;
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
            break;
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
            break;
        case 'statistics':
            // Renvoyer directement la section statistiques.
            return (
                <section className="statistics">
                    <h3>Statistics</h3>
                    <div className="stat-container">
                        {data.dataInfos && data.dataInfos.map(stat => (
                            <div className="stat-item" key={stat.id}>
                                <p>{stat.number}</p>
                                <p>{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            );
        default:
            break;
    }
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <section className="infos">
            {data.dataName && <h3>{toUppercase(data.dataName)}</h3>}
            {data.dataName !== 'statistics' && <div className="separate"></div>}
            <div className="infos-container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{title_1}</th>
                            <th>{title_2}</th>
                            <th>{title_3}</th>
                            {title_4 && (<th>{title_4}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map(row => (
                            <tr key={row.id}>
                                {/* Bouton de suppression de ligne */}
                                {(user.role_id === 1 || (user.role_id === 2 && data.dataName !== 'contacts')) && isBeingEdited.idRow === row.id ? (
                                        <>
                                            <td>
                                                {((user.role_id === 1) || (user.role_id === 2 && data.dataName !== 'contacts')) && (
                                                    <>
                                                        <button className="btn" onClick={async () => await deleteRow(data.dataName, row.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                                <path fill="#000000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                            </svg>
                                                        </button>
                                                    </>
                                                )}
                                            </td>
                                           
                                            {/* Condition pour l'édition de col_1 */}
                                            {/* Cellule en cours d'édition (input + boutons de validation/annulation) */}
                                            {isBeingEdited.col_1 ? (
                                                <td>
                                                    <input type="text" placeholder={row.col_1} ref={inputRefCol1} />
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_1')}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                            <path fill="#000000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                                        </svg>
                                                    </button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_1: false})}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                            <path fill="#000000" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            ) : (
                                                <td>{row.col_1}</td>
                                            )}

                                            {/* Condition pour l'édition de col_2 */}
                                            {isBeingEdited.col_2 ? (
                                                <td>
                                                    <input type="text" placeholder={row.col_2} ref={inputRefCol2} />
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_2')}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                            <path fill="#000000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                                        </svg>
                                                    </button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_2: false})}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                            <path fill="#000000" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            ) : (
                                                <td>{row.col_2}</td>
                                            )}

                                            {/* Condition pour l'édition de col_3 */}
                                            {isBeingEdited.col_3 ? (
                                                <td>
                                                    {title_3 === 'Company' ? (
                                                        <select ref={inputRefCol3}>
                                                            <option value="">Choose a company...</option>
                                                            {companies.dataObject.dataInfos.map(companie => (
                                                                <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <input type="text" placeholder={row.col_3} ref={inputRefCol3} />
                                                    )}
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_3')}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                            <path fill="#000000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                                        </svg>
                                                    </button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_3: false})}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                            <path fill="#000000" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            ) : (
                                                <td>{row.col_3}</td>
                                            )}

                                            {/* Condition pour l'édition de col_4 */}
                                            {isBeingEdited.col_4 ? (
                                                <td>
                                                    {title_4 === 'Company' ? (
                                                        <select ref={inputRefCol4}>
                                                            <option value="">Choose a company...</option>
                                                            {companies.dataObject.dataInfos.map(companie => (
                                                                <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <input type="text" placeholder={row.col_4} ref={inputRefCol4} />
                                                    )}
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_4')}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                            <path fill="#000000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                                        </svg>
                                                    </button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_4: false})}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                            <path fill="#000000" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                                        </svg>
                                                    </button>
                                                </td>
                                            ) : (
                                                <td>{row.col_4}</td>
                                            )}

                                        </>
                                    ) : (
                                        <>
                                            {/* Ligne en mode non éditable (affichage des valeurs + boutons de modification) */}
                                            <td>
                                                {/* Bouton de suppression de ligne */}
                                                {((user.role_id === 1) || (user.role_id === 2 && data.dataName !== 'contacts')) && (
                                                    <>
                                                        <button className="btn" onClick={async () => await deleteRow(data.dataName, row.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                                <path fill="#000000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                            </svg>
                                                        </button>
                                                    </>
                                                )}
                                            </td>

                                            <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: true, col_2: false, col_3: false, col_4: false})}>{row.col_1}</td>
                                            <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: true, col_3: false, col_4: false})}>{row.col_2}</td>

                                            <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: false, col_3: true, col_4: false})}>{row.col_3}</td>
                                            {(title_4 && title_4 !== 'Type') && (
                                                <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: false, col_3: false, col_4: true})}>{row.col_4}</td>
                                            )}
                                            {(title_4 && title_4 === 'Type') && (
                                                <td>{row.col_4}</td>
                                            )}
                                        </>
                                    )
                                }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DashboardInfos;