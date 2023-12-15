import DashboardImg from "../../assets/img/dashboard.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from "../../assets/utils/UserContext";
import toUppercase from "../../functions/toUppercase";

const DashboardHeader = () => {
    const { user } = useContext(UserContext);
    return ( 
        <>
            <header className="dashboard-header">
                <img src={DashboardImg} alt="Image de dashboard" />
                
                <h2>Dashboard</h2>
                <p>dashboard/</p>
                
                <div>
                    <h3>Welcome back {toUppercase(user.first_name)}!</h3>
                    <p>You can here add an invoice, a company and some contacts</p>
                </div>

                <Link to={"/"}>{'> Back to home page'}</Link>
                
            </header>
        </>
     );
}

export default DashboardHeader;