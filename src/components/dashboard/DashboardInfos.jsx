
const DashboardInfos = ({ data }) => {
    console.log('data', data);


    function toUppercase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

   
    return (
        <>  
            {
                (data.dataName === 'statistics') ? (
                    <section className="statistics">
                        <h3>Statistics</h3>
                        <div className="stat-container">
                            {
                                data.dataInfos && (
                                    data.dataInfos.map(stat => (
                                        <div className="stat-item" key={stat.id}>
                                            <p>{stat.number}</p>
                                            <p>{stat.name}</p>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </section>
                
                ) : (

                    <section className="infos">

                        {data.dataName && (<h3>{toUppercase(data.dataName)}</h3>)}

                        {(data.dataName !== 'statistics') && (<div className="separate"></div>)}


                        <div className="infos-container">


                            <table>
                                <thead>
                                    <tr>
                                        {/* Pour chaque clé de la première entrée dans data.dataInfos */}
                                        {Object.keys(data.dataInfos[0]).map((key) =>
                                            // Si la clé n'est pas 'id', crée une cellule d'en-tête (<th>)
                                            key !== 'id' ? <th key={key}>{toUppercase(key)}</th> : null
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Pour chaque objet (ligne) dans data.dataInfos */}
                                    {data.dataInfos.map((item, index) => (
                                        <tr key={index}>
                                            {/* Pour chaque propriété (colonne) dans l'objet */}
                                            {Object.keys(item).map((key) =>
                                                // Si la propriété n'est pas 'id', crée une cellule de tableau (<td>)
                                                key !== 'id' && <td key={key}>{item[key]}</td>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </section>

                )
            }
        </>
    );
}

export default DashboardInfos;


