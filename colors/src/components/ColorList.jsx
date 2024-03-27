import React, { useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import "../App.css";

const ColorList = ({ colors, selectedCategory }) => {
    const [selectedSwatch, setSelectedSwatch ] = useState(null);
    const [viewSelectedSwatch,setViewSelectedSwatch] = useState(false);
    const [showAll, setShowAll] = useState(true);
 
 let allShades = [];

  if (selectedCategory) {
    allShades = colors.filter(color => color.category === selectedCategory);
   
} else {
    colors.forEach(color => (allShades.push(color)));
}
          
        // click swatch
    const handleSwatchClick = (color) => {
        setSelectedSwatch(color);
        setViewSelectedSwatch(true);
        setShowAll(false);
      };

      const handleShowAll = () => {
        setSelectedSwatch(null);
        setShowAll(true);
      };


  return (
    <div className="colors-div">

    <div className="color-list">


    {showAll && allShades.map((color, index) => (
      <div key={index} className="shade-item" onClick={() => handleSwatchClick(color)}>
      <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
      <div className="shade-info">{color.hex}</div>
      </div>

    ))}

    {!showAll && selectedSwatch && (
      <div className="single-sw-page">
        <div className="selected-swatch">
          <h3>Selected Swatch {selectedSwatch.name}</h3>
          <div className="swatch-large" style={{ backgroundColor: selectedSwatch.hex }}></div>
          <div className="swatch-large-info">{selectedSwatch.hex}</div>
         
        </div>
         <div className="btn-div">
            <button className="btn-clear" onClick={()=> handleShowAll()}>Clear</button>
        </div>
        </div>

      )}
        </div>
        </div>
    );
}

export default ColorList;

