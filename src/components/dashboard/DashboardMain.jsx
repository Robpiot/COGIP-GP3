import DashboardHeader from "./DashboardHeader";
import DashboardImg from "../../assets/img/dashboard.png";
import DashboardSections from "./DashboardSections";
const DashboardMain = () => {
    return (
        <main className="dashboard-main">
            <img src={DashboardImg} alt="Image de dashboard" />
            <DashboardHeader />
            <DashboardSections />
            
        </main>
    );
}

export default DashboardMain;