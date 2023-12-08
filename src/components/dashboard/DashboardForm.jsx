import Types from '../../data/types.json'

const Form = ( {data} ) => {

    console.log('data : ', data);
    console.log('Types : ', Types.dataInfos);


    return ( 

        <section className="form">
            <h3>New {data.dataName}</h3>

            <div className="separate"></div>

            <div className="form-container">

                {   
                    (data.dataName === 'invoices') && (
                        <form action="">
                            <input className="input" type="text" placeholder="Reference" />
                            <input className="input" type="text" placeholder="Price" />
                            <select name="" id="">
                                <option value="">Choose a type</option>
                                {Types.dataInfos.map((type) => (
                                    <option key={type.id} value={type.id}>{type.id} - {type.name}</option>
                                ))}
                            </select>
                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'companies') && (
                        <form action="">
                            <input className="input" type="text" placeholder="Name" />
                            <input className="input" type="text" placeholder="Type" />
                            <input className="input" type="text" placeholder="Country" />
                            <input className="input" type="text" placeholder="TVA" />
                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'contacts') && (
                        <form action="">
                            <input className="input" type="text" placeholder="Name" />
                            {/* Faire un select ! */}
                            {/* <input className="input" type="text" placeholder="Company Name" /> */}
                            <input className="input" type="email" placeholder="Email" />
                            <input className="input" type="text" placeholder="Phone" />
                            <button className="save">Save</button>
                        </form>
                    )
                }




            </div>
            

        </section>
    
    );
}

export default Form;