import React from "react";
import LoginForm from "./LoginForm";

export default function ModalLogin({ closeModalLogin }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="closeBtn" onClick={() => closeModalLogin(false)}>
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
