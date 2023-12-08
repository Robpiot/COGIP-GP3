import Companies from '../../data/companies.json'
import Types from '../../data/types.json'



const Form = ( {data} ) => {

    // console.log('data : ', data);
    // console.log('Types : ', Types.dataInfos);

    return ( 

        <section className="form">
            <h3>New {data.dataName}</h3>

            <div className="separate"></div>

            <div className="form-container">

                {   
                    (data.dataName === 'invoices') && (
                        <form action="">

                            <label htmlFor="reference" className="visually-hidden">Reference</label>
                            <input className="input" type="text" id="reference" placeholder="Reference" />

                            <label htmlFor="price" className="visually-hidden">Price</label>
                            {/* TODO : à vérifier, pour le "price" -> type = number ???? */}
                            <input className="input" type="text" id="price" placeholder="Price" />

                            <label htmlFor="companie" className="visually-hidden">Choose a companie</label>
                            <select name="companie" id="companie">
                                <option value="">Choose a companie</option>
                                {Companies.dataInfos.map((companie) => (
                                    <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                                ))}
                            </select>

                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'companies') && (
                        <form action="">
                            
                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" placeholder="Name" />

                            <label htmlFor="type" className="visually-hidden">Choose a type</label>
                            <select name="type" id="type">
                                <option value="">Choose a type</option>
                                {Types.dataInfos.map((type) => (
                                    <option key={type.id} value={type.id}>{type.id} - {type.name}</option>
                                ))}
                            </select>

                            <label htmlFor="country" className="visually-hidden">Country</label>
                            <input className="input" type="text" id="country" placeholder="Country" />

                            <label htmlFor="tva" className="visually-hidden">TVA</label>
                            <input className="input" type="text" id="tva" placeholder="TVA" />

                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'contacts') && (
                        <form action="">

                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" placeholder="Name" />
                            
                            <label htmlFor="companie" className="visually-hidden">Choose a companie</label>
                            <select name="companie" id="companie">
                                <option value="">Choose a companie</option>
                                {Companies.dataInfos.map((companie) => (
                                    <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                                ))}
                            </select>

                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input className="input" type="email" id="email" placeholder="Email" />

                            <label htmlFor="phone" className="visually-hidden">Phone</label>
                            <input className="input" type="text" id="phone" placeholder="Phone" />

                            <button className="save">Save</button>
                        </form>
                    )
                }

            </div>
            
        </section>
    );
}

export default Form;