import LastInvoices from '../components/LastInvoices.jsx';
import LastContacts from '../components/LastContacts.jsx';
import LastCompanies from '../components/LastCompanies.jsx';

export function HomePage() {
    return (
        <div className="page">
            <div className="home">
                <h1 className="title">Manage your customers and invoices easily</h1>
                <img src="/img/homeLogo.png" className="homeLogo" alt="homeLogo"/>
            </div>
            <div className="svgSection">
                <svg width="" height="" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg> 
            </div>
            <div className="invoices">
                <LastInvoices />
                <img src="/img/imgCalpin.png" className="calepin" alt="calepinImg"/>
                <LastContacts />
                <img src="/img/ampoule.png" className="ampoule" alt="ampoule"/>
                <LastCompanies />
            </div>
            <div className="endPage">
                <h2 className="endTitle">Work Better in your Company</h2>
                <img src="/img/phone.png" className="phoneImg" alt="phone"/>
                <svg className="svgYellow" width="772" height="409" viewBox="0 0 772 409" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M92.6332 0L772 167V409H0.960754L92.6332 0Z" fill="#F9DE4E"/>
                </svg> 
            </div>
        </div>
    )
}
