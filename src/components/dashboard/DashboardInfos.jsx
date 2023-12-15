import { ApiContext } from "../../context/ApiContext";
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";

import toUppercase from "../../functions/toUppercase";
import formatDate from "../../functions/dateFormat";


const DashboardInfos = ({ data }) => {

    const { deleteRow } = useContext(ApiContext);
    const { changeComponentToDisplay, setEditRow } = useContext(DashboardContext);

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
                                    <button onClick={() => handleEditRow(row.id)}>E</button>
                                    {/* <button onClick={() => changeComponentToDisplay("update" + data.dataName, row.id)}>E</button> */}
                                    <button onClick={async () => await deleteRow(data.dataName, row.id)}>D</button>
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