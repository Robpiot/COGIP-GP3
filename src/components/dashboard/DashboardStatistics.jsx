
const DashboardStatistics = ( {  statistics } ) => {
    return ( 
        <section className="statistics">
            <h3>Statistics</h3>
            <div className="stat-container">
                { 
                    statistics && (
                        statistics.map(stat => (
                            <div className="stat-item" key={stat.id}>
                                <p>{stat.number}</p>
                                <p>{stat.name}</p>
                            </div>
                        ))
                    )
                }
            </div>
        </section>
     );
}

export default DashboardStatistics;