import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/style.scss";
import "./assets/scss/normalize.scss";
import { ToDoListPages } from "./pages/ToDoListPages";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ToDoListPages />
  </React.StrictMode>,

  
);
