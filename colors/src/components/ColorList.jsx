import React, { useState, useEffect} from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import "../App.css";

const ColorList = ({ colors, selectedCategory, randomColor, showAll, setShowAll, handleShowAll, selectedSwatch, setSelectedSwatch}) => {
  
    const [viewSelectedSwatch,setViewSelectedSwatch] = useState(false);
  
 
 let allShades = [];
 useEffect(() => {
  if (randomColor) {
 
      setSelectedSwatch({
          name: randomColor.name,
          hex:  randomColor.hex,
      });
      setViewSelectedSwatch(true);
      setShowAll(false);
  }
}, [randomColor]);


  if (selectedCategory) {
    allShades = colors.filter(color => color.category === selectedCategory);
   
} else {
    colors.forEach(color => (allShades.push(color)));
}
          
    const handleSwatchClick = (color) => {
        setSelectedSwatch(color);
        setViewSelectedSwatch(true);
        setShowAll(false);
      };

      const handleClickClear = () => {
        handleShowAll();
      }


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
         
          <div className="swatch-large" style={{ backgroundColor: selectedSwatch.hex }}></div>
          <div className="swatch-large-info">{selectedSwatch.hex}</div>
         
        </div>
         <div className="btn-div">
            <button className="btn-clear" onClick={()=> handleClickClear()}>Clear</button>
        </div>
        </div>

      )}
        </div>
        </div>
    );
}

export default ColorList;

