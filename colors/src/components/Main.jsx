import React, { useState } from "react";
import Heading from "./Heading.jsx";
import LeftPanel from "./LeftPanel";
import ColorList from "./ColorList";
import colors from "./colors_db.js";
import RandomColor from "./RandomColor.jsx";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import NoSearchResults from "./NoSearchResults.jsx";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedShades, setSelectedShades] = useState([]);
  const [active, setActive] = useState(null);
  const [randomColor, setRandomColor] = useState(null);
  const [showAll, setShowAll] = useState(true);
  const [selectedSwatch, setSelectedSwatch] = useState(null);
  const [viewSelectedSwatch,setViewSelectedSwatch] = useState(false);
  const [input, setInput] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const handleCategoryClick = (category) => {
    setActive(category);
    setSelectedCategory(category);
    setSelectedShades(colors);
  };

  const handleRandomColor = (randomColor) => {
    setRandomColor(randomColor);
  };

  const handleShowAll = () => {
    setSelectedSwatch(null);
    setShowAll(true);
    setSelectedCategory(null);
    setActive(null);
    setInput('');
    setSearchResults([]);
  };

  const handleSwatchClick = (color) => {
    setSelectedSwatch(color);
    setViewSelectedSwatch(true);
    setShowAll(false);
    setSearchResults([]);

  };
  //Search
  const handleInputChange = (inputValue) => {
    let newResults = [];
    if (inputValue.length > 2) {
      newResults = colors.filter(color => color.hex.includes(inputValue.toUpperCase()));
      setSearchResults(newResults);
      setShowAll(false); 
      setSelectedShades([])
   
  } else {
    console.log("no reults");
    setSearchResults([]);
    setShowAll(false);
    setSelectedShades([])
  }
};


  return (
    <div>
    <div className="header">
      <Heading handleShowAll={handleShowAll} />
      <Search 
         input={input}
         setInput={setInput} 
      setShowAll={setShowAll}
      handleInputChange={handleInputChange}
      setSearchResults={setSearchResults}
      />
      </div>

      <div className="main">
        <div className="left">
          <RandomColor colors={colors} onRandomColor={handleRandomColor} />

          <LeftPanel
            colors={colors}
            handleCategoryClick={handleCategoryClick}
            active={active}
            viewSelectedSwatch = {viewSelectedSwatch}
            selectedSwatch= {selectedSwatch}
          />
        </div>

        {(input.length > 2 && (searchResults && searchResults.length === 0)) ?   
    <NoSearchResults />
    : <SearchResults searchResults={searchResults} handleSwatchClick={handleSwatchClick}/>
}
       
        <ColorList
          colors={colors}
          randomColor={randomColor}
          selectedCategory={selectedCategory}
          selectedShades={selectedShades}
          showAll={showAll}
          setShowAll={setShowAll}
          handleSwatchClick={handleSwatchClick}
          handleShowAll={handleShowAll}
          selectedSwatch={selectedSwatch}
          setViewSelectedSwatch={ setViewSelectedSwatch}
          setSelectedSwatch={setSelectedSwatch}
        />
      </div>
    </div>
  );
};

export default Main;
