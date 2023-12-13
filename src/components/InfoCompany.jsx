import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RequestCompanies, RequestContacts, RequestInvoices } from '../assets/utils/Requests';

export function InfoCompany() {
    const [company, setCompany] = useState(null);
    const [contact, setContact] = useState([]);
    const [invoice, setInvoices] = useState([]);
    const { id } = useParams();

    useEffect (() => {
        const fetchCompanies = async () => {
            const result = await RequestCompanies(id); 
            const company = result.find(company => company.id === parseInt(id));
            setCompany(company);
            console.log(company);
        };
        fetchCompanies();

        const fetchContacts = async () => {
            const result = await RequestContacts();
            setContact(result);
        };
        fetchContacts();

        const fetchInvoices = async () => {
            const result = await RequestInvoices();
            setInvoices(result);
            console.log(result);
        };
        fetchInvoices();

    }, [id]);

    if (!company) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user">
            <div className="infos">
                <h1 className="name">{company.name}</h1>
                <div className="infoUsers">
                    <ul>
                        <li><span className="bold">Name:</span> {company.name}</li>
                        <li><span className="bold">TVA:</span> {company.tva}</li>
                        <li><span className="bold">Country:</span> {company.country}</li>
                        <li><span className="bold">Type:</span> {company.types_name}</li>
                    </ul>
                </div>
            </div>

            <div className="contactInfo">
                <h2 className="contacts">Contact people</h2>
                <div className="contactPeople">
                {contact && contact.filter(c => c.company_name === company.name).map((contact) => (
                    <div className="people" key={contact.id}>
                        <img className="contactPicture" src="/img/Contacts/bertram.png" alt="contact-picture"></img>
                        <h3 className="contactName">
                            <Link key={contact.id} to={`/ShowContacts/${contact.id}`}>
                                {contact.name}
                            </Link>
                        </h3>
                    </div>
                ))}
                    <img src="/img/imgCalpin.png" className="calepin" alt="calepinImg"/>
                </div>
            </div>

            <div className="lastInvoices">
                <h2 className="lastInv">Last Invoices</h2>
                <div className="userLastInv">
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
                        {invoice && invoice.filter(invoice => invoice.id_company === company.id).map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.ref}</td>
                                <td>{invoice.due_date}</td>
                                <td>
                                    <Link key={company.id} to={`/ShowCompany/${company.id}`}>
                                        {company.name}
                                    </Link>
                                </td>
                                <td>{invoice.created_at}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}