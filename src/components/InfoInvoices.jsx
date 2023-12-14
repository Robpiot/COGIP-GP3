import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RequestInvoices } from '../assets/utils/Requests';

export function InfoInvoices() {
    const [invoice, setInvoices] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect (() => {
        const fetchInvoices = async () => {
            const result = await RequestInvoices(id);
            const invoice = result.find(invoice => invoice.id === parseInt(id));
            setInvoices(invoice);
        };
        fetchInvoices();
    }, [id]);

    // useEffect(() => {
    //     if (contact) {
    //         const fetchCompanies = async () => {
    //             const result = await RequestCompanies();
    //             const company = result.find(c => c.id === contact.company_id);
    //             setCompany(company);
    //         };
    //         fetchCompanies();
    //     }
    // }, [contact]);

    if (!invoice) {
        return <div>Loading...</div>;
    }

    return (
        <div className="InvoicePage">
            <div className="infoInvoices">
                <h1 className="InvRef">{invoice.ref}</h1>
                <ul className="cont">
                    {/* <li><span className="bold">Contact: </span>{contact.name}</li>
                    <li><span className="bold">Phone: </span>{contact.phone}</li>
                    <li><span className="bold">Mail: </span>{contact.email}</li>
                    <li><span className="bold">Company: </span>
                        <Link key={company.id} to={`/ShowCompany/${company.id}`}>
                            {contact.company_name}
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}