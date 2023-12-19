import React from "react";
import { useForm } from "react-hook-form";
// import { useFetchUsers } from "../assets/utils/users";

export default function RegisterForm() {
  const {
    register, // that is use to register input
    handleSubmit, //we can use this to handle the form submission
    reset,
    formState,
    formState: { errors, isSubmitSuccessful }, //contain all the errors & validations errors
  } = useForm({ defaultValue: { something: "anything" } }); //

  const [message, setMessage] = React.useState("");

  const onSubmit = (data) => {
    data.role_id = 4;
    console.log("Sending data:", data);

    fetch(import.meta.env.VITE_API_LINK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json()) // Parse the response body as JSON
      .then((data) => {
        console.log("Server response data:", data);
        if (data.status === 400) {
          // Check the status property of the parsed object
          setMessage("This email is already in use");
        } else if (data.status >= 200 && data.status < 300) {
          setMessage("You are now registered");
        } else {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ first_name: "", last_name: "", email: "", password: "" });
      // setMessage("Successfully registered");
    }
  }, [formState, reset]);

  return (
    <div className="formLogin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>First Name :</label>
          <input
            type="text"
            name="first_name"
            {...register("first_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.first_name && errors.first_name.type === "required" && (
            <p className="errorMsg">First Name is required.</p>
          )}
          {errors.first_name && errors.first_name.type === "maxLength" && (
            <p className="errorMsg">First Name is too long.</p>
          )}
          {errors.first_name && errors.first_name.type === "pattern" && (
            <p className="errorMsg">Alphabetical characters only.</p>
          )}
          <label>Last Name : </label>
          <input
            type="text"
            name="last_name"
            {...register("last_name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.last_name && errors.last_name.type === "required" && (
            <p className="errorMsg">Last Name is required.</p>
          )}
          {errors.last_name && errors.last_name.type === "maxLength" && (
            <p className="errorMsg">Last Name is too long.</p>
          )}
          {errors.last_name && errors.last_name.type === "pattern" && (
            <p className="errorMsg">Alphabetical characters only.</p>
          )}
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              // ... will tracks all the props and spread all the required events handlers
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="errorMsg">Email is required.</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="errorMsg">Email is not valid.</p>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="errorMsg">Password is required.</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <p className="errorMsg">
              Password must contain at least one uppercase letter, one lowercase
              letter, and one number.
            </p>
          )}
        </div>
        <div className="form-control">
          <label></label>
          <button className="sumbitReg" type="submit">
            Register
          </button>
        </div>
        {message && <p className="responseRegister">{message}</p>}
      </form>
    </div>
  );
}
