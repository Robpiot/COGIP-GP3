import { useForm } from "react-hook-form";
import { ApiContext } from "../../../context/ApiContext";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext } from "react";

const CreateInvoices = () => {
    const { changeComponentToDisplay } = useContext(DashboardContext);
    const { companies, createInvoices } = useContext(ApiContext);

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
        reset();
        changeComponentToDisplay('Dashboard');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="ref" className="visually-hidden">Reference</label>
                <input
                    className="input"
                    type="text"
                    id="ref"
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
    );
}

export default CreateInvoices