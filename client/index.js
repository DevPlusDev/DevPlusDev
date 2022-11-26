import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App.jsx";
import styles from './app.css';
import ReactDOM from "react-dom";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById("root")
);