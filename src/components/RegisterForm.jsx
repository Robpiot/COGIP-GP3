import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register, // that is use to register input
    handleSubmit, //we can use this to handle the form submission
    formState: { errors }, //contain all the errors & validations errors
  } = useForm(); //

  const onSubmit = (data) => {
    console.log(data); // data will contain all the input values
  };

  return (
    <div className="formLogin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label>First Name :</label>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.firstName && errors.firstName.type === "required" && (
            <p className="errorMsg">First Name is required.</p>
          )}
          {errors.firstName && errors.firstName.type === "maxLength" && (
            <p className="errorMsg">First Name is too long.</p>
          )}
          {errors.firstName && errors.firstName.type === "pattern" && (
            <p className="errorMsg">Alphabetical characters only.</p>
          )}
          <label>Last Name : </label>
          <input
            type="text"
            name="lastName"
            {...register("lastName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors.lastName && errors.lastName.type === "required" && (
            <p className="errorMsg">Last Name is required.</p>
          )}
          {errors.lastName && errors.lastName.type === "maxLength" && (
            <p className="errorMsg">Last Name is too long.</p>
          )}
          {errors.lastName && errors.lastName.type === "pattern" && (
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
          <button className="sumbitReg" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
