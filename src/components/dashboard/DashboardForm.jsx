import { useForm } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";


const Form = () => {

    const { changeComponentToDisplay, componentToDisplay } = useContext(DashboardContext);

    const { 
        // fetchContacts,
        // fetchCompanies,
        // fetchInvoices,
        companies, 
        types, 
        createInvoices 
    } = useContext(ApiContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();


    const onSubmit = data => {
        data.id_company = parseInt(data.id_company, 10);
        console.log(data);
        console.log(JSON.stringify(data));
        createInvoices(data);
        // if (formName === 'Invoices') {
        //     fetchInvoices();
        // }
        reset();
        changeComponentToDisplay('Dashboard');
    }

    return (
        <section className="form">
            <h3>New {componentToDisplay}</h3>

            <div className="separate"></div>

            <div className="form-container">

                {
                    (componentToDisplay === 'Invoices') && (
                        <form action="" onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="reference" className="visually-hidden">Reference</label>
                            <input
                                className="input"
                                type="text"
                                id="reference"
                                placeholder="Reference"
                                {...register("ref", { required: "The reference is required" })}
                            />
                            {errors.ref && (<p>{errors.ref.message}</p>)}

                            {/* TODO : à vérifier, ajout de la colonne "price" dans le table "invoices" ? */}
                            {/* <label htmlFor="price" className="visually-hidden">Price</label> */}
                            {/* TODO : à vérifier, pour le "price" -> type = number ???? */}
                            {/* <input className="input" type="text" id="price" placeholder="Price" /> */}

                            <label htmlFor="companie" className="visually-hidden">Choose a companie</label>
                            <select
                                name="id_company"
                                id="companie"
                                {...register("id_company", { required: "The companie is required" })}
                            >
                                <option value="">Choose a companie</option>
                                {companies?.dataInfos.map((companie) => (
                                    <option key={companie.id} value={companie.id}>
                                        {companie.id} - {companie.name}
                                    </option>
                                ))}
                            </select>
                            {errors.id_company && (<p>{errors.id_company.message}</p>)}

                            <button className="save">Save</button>
                        </form>
                    )
                }

                {
                    (componentToDisplay === 'Companies') && (
                        <form action="">

                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" placeholder="Name" />

                            <label htmlFor="type" className="visually-hidden">Choose a type</label>
                            <select name="type" id="type">
                                <option value="">Choose a type</option>
                                {types?.dataInfos.map((type) => (
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
                    (componentToDisplay === 'Contacts') && (
                        <form action="">

                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" placeholder="Name" />

                            <label htmlFor="companie" className="visually-hidden">Choose a companie</label>
                            <select name="companie" id="companie">
                                <option value="">Choose a companie</option>
                                {companies?.dataInfos.map((companie) => (
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