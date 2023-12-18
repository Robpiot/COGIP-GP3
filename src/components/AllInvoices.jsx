import { RequestInvoices, RequestCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import formatDate from "../assets/utils/Date";

export function AllInvoices() {
    const [invoices, setInvoices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=10;

    useEffect(() => {
        const fetchData = async () => {
            const invoicesResult = await RequestInvoices();
            const companiesResult = await RequestCompanies();
    
            const invoicesWithCompanyData = invoicesResult.map(invoice => {
                const company = companiesResult.find(company => company.id === invoice.id_company);
                return { ...invoice, companyName: company ? company.name : 'Unknown', companyId: company ? company.id : null };
            });

            invoicesWithCompanyData.sort((a, b) => new Date(b.due_date) - new Date(a.due_date));
    
            setInvoices(invoicesWithCompanyData);
        };
    
        fetchData();
    }, []);

    const totalPages = Math.ceil(invoices.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="invNum">Invoice Number</th>
                        <th className="date">Due date</th>
                        <th className="company">Company</th>
                        <th className="creation">Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices
                    .slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage)
                    .map(invoice => {
                        return (
                            <tr key={invoice.id}>
                                <td>
                                    <Link to={`/ShowInvoices/${invoice.id}`}>
                                        {invoice.ref}
                                    </Link></td>
                                <td>{formatDate(invoice.due_at)}</td>
                                <td>
                                    <Link to={`/ShowCompany/${invoice.companyId}`}>
                                        {invoice.companyName}
                                    </Link>
                                </td>
                                <td>{formatDate(invoice.created_at)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination">
                <button className="prevPage" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                <FontAwesomeIcon icon={faChevronRight} rotation={180}/>
                </button>
                {pageNumbers.map(page => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`pageNbr ${page === currentPage ? 'currentPage' : ''}`}
                    >
                        {page}
                    </button>
                ))}
                <button className="nextPage" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </div>
    );
}