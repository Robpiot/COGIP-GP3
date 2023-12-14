import { useForm } from "react-hook-form";
import { ApiContext } from "../../../context/ApiContext";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext } from "react";


const CreateCompanies = () => {

    const { changeComponentToDisplay } = useContext(DashboardContext);
    const { types, createCompanies } = useContext(ApiContext);

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

            <label htmlFor="country" className="visually-hidden">Country</label>
            <input 
                className="input" 
                type="text" 
                id="country" 
                name="country" 
                placeholder="Country"
                {...register("country", { required: "The country is required" })}
            />

            <label htmlFor="tva" className="visually-hidden">TVA</label>
            <input 
                className="input" 
                type="text" 
                id="tva" 
                name="tva" 
                placeholder="TVA" 
                {...register("tva", { required: "The tva is required" })}
            />

            <button className="save">Save</button>
        </form>
    )
}

export default CreateCompanies