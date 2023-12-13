import { RequestCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function AllCompanies() { 
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchCompanies = async () => {
            const result = await RequestCompanies();
            setCompanies(result);
        };

        fetchCompanies();
    }, []);

    console.log(companies)

    return (
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
                                {company.name}
                            </Link>
                        </td>
                        <td>{company.tva}</td>
                        <td>{company.country}</td>
                        <td>{company.type}</td>
                        <td>{company.created_at}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}