import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Static from "./views/Static";
import Dynamic from "./views/Dynamic";
import Network from "./views/Network";
import { ApolloProvider } from "@apollo/client";
import Client from "./Client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/static" element={<Static />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/network" element={<Network />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
