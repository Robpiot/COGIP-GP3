import { useForm } from "react-hook-form";
import { ApiContext } from "../../../context/ApiContext";
import { DashboardContext } from "../../../context/DashboardContext";
import { useContext } from "react";


const CreateContacts = () => {

    const { changeComponentToDisplay } = useContext(DashboardContext);
    const { companies, createContacts } = useContext(ApiContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        data.company_id = parseInt(data.company_id, 10);
        console.log(data);
        console.log(JSON.stringify(data));
        createContacts(data);
        reset();
        changeComponentToDisplay('Dashboard');
    };

    return (
        <form  onSubmit={handleSubmit(onSubmit)}>

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

            <label htmlFor="company_id" className="visually-hidden">Choose a companie</label>
            <select 
                name="company_id" 
                id="company_id"
                {...register("company_id", { required: "The companie is required" })}
            >
                <option value="">Choose a companie</option>
                {companies?.dataInfos.map((companie) => (
                    <option key={companie.id} value={companie.id}>{companie.id} - {companie.name}</option>
                ))}
            </select>
            {errors.companie_id && (<p>{errors.companie_id.message}</p>)}

            <label htmlFor="email" className="visually-hidden">Email</label>
            <input 
                className="input" 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Email" 
                {...register("email", {
                    required: "The email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                })}
            />
            {errors.email && (<p>{errors.email.message}</p>)}

            <label htmlFor="phone" className="visually-hidden">Phone</label>
            <input 
                className="input" 
                type="text" 
                id="phone" 
                name="phone" 
                placeholder="Phone" 
                {...register("phone", {
                    required: "The phone number is required",
                    pattern: {
                        value: /^0\d{1,2}(\s?\d{2}){4}$/, // Numéro de téléphone avec espaces autorisés (11 chiffres dont le premier est un zéro)
                        message: "Entered value does not match the format of a phone number (11 digits starting with 0)",
                    },
                })}
            />
            {errors.phone && (<p>{errors.phone.message}</p>)}

            <button className="save">Save</button>
        </form>
    )
}

export default CreateContacts