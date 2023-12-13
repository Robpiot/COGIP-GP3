import DashboardImg from "../../assets/img/dashboard.png";

const DashboardHeader = () => {
    return ( 
        <>
            <header className="dashboard-header">
                <img src={DashboardImg} alt="Image de dashboard" />
                
                <h2>Dashboard</h2>
                <p>dashboard/</p>
                
                <div>
                    <h3>Welcome back Henry!</h3>
                    <p>You can here add an invoice, a company and some contacts</p>
                </div>
                
            </header>
        </>
     );
}

export default DashboardHeader;