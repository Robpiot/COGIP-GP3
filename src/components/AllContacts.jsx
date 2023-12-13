import { RequestContacts } from "../assets/utils/Requests";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function AllContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const result = await RequestContacts();
            setContacts(result);
        };

        fetchContacts();
    }, []);

    console.log(contacts)

    return (
        <table>
            <thead>
                <tr>
                    <th className="names">Name</th>
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
                            {contact.name}
                        </Link>
                    </td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>{contact.company_name}</td>
                    <td>{contact.created_at}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}