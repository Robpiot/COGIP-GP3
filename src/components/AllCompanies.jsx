import { RequestCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import formatDate from "../assets/utils/Date";

export function AllCompanies() { 
    const [companies, setCompanies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage=10;

    useEffect(() => {
        const fetchCompanies = async () => {
            const result = await RequestCompanies();
            const sortedResult = result.sort((a, b) => a.name.localeCompare(b.name));
            setCompanies(sortedResult);
        };

        fetchCompanies();
    }, []);

    const totalPages = Math.ceil(companies.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    console.log(companies)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className="names">Name</th>
                        <th className="tva">TVA</th>
                        <th className="country">Country</th>
                        <th className="type">Type</th>
                        <th className="creation">Created at</th>
                    </tr>
                </thead>
                <tbody>
                {companies
                .slice((currentPage-1) * itemsPerPage, currentPage * itemsPerPage)
                .map(company => {
                    return (
                        <tr key={company.id}>
                            <td>
                                <Link key={company.id} to={`/ShowCompany/${company.id}`}>
                                    {company.name}
                                </Link>
                            </td>
                            <td>{company.tva}</td>
                            <td>{company.country}</td>
                            <td>{company.types_name}</td>
                            <td>{formatDate(company.created_at)}</td>
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
    )
}