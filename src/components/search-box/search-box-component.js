import React from 'react';

import './search-box-style.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className="search-field" 
        onChange={handleChange} 
        type="search" 
        placeholder={placeholder}
    />
)

