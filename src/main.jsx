import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import ApiProvider from "./context/ApiContext.jsx";
import DashboardProvider from "./context/DashboardContext.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { UserProvider } from './assets/utils/UserContext.jsx'; // import UserProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ApiProvider>
          <DashboardProvider>
            <UserProvider> {/* Add UserProvider here */}
              <App />
            </UserProvider>
          </DashboardProvider>
        </ApiProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
