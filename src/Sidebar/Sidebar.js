import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <section className="sidebar open">
      {/* Sidebar content here */}
      <div className="logo-container">
        {/* Your logo content */}
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
