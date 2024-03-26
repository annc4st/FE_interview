import React, { useState } from "react";
import '../App.css';


const LeftPanel = ({colors,  handleCategoryClick}) => {
  
  return (
 
    <div className="left-col-categories">
      <ul>
        {colors.map((color) => {
           return <li key={color.category} onClick={() => handleCategoryClick(color.category, color.shades)}>
           {color.category}</li>;
        })}
      </ul>
    </div>
  );
};

export default LeftPanel;
