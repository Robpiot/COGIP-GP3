import { RequestLastCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import formatDate from "../assets/utils/Date";
import toUppercase from "../functions/toUppercase";

export default function LastCompanies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const result = await RequestLastCompanies();
            setCompanies(result);
        };

        fetchCompanies();
    }, []);

    console.log(companies);
    
    return (
        <div className="lastCompTable">
            <h2 className="lastCompanies">Last Companies</h2>
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
                {companies.map(company => {
                    return (
                        <tr key={company.id}>
                            <td>                            
                                <Link key={company.id} to={`/ShowCompany/${company.id}`}>
                                    {toUppercase(company.name)}
                                </Link>
                            </td>
                            <td>{company.tva}</td>
                            <td>{toUppercase(company.country)}</td>
                            <td>{toUppercase(company.types_name)}</td>
                            <td>{formatDate(company.created_at)}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}