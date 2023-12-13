import React from "react";
import LoginForm from "./LoginForm";

export default function ModalLogin({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="closeBtn" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="title">
          <h3>Log in</h3>
        </div>

        <div className="formLoginContainer">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
