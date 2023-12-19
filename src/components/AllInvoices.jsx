import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import formatDate from "../assets/utils/Date";
import Loading from "./loading";
import toUppercase from "../functions/toUppercase";

export function AllInvoices({ invoices }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(invoices.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (invoices.length === 0) {
    return <Loading />;
  } else {
    return (
      <div>
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
            {invoices
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((invoice) => {
                return (
                  <tr key={invoice.id}>
                    <td>
                      <Link to={`/ShowInvoices/${invoice.id}`}>
                        {invoice.ref}
                      </Link>
                    </td>
                    <td>{formatDate(invoice.due_at)}</td>
                    <td>
                      <Link to={`/ShowCompany/${invoice.companyId}`}>
                        {toUppercase(invoice.companyName)}
                      </Link>
                    </td>
                    <td>{formatDate(invoice.created_at)}</td>
                  </tr>
                );
              })}
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
    );  }

}
