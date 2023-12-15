import React from "react";
import { useRef, useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import api from "../api/axios";

export default function LoginForm(closeModalLogin) {
  const {
    register, // that is use to register input
    handleSubmit, //we can use this to handle the form submission
    formState: { errors }, //contain all the errors & validations errors
  } = useForm(); //

  const onSubmit = (data) => {
    api
      .post("/", data)
      .then((response) => {
        console.log(response.data);
        console.log(data.first_name + " " + data.last_name);
      })
      .catch((error) => {
        console.error(error + " " + "unable to connect");
      });
  };

  return (
    <div className="formLogin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
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
          <button className="submitLog" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
