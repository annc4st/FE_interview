import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";
import "../App.css";

const ColorList = ({ colors, selectedCategory, 
  randomColor, showAll, setShowAll, 
  handleShowAll, selectedSwatch, setSelectedSwatch,  
  setViewSelectedSwatch, handleSwatchClick}) => {
  
    const [currentPage, setCurrentPage] = useState(1);
    
  
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
          
      const handleClickClear = () => {
        handleShowAll();
      }

    // Pagination 
const itemsPerPage = 12;
const pageCount = Math.ceil(allShades.length / itemsPerPage);

const handlePageChange = (selectedPage) => {
  setCurrentPage(selectedPage);
};

const endIndex = currentPage * itemsPerPage;
const startIndex = endIndex - itemsPerPage;
const currentColors = allShades.slice(startIndex, endIndex);


  return (
    <div className="colors-div">
    <div className="color-list">

    {showAll && currentColors.map((color, index) => (
      <div key={index} className="shade-item" onClick={() => handleSwatchClick(color)}>
      <div className="color-swatch" style={{ backgroundColor: color.hex }}></div>
      <div className="shade-info">{color.hex}</div>
      </div>

    ))}
  
    </div>
    {showAll && 
    <Pagination
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalItems = {allShades.length}
      />
    }
  
 
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
      
    );
}

export default ColorList;

