import React, { useState } from "react";
import Heading from "./Heading.jsx";
import LeftPanel from "./LeftPanel";
import ColorList from './ColorList';
import colors from './colors_db.js';
import RandomColor from "./RandomColor.jsx";

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedShades, setSelectedShades] = useState([]);
    const [active, setActive] = useState('');
    const [randomColor, setRandomColor] = useState(null);
    const [showAll, setShowAll] = useState(true);
    const [selectedSwatch, setSelectedSwatch ] = useState(null);

    const handleCategoryClick = (category) => {
        setActive(category);
        setSelectedCategory(category);
        setSelectedShades(colors);
    };

    const handleRandomColor = (randomColor) => {
        setRandomColor(randomColor);
    }

    const handleShowAll = () => {
        setSelectedSwatch(null);
        setShowAll(true);
        setSelectedCategory(null);
        setActive(null);
    };

    return (    
        <div>
            <Heading handleShowAll={handleShowAll} />
     
        <div className='main'>
        <div className="left">
         <RandomColor colors={colors} 
         onRandomColor={handleRandomColor}/>

            <LeftPanel colors={colors} 
            handleCategoryClick={handleCategoryClick} 
            active={active}/>
        </div>
            
            <ColorList colors={colors}
             randomColor={randomColor}
             selectedCategory={selectedCategory}  
             selectedShades={selectedShades} 
             showAll={showAll}
             setShowAll={setShowAll}
             handleShowAll={handleShowAll}
             selectedSwatch={selectedSwatch}
             setSelectedSwatch={setSelectedSwatch}
             />
        </div>
        </div>
    );
}

export default Main;
