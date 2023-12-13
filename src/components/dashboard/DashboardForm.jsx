import { useForm } from "react-hook-form";
import { ApiContext } from "../../context/ApiContext";
import { DashboardContext } from "../../context/DashboardContext";
import { useContext } from "react";


const Form = () => {

    const { changeComponentToDisplay, componentToDisplay } = useContext(DashboardContext);

    const { 
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
        // createInvoices(data);
        reset();
        // changeComponentToDisplay('Dashboard');
    }

    return (
        <section className="form">
            <h3>New {componentToDisplay}</h3>

            <div className="separate"></div>

            <div className="form-container">

                {
                    (componentToDisplay === 'Invoices') && (
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="reference" className="visually-hidden">Reference</label>
                            <input
                                className="input"
                                type="text"
                                id="reference"
                                name="ref"
                                placeholder="Reference"
                                {...register("ref", { required: "The reference is required" })}
                            />
                            {errors.ref && (<p>{errors.ref.message}</p>)}

                            {/* TODO : à vérifier, ajout de la colonne "price" dans le table "invoices" ? */}
                            {/* <label htmlFor="price" className="visually-hidden">Price</label> */}
                            {/* TODO : à vérifier, pour le "price" -> type = number ???? */}
                            {/* <input className="input" type="text" id="price" placeholder="Price" /> */}

                            <label htmlFor="id_company" className="visually-hidden">Choose a companie</label>
                            <select
                                name="id_company"
                                id="id_company"
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
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" name="name" placeholder="Name" />

                            <label htmlFor="type" className="visually-hidden">Choose a type</label>
                            <select name="type_id" id="type">
                                <option value="">Choose a type</option>
                                {types?.dataInfos.map((type) => (
                                    <option key={type.id} value={type.id}>{type.id} - {type.name}</option>
                                ))}
                            </select>

                            <label htmlFor="country" className="visually-hidden">Country</label>
                            <input className="input" type="text" id="country" name="country" placeholder="Country" />

                            <label htmlFor="tva" className="visually-hidden">TVA</label>
                            <input className="input" type="text" id="tva" name="tva" placeholder="TVA" />

                            <button className="save">Save</button>
                        </form>
                    )
                }

                {
                    (componentToDisplay === 'Contacts') && (
                        <form action="">

                            <label htmlFor="name" className="visually-hidden">Name</label>
                            <input className="input" type="text" id="name" name="name" placeholder="Name" />

                            <label htmlFor="companie_id" className="visually-hidden">Choose a companie</label>
                            <select name="companie_id" id="companie_id">
                                <option value="">Choose a companie</option>
                                {companies?.dataInfos.map((companie) => (
                                    <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                                ))}
                            </select>

                            <label htmlFor="email" className="visually-hidden">Email</label>
                            <input className="input" type="email" id="email" name="email" placeholder="Email" />

                            <label htmlFor="phone" className="visually-hidden">Phone</label>
                            <input className="input" type="text" id="phone" name="phone" placeholder="Phone" />

                            <button className="save">Save</button>
                        </form>
                    )
                }

            </div>

        </section>
    );
}

export default Form;