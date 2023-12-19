import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  RequestCompanies,
  RequestContacts,
  RequestInvoices,
} from "../assets/utils/Requests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../assets/utils/Date";
import Loading from "./loading";
import toUppercase from '../functions/toUppercase';


export function InfoCompany() {
  const [company, setCompany] = useState(null);
  const [contact, setContact] = useState([]);
  const [invoice, setInvoices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { id } = useParams();

  useEffect(() => {
    const fetchCompanies = async () => {
      const result = await RequestCompanies(id);
      const company = result.find((company) => company.id === parseInt(id));
      setCompany(company);

      const resultInvoices = await RequestInvoices();
      const filteredInvoices = resultInvoices.filter(
        (invoice) => invoice.id_company === company.id
      );
      setInvoices(filteredInvoices);
    };
    fetchCompanies();

    const fetchContacts = async () => {
      const result = await RequestContacts();
      setContact(result);
    };
    fetchContacts();
  }, [id]);

  const totalPages = Math.ceil(invoice.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (!company) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="user">
      <div className="infos">
        <h1 className="name">{toUppercase(company.name)}</h1>
        <div className="infoUsers">
          <ul>
            <li>
              <span className="bold">Name:</span> {toUppercase(company.name)}
            </li>
            <li>
              <span className="bold">TVA:</span> {company.tva}
            </li>
            <li>
              <span className="bold">Country:</span> {toUppercase(company.country)}
            </li>
            <li>
              <span className="bold">Type:</span> {toUppercase(company.types_name)}
            </li>
          </ul>
        </div>
      </div>

      <div className="contactInfo">
        <h2 className="contacts">Contact people</h2>
        <div className="contactPeople">
          {contact &&
            contact
              .filter((c) => c.company_name === company.name)
              .map((contact) => (
                <div className="people" key={contact.id}>
                  <img
                    className="contactPicture"
                    src="/img/Contacts/bertram.png"
                    alt="contact-picture"
                  ></img>
                  <h3 className="contactName">
                    <Link key={contact.id} to={`/ShowContacts/${contact.id}`}>
                      {toUppercase(contact.name)}
                    </Link>
                  </h3>
                </div>
              ))}
          <img src="/img/imgCalpin.png" className="calepin" alt="calepinImg" />
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
              {invoice
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((invoice) => (
                  <tr key={invoice.id}>
                    <td>
                      <Link to={`/ShowInvoices/${invoice.id}`}>
                        {invoice.ref}
                      </Link>
                    </td>
                    <td>{formatDate(invoice.due_at)}</td>
                    <td>
                      <Link key={company.id} to={`/ShowCompany/${company.id}`}>
                        {toUppercase(company.name)}
                      </Link>
                    </td>
                    <td>{formatDate(invoice.created_at)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              className="prevPage"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronRight} rotation={180} />
            </button>
            {pageNumbers.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`pageNbr ${
                  page === currentPage ? "currentPage" : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="nextPage"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
