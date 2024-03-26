import React, { useState } from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import "../App.css";

const ColorList = ({ colors, selectedCategory }) => {
 
  const allColorShades = [];
  // if no category is selected, show all shades
  if (!selectedCategory) {

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i];
        for (let j = 0; j < color.shades.length; j++) {
        const shade = color.shades[j];
        allColorShades.push({ name: shade.name, hex: shade.hex });
        }
    }
} else {
     // show only the shades of the selected category
     const selectedColor = colors.find(color => color.category === selectedCategory);
     if (selectedColor) {
         allColorShades.push(...selectedColor.shades.map(shade => ({ name: shade.name, hex: shade.hex })));
     }
 }


  return (
    <div className="color-list">
            {allColorShades.map((shade, index) => (
                <div key={index} className="shade-item">
                    <div className="color-swatch" style={{ backgroundColor: shade.hex }}></div>
                    <div className="shade-info">{shade.hex}</div>
                </div>
            ))}
        </div>
    );
}

export default ColorList;

