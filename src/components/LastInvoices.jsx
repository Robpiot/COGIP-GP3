import {
  RequestLastInvoices,
  RequestCompanies,
} from "../assets/utils/Requests";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import formatDate from "../assets/utils/Date";
import toUppercase from "../functions/toUppercase";

import Loading from "./loading";

export default function LastInvoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const invoicesResult = await RequestLastInvoices();
      const companiesResult = await RequestCompanies();

      const invoicesWithCompanyName = invoicesResult.map((invoice) => {
        const company = companiesResult.find(
          (company) => company.id === invoice.id_company
        );
        return { ...invoice, companyName: company ? company.name : "Unknown" };
      });

      setInvoices(invoicesWithCompanyName);
    };

    fetchData();
  }, []);

  console.log(invoices);

  if (invoices.length === 0) {
    return <Loading />;
  } else {
    return (
      <div className="lastInvTable">
        <h2 className="lastInvoices">Last Invoices</h2>
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
            {invoices.map((invoice) => {
              return (
                <tr key={invoice.id}>
                  <td>
                    <Link to={`ShowInvoices/${invoice.id}`}>{invoice.ref}</Link>
                  </td>
                  <td>{formatDate(invoice.due_at)}</td>
                  <td>
                    <Link to={`/ShowCompany/${invoice.companyId}`}>
                      {invoice.companyName}
                    </Link>
                  </td>
                  <td>{formatDate(invoice.created_at)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
