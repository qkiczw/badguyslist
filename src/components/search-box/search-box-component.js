import React from 'react';

import './search-box-style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <div className="search-container">
        <label htmlFor="search-field"  className="search-field-label" >Search for a bad guy</label>
        <input 
        id="search-field"
        className="search-field-input" 
        onChange={handleChange} 
        type="search" 
        placeholder={placeholder}
        />
    </div>
)

