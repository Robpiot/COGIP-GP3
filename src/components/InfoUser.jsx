import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RequestContacts, RequestCompanies } from "../assets/utils/Requests";
import Loading from "./loading";
import toUppercase from '../functions/toUppercase';

export function InfoUser() {
  const [contact, setContact] = useState(null);
  const [company, setCompany] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await RequestContacts(id);
      const contact = result.find((contact) => contact.id === parseInt(id));
      setContact(contact);
    };
    fetchContacts();
  }, [id]);

  useEffect(() => {
    if (contact) {
      const fetchCompanies = async () => {
        const result = await RequestCompanies();
        const company = result.find((c) => c.id === contact.company_id);
        setCompany(company);
      };
      fetchCompanies();
    }
  }, [contact]);

  if (!contact || !company) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="contactPage">
      <div className="infoContacts">
        <h1 className="nameUser">{toUppercase(contact.name)}</h1>
        <ul className="cont">
          <li>
            <span className="bold">Contact: </span>
            {toUppercase(contact.name)}
          </li>
          <li>
            <span className="bold">Phone: </span>
            {contact.phone}
          </li>
          <li>
            <span className="bold">Mail: </span>
            {contact.email}
          </li>
          <li>
            <span className="bold">Company: </span>
            <Link key={company.id} to={`/ShowCompany/${company.id}`}>
              {contact.company_name}
            </Link>
          </li>
        </ul>
      </div>
      <img
        src="/img/Contacts/bertram.png"
        alt="bertram"
        className="userPicture"
      />
      {/* à changer */}
    </div>
  );
}
