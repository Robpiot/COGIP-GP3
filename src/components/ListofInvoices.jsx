export function HomePage() {
    return (
        <div className="page">
            <div className="home">
                <h1 className="title">Manage your customers and invoices easily</h1>
                <img src="./img/homeLogo.png" className="homeLogo" alt="homeLogo"/>
            </div>
            <div className="svgSection">
                <svg width="" height="" viewBox="0 0 1299 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 39.3514H649.5L1046 0L1299 112H0V39.3514Z" fill="white"/>
                </svg> 
            </div>
            <div className="invoices">
                <div className="firstTable">
                    <h2 className="lastInvoices">Last Invoices</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Invoice Number</th>
                                <th>Date due</th>
                                <th>Company</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                            </tr>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="firstTable">
                    <h2 className="lastContacts">Last Contacts</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Mail</th>
                                <th>Company</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                                <td>5555555</td>
                            </tr>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                                <td>5555555</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="firstTable">
                    <h2 className="lastCompanies">Last Companies</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>TVA</th>
                                <th>Country</th>
                                <th>Type</th>
                                <th>Created at</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                                <td>5555555</td>
                            </tr>
                            <tr>
                                <td>11111</td>
                                <td>222222</td>
                                <td>333333</td>
                                <td>4444444</td>
                                <td>5555555</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
