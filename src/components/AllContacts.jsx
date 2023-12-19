import { RequestContacts } from "../assets/utils/Requests";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../assets/utils/Date";
import Loading from "./loading";

export function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await RequestContacts();
      setContacts(result);
    };

    fetchContacts();
  }, []);

  const totalPages = Math.ceil(contacts.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  console.log(contacts);

  if (contacts.length === 0) {
    return <Loading />;
  } else {
    return (
      <div>
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
            {contacts
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <Link key={contact.id} to={`/ShowContacts/${contact.id}`}>
                      {contact.name}
                    </Link>
                  </td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td>{contact.company_name}</td>
                  <td>{formatDate(contact.created_at)}</td>
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
              className={`pageNbr ${page === currentPage ? "currentPage" : ""}`}
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
    );
  }
}
