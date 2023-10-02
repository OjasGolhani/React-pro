 import React from "react";
 import ReactDom from "react-dom/client"; 
 import App, { Hello, Hiii } from "./App";
 //import { Hello,Hiii } from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <App/>
   <Hello/>
   <Hiii/>
  </React.StrictMode>
);
