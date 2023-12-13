import React from "react";
import RegisterForm from "./RegisterForm";

export default function ModalRegister({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            className="closeBtn"
            onClick={closeModal}
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
