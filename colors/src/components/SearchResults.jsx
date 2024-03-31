import React from "react";


const SearchResults = ({searchResults, handleSwatchClick}) => {

  return (
    
    <div className="colors-div">

     {searchResults && searchResults.length > 0 && 
     
    <div className="color-list"> 

    {searchResults.map((color, index) => (
        <div key={index} 
        className="shade-item" 
        onClick={() => handleSwatchClick(color)}>
      <div className="color-swatch" 
      style={{ backgroundColor: color.hex }}></div>
      <div className="shade-info">{color.hex}</div>
      </div>
    ))}
      </div>
      
      }
      </div>
  
  );
};

export default SearchResults;
