// import toUppercase from "../../functions/toUppercase";
// import formatDate from "../../functions/dateFormat";

// const DashboardInfos = ({ data }) => {

//     // Initialisez les variables pour stocker les titres des colonnes du tableau et les lignes de données.
//     let title_1 = '';
//     let title_2 = '';
//     let title_3 = '';
//     let datas = [];

//     // Vérifiez le type de données et définissez les titres et les données en conséquence.
//     if (data.dataName === 'contacts') {
//         title_1 = 'Name';
//         title_2 = 'Phone';
//         title_3 = 'Email';
//         datas = data.dataInfos.map(info => (
//             {
//                 id: info.id, 
//                 col_1: toUppercase(info.name), 
//                 col_2: info.phone, 
//                 col_3: info.email
//             }
//         ))
//     }
//     if (data.dataName === 'invoices') {
//         title_1 = 'Invoice Number';
//         title_2 = 'Dates';
//         title_3 = 'Company';
//         datas = data.dataInfos.map(info => (
//             {
//                 id: info.id, 
//                 col_1: info.ref, 
//                 col_2: formatDate(info.updated_at), 
//                 col_3: toUppercase(info.name)
//             }
//         ))
//     }
//     if (data.dataName === 'companies') {
//         title_1 = 'Name';
//         title_2 = 'TVA';
//         title_3 = 'Country';
//         datas = data.dataInfos.map(info => (
//             {
//                 id: info.id, 
//                 col_1: info.name, 
//                 col_2: info.tva, 
//                 col_3: toUppercase(info.country)}
//         ))
//     }

   
//     return (
//         <>  
//             {
//                 (data.dataName === 'statistics') ? (
//                     <section className="statistics">
//                         <h3>Statistics</h3>
//                         <div className="stat-container">
//                             {
//                                 data.dataInfos && (
//                                     data.dataInfos.map(stat => (
//                                         <div className="stat-item" key={stat.id}>
//                                             <p>{stat.number}</p>
//                                             <p>{stat.name}</p>
//                                         </div>
//                                     ))
//                                 )
//                             }
//                         </div>
//                     </section>
                
//                 ) : (

//                     <section className="infos">

//                         {data.dataName && (<h3>{toUppercase(data.dataName)}</h3>)}

//                         {(data.dataName !== 'statistics') && (<div className="separate"></div>)}


//                         <div className="infos-container">


//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>{title_1}</th>
//                                         <th>{title_2}</th>
//                                         <th>{title_3}</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {
//                                         datas.map(data => 
//                                             <tr key={data.id}>
//                                                 <td>{data.col_1}</td>
//                                                 <td>{data.col_2}</td>
//                                                 <td>{data.col_3}</td>
//                                             </tr>   
//                                         )
//                                     }
//                                 </tbody>
//                             </table>

//                         </div>

//                     </section>
//                 )
//             }
//         </>
//     );
// }

// export default DashboardInfos;




import toUppercase from "../../functions/toUppercase";
import formatDate from "../../functions/dateFormat";

const DashboardInfos = ({ data }) => {

    // console.log(data);

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
                            <th>{title_1}</th>
                            <th>{title_2}</th>
                            <th>{title_3}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datas.map(data => (
                            <tr key={data.id}>
                                <td>{data.col_1}</td>
                                <td>{data.col_2}</td>
                                <td>{data.col_3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default DashboardInfos;