import React from 'react';
import './header-style.css';


export const Header = ( props ) => (
    <header>
        <h1>{props.title}</h1>
    </header>
);
