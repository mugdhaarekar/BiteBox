import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const inlineStyle = {
  backgroundColor: "#f0f0f0",
};

// restocard method using individual prop not feasible for large data

const AppLayout = () => {
  console.log(<Body />); //Virtual DOM
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
