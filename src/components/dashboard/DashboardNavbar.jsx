import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";

import AdminImg from '../../assets/img/pexels-italo-melo-2379004-1.png'

import DashboardIcon from '../../assets/icons/dashboard.svg'
import InvoicesIcon from '../../assets/icons/invoices.svg'
import CompaniesIcon from '../../assets/icons/companies.svg'
import ContactsIcon from '../../assets/icons/contacts.svg'


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
        { label: 'Invoices', icon: <img src= {InvoicesIcon} alt='Icône de invoices' />, key: 'invoices' },
        { label: 'Companies', icon: <img src= {CompaniesIcon} alt='Icône de invoices' />, key: 'companies' },
        { label: 'Contacts', icon: <img src= {ContactsIcon} alt='Icône de invoices' />, key: 'contacts' },
    ];


    return (
        <header className="dashboard-navbar">
            <nav className="menu--left" role="navigation">
                <div className="menuToggle">

                        {/* Menu hamburger */}
                        <input type="checkbox" checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)} />
                        <span></span>
                        <span></span>
                        <span></span>


                    <div className="menuItem">

                        {/* Photo + nom de l'utilisateur */}
                        <div className='avatar'>
                            <img src={AdminImg} alt="Photo de l'administrateur" />
                            <p>Henry George</p>
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
                            <p>Logout</p>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardNavbar