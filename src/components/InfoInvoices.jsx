import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RequestCompanies, RequestInvoices } from '../assets/utils/Requests';
import formatDate from "../assets/utils/Date";

export function InfoInvoices() {
    const [invoice, setInvoices] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            const invoicesResult = await RequestInvoices();
            const companiesResult = await RequestCompanies();
    
            const invoice = invoicesResult.find(inv => inv.id === parseInt(id));
            const company = companiesResult.find(comp => comp.id === invoice.id_company);
    
            setInvoices({ ...invoice, companyName: company ? company.name : 'Unknown', companyId: company ? company.id : null });
        };
    
        fetchData();
    }, [id]);
    
    console.log('invoice:', invoice);

    if (!invoice) {
        return <div>Loading...</div>;
    }

    return (
        <div className="InvoicePage">
            <div className="infoInvoices">
                <h1 className="InvRef">{invoice.ref}</h1>
                <ul className="cont">
                    <li><span className="bold">Invoice Number: </span>{invoice.ref}</li>
                    <li><span className="bold">Due date: </span>{formatDate(invoice.due_at)}</li>
                    <li><span className="bold">Company: </span>
                        <Link to={`/ShowCompany/${invoice.companyId}`}>
                            {invoice.companyName}
                        </Link>
                    </li>
                    <li><span className="bold">Created at: </span>{formatDate(invoice.created_at)}
                    </li>
                </ul>
            </div>
        </div>
    );
}