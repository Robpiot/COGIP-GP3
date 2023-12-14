import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register, // that is use to register input
    handleSubmit, //we can use this to handle the form submission
    formState: { errors }, //contain all the errors & validations errors
  } = useForm(); //

  const onSubmit = (data) => {
    data.role_id = 1;
    fetch("https://cogip-990e44950882.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

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
        </div>
        <div className="form-control">
          <label></label>
          <button className="sumbitReg" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
