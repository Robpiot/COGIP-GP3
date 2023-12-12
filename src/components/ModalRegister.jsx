import React from "react";
import RegisterForm from "./RegisterForm";

export default function ModalRegister({ closeModalRegister }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="closeBtn"
            onClick={() => closeModalRegister(false)}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Register</h3>
        </div>

        <div className="formLoginContainer">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
