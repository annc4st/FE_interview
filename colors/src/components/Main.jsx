import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import ColorList from './ColorList';
import colors from './colors_db.js';

const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedShades, setSelectedShades] = useState([]);

    const handleCategoryClick = (category, shades) => {
        setSelectedCategory(category);
        setSelectedShades(shades);
    };

    return (    
        <div className='main'>
            <LeftPanel colors={colors} handleCategoryClick={handleCategoryClick}/>
            <ColorList colors={colors}
             selectedCategory={selectedCategory}  
             selectedShades={selectedShades} />
        </div>
    );
}

export default Main;
