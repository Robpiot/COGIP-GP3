import { RequestLastContacts } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import formatDate from "../assets/utils/Date";
import toUppercase from "../functions/toUppercase";

export default function LastContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const result = await RequestLastContacts();
            setContacts(result);
        };

        fetchContacts();
    }, []);

    console.log(contacts);
    return (
        <div className="lastContTable">
            <h2 className="lastContacts">Last Contacts</h2>
            <table>
                <thead>
                    <tr>
                        <th className="namesCont">Name</th>
                        <th className="phone">Phone</th>
                        <th className="mail">Mail</th>
                        <th className="comp">Company</th>
                        <th className="creation">Created at</th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>
                            <Link key={contact.id} to={`/ShowContacts/${contact.id}`}>
                                {toUppercase(contact.name)}
                            </Link>
                        </td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>{toUppercase(contact.company_name)}</td>
                        <td>{formatDate(contact.created_at)}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>

)}