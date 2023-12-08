import { RequestInvoices, RequestCompanies } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';

export function AllInvoices() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const invoicesResult = await RequestInvoices();
            const companiesResult = await RequestCompanies();
    
            const invoicesWithCompanyName = invoicesResult.map(invoice => {
                const company = companiesResult.find(company => company.id === invoice.id_company);
                return { ...invoice, companyName: company ? company.name : 'Unknown' };
            });
    
            setInvoices(invoicesWithCompanyName);
        };
    
        fetchData();
    }, []);

    console.log(invoices);
    
    return (
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
            {invoices.map(invoice => {
                return (
                    <tr key={invoice.id}>
                        <td>{invoice.ref}</td>
                        <td>{invoice.due_date}</td>
                        <td>{invoice.companyName}</td>
                        <td>{invoice.created_at}</td>
                    </tr>
                );
            })}
        </tbody>
        </table>
    );
}