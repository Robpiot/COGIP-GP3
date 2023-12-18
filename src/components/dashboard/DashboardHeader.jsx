import DashboardImg from "../../assets/img/dashboard.png";
import { Link } from "react-router-dom";

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

        <Link to={"/"}>
          <button className="homeBtn">Home Page</button>
        </Link>
      </header>
    </>
  );
};

export default DashboardHeader;
