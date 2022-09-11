import React from "react";
import { createRoot } from "react-dom/client";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const APP_ID = process.env.REACT_APP_MORALIS_APP_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
