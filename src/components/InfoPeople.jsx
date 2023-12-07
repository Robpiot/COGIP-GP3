export function InfoPeople() {
    return (
        <div className="user">
            <div className="infos">
                <h1 className="name">{/* {user.name} */}Pied Pipper</h1>
                <div className="infoUsers">
                    <ul>
                        <li><span className="bold">Name:</span> {/*{user.name}*/}Pied Pipper</li>
                        <li><span className="bold">TVA:</span> {/*{user.TVA}*/}BE87 876 767 565</li>
                        <li><span className="bold">Country:</span> {/*{user.country}*/}Belgium</li>
                        <li><span className="bold">Type:</span> {/*{user.supplier}*/}Supplier</li>
                    </ul>
                </div>
            </div>

            <div className="contactInfo">
                <h2 className="contacts">Contact people</h2>
                <div className="contactPeople">
                    <div className="people">
                        <img className="contactPicture" src="/img/Contacts/bertram.png" alt="contact-picture"></img>
                        <h3 className="contactName">{/*{contact.name}*/}Bertram Glfoyle</h3>
                    </div>
                    <div className="people">
                        <img className="contactPicture" src="/img/Contacts/henry.png" alt="contact-picture"></img>
                        <h3 className="contactName">{/*{contact.name}*/}Henry George</h3>
                    </div>
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
                        <tr>
                            <td>F20220915-001</td>
                            <td>15/09/2022</td>
                            <td>Pied Pipper</td>
                            <td>25/09/2020</td>
                        </tr>
                        <tr>
                            <td>F20220915-002</td>
                            <td>15/09/2022</td>
                            <td>Pied Pipper</td>
                            <td>25/09/2020</td>
                        </tr>
                        <tr>
                            <td>F20220915-003</td>
                            <td>15/09/2022</td>
                            <td>Pied Pipper</td>
                            <td>25/09/2020</td>
                        </tr>
                        <tr>
                            <td>F20220915-004</td>
                            <td>15/09/2022</td>
                            <td>Pied Pipper</td>
                            <td>25/09/2020</td>
                        </tr>
                        <tr>
                            <td>F20220915-005</td>
                            <td>15/09/2022</td>
                            <td>Pied Pipper</td>
                            <td>25/09/2020</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}