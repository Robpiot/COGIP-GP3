import Header from "./Header";
import DashboardImg from "../../assets/img/dashboard.png";
const Main = () => {
    return (
        <main className="dashboard-main">
            <img src={DashboardImg} alt="Image de dashboard" />
            <Header />
        </main>
    );
}

export default Main;