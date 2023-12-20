import { ApiContext } from "../../context/ApiContext";
import { useContext, useRef, useState } from "react";

import toUppercase from "../../functions/toUppercase";
import switchInfos from "../../functions/switchInfos";
import datasToSendForEditRow from "../../functions/datasToSendForEditRow";


import { UserContext } from "../../assets/utils/UserContext";

import DeleteIcon from '../../assets/icons/delete.svg';
import EditIcon from '../../assets/icons/edit.svg';
import CancelIcon from '../../assets/icons/cancel.svg';

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
     * Gère l'édition d'une cellule dans une ligne du tableau.
     * @param {Object} rowToEdit - La ligne à éditer.
     * @param {string} colKey - La clé de colonne indiquant quelle cellule est éditée (col_1, col_2, col_3, etc.).
     */
    async function handleEditRow(rowToEdit, colKey) {
        // Obtenir la référence appropriée en fonction de la clé de colonne
        const inputRef = colKey === 'col_1' ? inputRefCol1 : colKey === 'col_2' ? inputRefCol2 :  colKey === 'col_3' ? inputRefCol3 : inputRefCol4;

        // Obtenir la nouvelle valeur de l'input
        const inputValue = inputRef.current.value;

        // Si la nouvelle valeur de l'input n'est pas vide ou null
        if (inputValue.trim() !== '' && inputValue.trim() !== null) {   
            // Trouver la ligne correspondante dans la table (stockée dans le state) en fonction de l'ID de la ligne à éditer.
            const row = data.dataInfos.find(row => row.id === rowToEdit.id);

            // Prépare les données à envoyer pour la modification de la ligne  
            const datasToSend = datasToSendForEditRow(data, row, colKey, inputValue);

            // Met à jour la ligne via l'API avec les données préparées
            await updateRow(data.dataName, rowToEdit.id, datasToSend);
        }

        // Réinitialiser l'état d'édition après la mise à jour
        setIsBeingEdited({...isBeingEdited, idRow: null, [colKey]: false});
    }

    // Utilise la fonction switchInfos pour déterminer les titres de colonnes et les données en fonction du type de données (contacts, invoices, companies).
    const switchResult = switchInfos(data);


    return (
        <>
        {data.dataName === "statistics" ? 
        (
            // Affichage de la section "statistics"
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

        ) : (
            /* 
                Affichage des trois autres sections (contacts, invoices, companies),
                en fonction des données reçues de la fonction switchInfos à qui on a passé les "data" en arguments.
                Les "data" que l'on reçoit via les props.
            */
            <section className="infos">
                {data.dataName && <h3>{toUppercase(data.dataName)}</h3>}
                {/* {data.dataName !== 'statistics' && <div className="separate"></div>} */}
                <div className="separate"></div>
                <div className="infos-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>{switchResult.title_1}</th>
                                <th>{switchResult.title_2}</th>
                                <th>{switchResult.title_3}</th>
                                {switchResult.title_4 && (<th>{switchResult.title_4}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {switchResult.datas.map(row => (
                                <tr key={row.id}>
                                    {/* Bouton de suppression de ligne */}
                                    {(user.role_id === 1 || (user.role_id === 2 && data.dataName !== 'contacts')) && isBeingEdited.idRow === row.id ? 
                                        (
                                            <>
                                                <td>
                                                    {((user.role_id === 1) || (user.role_id === 2 && data.dataName !== 'contacts')) && (
                                                        <>
                                                            <button className="btn" onClick={async () => await deleteRow(data.dataName, row.id)}>
                                                                <img src={DeleteIcon} alt="Supprimer" />
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
                                                            <img src={EditIcon} alt="Modifier" />
                                                        </button>
                                                        <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_1: false})}>
                                                            <img src={CancelIcon} alt="Annuler" />
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
                                                            <img src={EditIcon} alt="Modifier" />
                                                        </button>
                                                        <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_2: false})}>
                                                            <img src={CancelIcon} alt="Annuler" />
                                                        </button>
                                                    </td>
                                                ) : (
                                                    <td>{row.col_2}</td>
                                                )}

                                                {/* Condition pour l'édition de col_3 */}
                                                {isBeingEdited.col_3 ? (
                                                    <td>
                                                        {switchResult.title_3 === 'Company' ? (
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
                                                            <img src={EditIcon} alt="Modifier" />
                                                        </button>
                                                        <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_3: false})}>
                                                            <img src={CancelIcon} alt="Annuler" />
                                                        </button>
                                                    </td>
                                                ) : (
                                                    <td>{row.col_3}</td>
                                                )}

                                                {/* Condition pour l'édition de col_4 */}
                                                {isBeingEdited.col_4 ? (
                                                    <td>
                                                        {switchResult.title_4 === 'Company' ? (
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
                                                            <img src={EditIcon} alt="Modifier" />
                                                        </button>
                                                        <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_4: false})}>
                                                            <img src={CancelIcon} alt="Annuler" />
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
                                                                <img src={DeleteIcon} alt="Supprimer" />
                                                            </button>
                                                        </>
                                                    )}
                                                </td>

                                                <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: true, col_2: false, col_3: false, col_4: false})}>{row.col_1}</td>
                                                <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: true, col_3: false, col_4: false})}>{row.col_2}</td>

                                                <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: false, col_3: true, col_4: false})}>{row.col_3}</td>
                                                {(switchResult.title_4 && switchResult.title_4 !== 'Type') && (
                                                    <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: false, col_3: false, col_4: true})}>{row.col_4}</td>
                                                )}
                                                {(switchResult.title_4 && switchResult.title_4 === 'Type') && (
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
        )}
    </>
    );
};

export default DashboardInfos;