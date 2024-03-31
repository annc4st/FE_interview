import React from "react";
import "../App.css";
import logo from "../assets/logo-symbol.svg";


const Heading = ({ handleShowAll }) => {
  const handleClickLogo = () => {
    handleShowAll();
  };
  
  return (
        <div className="logo" onClick={handleClickLogo}>
        <img src={logo} alt="website logo"></img>
      </div>
  );
};

export default Heading;
