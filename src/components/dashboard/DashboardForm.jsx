

const Form = ( {data} ) => {

    console.log('data : ', data);


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
                            <input className="input" type="text" placeholder="Company Name" />
                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'companies') && (
                        <form action="">
                            <input className="input" type="text" placeholder="Reference" />
                            <input className="input" type="text" placeholder="Price" />
                            <input className="input" type="text" placeholder="Company Name" />
                            <button className="save">Save</button>
                        </form>
                    )
                }

                {   
                    (data.dataName === 'contacts') && (
                        <form action="">
                            <input className="input" type="text" placeholder="Reference" />
                            <input className="input" type="text" placeholder="Price" />
                            <input className="input" type="text" placeholder="Company Name" />
                            <button className="save">Save</button>
                        </form>
                    )
                }




            </div>
            

        </section>
    
    );
}

export default Form;