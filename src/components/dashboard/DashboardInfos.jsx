import { ApiContext } from "../../context/ApiContext";
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";
import { UserContext } from "../../assets/utils/UserContext";

import toUppercase from "../../functions/toUppercase";
import formatDate from "../../functions/dateFormat";


const DashboardInfos = ({ data }) => {

    const { deleteRow } = useContext(ApiContext);
    const { changeComponentToDisplay, setEditRow } = useContext(DashboardContext);
    const { user } = useContext(UserContext);

    /**
     * Gère l'édition d'une ligne dans le tableau en modifiant le composant à afficher et en stockant les détails de l'édition.
     * @param {number} idRowToEdit - L'identifiant de la ligne à éditer.
     */
    function handleEditRow(idRowToEdit) {
        // data.dataName se termine par un "s" !   -> slice(0, -1) pour retirer ce "s"
        changeComponentToDisplay("update" + (data.dataName).slice(0, -1));
        setEditRow({
            tableName: data.dataName,
            idRow: idRowToEdit
        })
    }

    // Initialisez les variables pour stocker les titres des colonnes du tableau et les lignes de données.
    let title_1 = '';
    let title_2 = '';
    let title_3 = '';
    let datas = [];

    // Vérifiez le type de données et définissez les titres et les données en conséquence.
    switch (data.dataName) {
        case 'contacts':
            title_1 = 'Name';
            title_2 = 'Phone';
            title_3 = 'Email';
            datas = data.dataInfos.map(info => ({
                id: info.id,
                col_1: toUppercase(info.name),
                col_2: info.phone,
                col_3: info.email
            }));
            break;
        case 'invoices':
            title_1 = 'Invoice Number';
            title_2 = 'Dates';
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
            datas = data.dataInfos.map(info => ({
                id: info.id,
                col_1: info.name,
                col_2: info.tva,
                col_3: toUppercase(info.country)
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
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map(row => (
                            <tr key={row.id}>
                                <td>

                                    {((user.role_id === 1) || (user.role_id === 2 && data.dataName !== 'contacts')) && (
                                        <>
                                            <button className="editDelete" onClick={() => handleEditRow(row.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                    <path fill="#000000" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/>
                                                </svg>
                                            </button>
                                            {/* <button onClick={() => changeComponentToDisplay("update" + data.dataName, row.id)}>E</button> */}
                                            <button className="editDelete" onClick={async () => await deleteRow(data.dataName, row.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                                    <path fill="#000000" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                                                </svg>
                                            </button>
                                        </>
                                    )}
                                    
                                </td>
                                <td>{row.col_1}</td>
                                <td>{row.col_2}</td>
                                <td>{row.col_3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DashboardInfos;