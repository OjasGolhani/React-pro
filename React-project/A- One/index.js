 import React from "react";
 import ReactDom from "react-dom/client";
 import BookList from "./BookList";
// import App from "./App";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   <BookList/>
  </React.StrictMode>
);
