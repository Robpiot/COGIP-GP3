import { RequestLastCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';

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
                            <td>{company.name}</td>
                            <td>{company.tva}</td>
                            <td>{company.country}</td>
                            <td>{company.types_name}</td>
                            <td>{company.created_at}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}