import { useForm } from "react-hook-form";
import { ApiContext } from "../../../context/ApiContext";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext } from "react";


const CreateCompanies = () => {

    const { changeComponentToDisplay } = useContext(DashboardContext);
    const { types, createCompanies } = useContext(ApiContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        data.company_id = parseInt(data.company_id, 10);
        console.log(data);
        console.log(JSON.stringify(data));
        try {
            createCompanies(data);
            reset();
            changeComponentToDisplay('Dashboard');
        } catch (error) {
            console.error("Error creating company:", error);
            // Gérer l'erreur, afficher un message à l'utilisateur, etc.
        }
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name" className="visually-hidden">Name</label>
            <input 
                className="input" 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Name" 
                {...register("name", { required: "The name is required" })}
            />
            {errors.name && (<p>{errors.name.message}</p>)}

            <label htmlFor="type_id" className="visually-hidden">Choose a type</label>
            <select 
                name="type_id" 
                id="type_id"
                {...register("type_id", { required: "The type is required" })}
            >
                <option value="">Choose a type</option>
                {types?.dataInfos.map((type) => (
                    <option key={type.id} value={type.id}>{type.id} - {type.name}</option>
                ))}
            </select>
            {errors.type_id && (<p>{errors.type_id.message}</p>)}

            <label htmlFor="country" className="visually-hidden">Country</label>
            <input 
                className="input" 
                type="text" 
                id="country" 
                name="country" 
                placeholder="Country"
                {...register("country", { required: "The country is required" })}
            />
            {errors.country && (<p>{errors.country.message}</p>)}

            <label htmlFor="tva" className="visually-hidden">TVA</label>
            <input 
                className="input" 
                type="text" 
                id="tva" 
                name="tva" 
                placeholder="TVA" 
                {...register("tva", { required: "The tva is required" })}
            />
             {errors.tva && (<p>{errors.tva.message}</p>)}

            <button className="save">Save</button>
        </form>
    )
}

export default CreateCompanies