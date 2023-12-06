export default function LastInvoices() {
    return (    
        <div className="lastInvTable">
            <h2 className="lastInvoices">Last Invoices</h2>
            <table>
                <thead>
                    <tr>
                        <th className="invNum">Invoice Number</th>
                        <th className="date">Date due</th>
                        <th className="company">Company</th>
                        <th className="creation">Created at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>F20220915-001</td>
                        <td>15/09/2022</td>
                        <td>Jouet Jean-Michel</td>
                        <td>25/09/2020</td>
                    </tr>
                    <tr>
                        <td>F20220915-002</td>
                        <td>15/09/2022</td>
                        <td>Dunder Mifflin</td>
                        <td>25/09/2020</td>
                    </tr>
                    <tr>
                        <td>F20220915-003</td>
                        <td>15/09/2022</td>
                        <td>Pierre Cailloux</td>
                        <td>25/09/2020</td>
                    </tr>
                    <tr>
                        <td>F20220915-004</td>
                        <td>15/09/2022</td>
                        <td>Pierre Cailloux</td>
                        <td>25/09/2020</td>
                    </tr>
                    <tr>
                        <td>F20220915-005</td>
                        <td>15/09/2022</td>
                        <td>Pier Pipper</td>
                        <td>25/09/2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}