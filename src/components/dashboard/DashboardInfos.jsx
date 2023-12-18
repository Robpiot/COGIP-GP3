import { ApiContext } from "../../context/ApiContext";
import { useContext, useRef, useState } from "react";

import toUppercase from "../../functions/toUppercase";
import formatDate from "../../functions/dateFormat";



const DashboardInfos = ({ data }) => {

    // console.log('data : ', data);

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
        // Obtenez la référence appropriée en fonction de la clé de colonne
        const inputRef = colKey === 'col_1' ? inputRefCol1 : colKey === 'col_2' ? inputRefCol2 :  colKey === 'col_3' ? inputRefCol3 : inputRefCol4;

        // Obtenez la nouvelle valeur de l'input
        const inputValue = inputRef.current.value;

        // Trouve la ligne correspondante dans la table (stockée dans le state) en fonction de l'ID de la ligne à éditer.
        const row = data.dataInfos.find(row => row.id === rowToEdit.id);
        // console.log('row : ', row);

        let datasToSend = '';

        if (data.dataName === 'invoices') {   
            datasToSend = {
                "ref": row.ref,
                "id_company": row.id_company
            };         
            if (colKey === 'col_1') {
                datasToSend.ref = inputValue;
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
                datasToSend.tva = inputValue;
            } else if (colKey === 'col_3') {
                datasToSend.country = inputValue;
            } 
        }

        await updateRow(data.dataName, rowToEdit.id, datasToSend);

        // Réinitialisez l'état d'édition après la mise à jour
        setIsBeingEdited({...isBeingEdited, idRow: null, [colKey]: false});
    }


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Initialisez les variables pour stocker les titres des colonnes du tableau et les lignes de données.
    let title_1 = '';
    let title_2 = '';
    let title_3 = '';
    let title_4 = '';
    let datas = [];

    // Vérifiez le type de données et définissez les titres et les données en conséquence.
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
                col_2: formatDate(info.updated_at),
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
            // Return the Statistics section directly.
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
                                
                                {
                                    isBeingEdited.idRow === row.id ? (
                                        <>
                                            <td><button className="btn" onClick={async () => await deleteRow(data.dataName, row.id)}>D</button></td>
                                            
                                            {isBeingEdited.col_1 ? (
                                                <td>
                                                    <input type="text" placeholder={row.col_1} ref={inputRefCol1} />
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_1')}>E</button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_1: false})}>C</button>
                                                </td>
                                            ) : (
                                                <td>{row.col_1}</td>
                                            )}

                                            {isBeingEdited.col_2 ? (
                                                <td>
                                                    <input type="text" placeholder={row.col_2} ref={inputRefCol2} />
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_2')}>E</button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_2: false})}>C</button>
                                                </td>
                                            ) : (
                                                <td>{row.col_2}</td>
                                            )}

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
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_3')}>E</button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_3: false})}>C</button>
                                                </td>
                                            ) : (
                                                <td>{row.col_3}</td>
                                            )}

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
                                                    <button className="btn" onClick={() => handleEditRow(row, 'col_4')}>E</button>
                                                    <button className="btn" onClick={() => setIsBeingEdited({...isBeingEdited, idRow: null, col_4: false})}>C</button>
                                                </td>
                                            ) : (
                                                <td>{row.col_4}</td>
                                            )}

                                        </>
                                    ) : (
                                        <>
                                            <td><button className="btn" onClick={async () => await deleteRow(data.dataName, row.id)}>D</button></td>
                                            <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: true, col_2: false, col_3: false, col_4: false})}>{row.col_1}</td>
                                            {(title_2 && title_2 !== 'Date') && (
                                                <td onClick={() => setIsBeingEdited({idRow: row.id, col_1: false, col_2: true, col_3: false, col_4: false})}>{row.col_2}</td>
                                            )}
                                            {(title_2 && title_2 === 'Date') && 
                                                <td>{row.col_2}</td>
                                            }
                                                
                                            
                                            {/* {(title_2 !== 'Date') ? (
                                                <td onClick={() => setIsBeingEdited({...isBeingEdited, idRow: row.id, col_2: true})}>{row.col_2}</td>
                                            ) : (
                                                <td>{row.col_2}</td>
                                            )} */}
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