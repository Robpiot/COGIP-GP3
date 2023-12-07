

const Form = ( {data} ) => {

    console.log('data : ', data);


    return ( 

        <section className="form">
            <h3>New {data.dataName}</h3>

            <div className="separate"></div>

            <div className="form-container">
                <form action="">
                    <input type="text" placeholder="" />
                </form>

            </div>
            

        </section>
    
    );
}

export default Form;