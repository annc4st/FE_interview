import React from 'react';
import '../App.css';
import logo from '../assets/logo-symbol.svg';

const Heading = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src = {logo} alt="website logo"></img>
            </div>

            <div className='search-box'>

            </div>
        </div>
    )
}

export default Heading;