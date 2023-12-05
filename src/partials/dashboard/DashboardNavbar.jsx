import { Link } from 'react-router-dom'
import AdminImg from '../../assets/img/pexels-italo-melo-2379004-1.png'

const DashboardNavbar = () => {
    return (
        // <div className="dashboard-navbar">
            <header className="dashboard-navbar">
                <nav className="menu--left" /*role="navigation"*/>
                    <div className="menuToggle">

                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <div className="menuItem">

                            <div className='avatar'>
                                <img src={AdminImg} alt="Photo de l'administrateur" />
                                <p>Henry George</p>
                            </div>

                            <div className="separate"></div>

                            <ul>
                                <li>
                                    <a href="#">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Icon_dashboard">
                                                <path id="Vector 2" d="M7.0968 6.03223V21.2903" stroke="#9698D6" />
                                                <rect id="Rectangle 30" x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6" />
                                                <path id="Vector 1" d="M0.354858 6.03223H21.2903" stroke="#9698D6" />
                                            </g>
                                        </svg>
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M3.88232 11H17.4706" stroke="#9698D6" />
                                            <path d="M3.88232 16.8235H17.4706" stroke="#9698D6" />
                                            <path d="M3.88232 7.11768H7.76468" stroke="#9698D6" />
                                            <rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6" />
                                        </svg>
                                        <p>Invoices</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <path d="M5.82355 10.353H7.76472M5.82355 14.2354H7.76472M12.2941 8.41187H15.5294M12.2941 11.6472H15.5294M12.2941 14.2354H15.5294" stroke="#9698D6" />
                                            <path d="M1.29407 16.8236H20.7058M3.8823 16.8236V7.11768H7.1176H10.3529V16.8236H3.8823Z" stroke="#9698D6" />
                                            <path d="M10.353 7.62853V5.17651H18.1177V16.8236" stroke="#9698D6" />
                                            <rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6" />
                                        </svg>
                                        <p>Companies</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                            <rect x="0.5" y="0.5" width="21" height="21" rx="2.5" stroke="#9698D6" />
                                            <path d="M16.8235 18.1176H5.17645V11.647L11 12.9411L16.8235 11.647V18.1176Z" stroke="#9698D6" />
                                            <circle cx="11" cy="8.41174" r="4.02941" stroke="#9698D6" />
                                        </svg>
                                        <p>Contacts</p>
                                    </a>
                                </li>
                            </ul>

                            
                            <div className="logout">
                                <img src={AdminImg} alt="Photo de l'administrateur" />
                                {/* <Link to={''}><p>Logout</p></Link> */}
                                <p>Logout</p>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>
        // </div>
    )
}

export default DashboardNavbar