import { DashboardContext } from "../../context/DashboardContext";
import React, { useContext } from "react";
import { UserContext } from "../../assets/utils/UserContext";
import toUppercase from "../../functions/toUppercase";

import AdminImg from '../../assets/img/pexels-italo-melo-2379004-1.png'

import DashboardIcon from '../../assets/icons/dashboard.svg'
import InvoicesIcon from '../../assets/icons/invoices.svg'
import CompaniesIcon from '../../assets/icons/companies.svg'
import ContactsIcon from '../../assets/icons/contacts.svg'
import Logoff from "../../assets/utils/Logoff";

/*
    Extraction des éléments répétitifs : 
    Extraire le code répétitif dans une fonction pour éviter la duplication de code. 
    Cela rendra le composant plus lisible et plus facile à maintenir.
*/
const MenuItem = ({ label, icon, onClick, isSelected }) => (
    <li
        onClick={onClick}
        style={{
            fontWeight: isSelected ? '600' : 'normal',
        }}
    >

        {icon}

        <p style={{
            borderRight: isSelected ? '15px solid #9698D6' : 'none',
            width: '100%',
            padding: '5px 0',
        }}>
            {label}
        </p>

  </li>
);



const DashboardNavbar = () => {
    const { user } = useContext(UserContext);

    const handleLogoff = () => {
        Logoff();
    }

    const { 
        changeComponentToDisplay, 
        componentToDisplay,
        setMenuOpen,
        isMenuOpen
    } = useContext(DashboardContext);

    const handleDashboardClick = (e) => {
        e.preventDefault();
        changeComponentToDisplay(e.target.textContent);
        setMenuOpen(false);
    };

    const menuItems = [
        { label: 'Dashboard', icon: <img src= {DashboardIcon} alt='Icône du dashboard' />, key: 'dashboard' },
        { label: 'Invoice', icon: <img src= {InvoicesIcon} alt='Icône de invoices' />, key: 'invoice' },
        { label: 'Companie', icon: <img src= {CompaniesIcon} alt='Icône de invoices' />, key: 'companie' },
        { label: 'Contact', icon: <img src= {ContactsIcon} alt='Icône de invoices' />, key: 'contact' },
    ];


    return (
        <header className="dashboard-navbar">
            <nav className="menu--left" role="navigation">
                <div className="menuToggle">

                        {/* Menu hamburger */}
                        <input 
                            type="checkbox" 
                            checked={isMenuOpen} 
                            onChange={() => setMenuOpen(!isMenuOpen)} 
                            id="menu-dashboard"
                            name="menu-dashboard"
                        />
                        <span></span>
                        <span></span>
                        <span></span>


                    <div className="menuItem">

                        {/* Photo + nom de l'utilisateur */}
                        <div className='avatar'>
                            <img src={AdminImg} alt="Photo de l'administrateur" />
                            <p>{toUppercase(user.first_name)} {toUppercase(user.last_name)}</p>
                        </div>

                        {/* Ligne de séparation */}
                        <div className="separate"></div>

                        {/* Navigation */}
                        <ul>
                        {
                            menuItems.map((item) => (
                                <MenuItem
                                    key={item.key}
                                    label={item.label}
                                    icon={item.icon}
                                    onClick={handleDashboardClick}
                                    isSelected={componentToDisplay === item.label}
                                />
                            ))
                        }
                        </ul>

                        {/* Section pour se déconnecter (logout) */}
                        <div className="logout">
                            <img src={AdminImg} alt="Photo de l'administrateur" />
                            {/* <Link to={''}><p>Logout</p></Link> */}
                            <Logoff />
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardNavbar