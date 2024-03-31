import React from "react";
import {FaSearch} from 'react-icons/fa';


const Search = ({input, setInput, handleInputChange, setSearchResults, setShowAll}) => {

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        handleInputChange(inputValue); 
    }

     return (

        <div className="search-box">
        <FaSearch id="search-icon"/>
        <input
        className="search-input"
        onChange={handleChange}
        placeholder="Start typing hex"
        value = {input}
        />
        </div>
    )
}

export default Search;
 

       