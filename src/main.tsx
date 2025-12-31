import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain= 'dev-luyj0vosdle03tsh.us.auth0.com'
      clientId= 'JlistZDAnBucJxgZSPiuJeud3VM9OBzq'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <TaskProvider>
        <App />
      </TaskProvider>
    </Auth0Provider>
  </React.StrictMode>
);
