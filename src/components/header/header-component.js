import React from 'react';
import { Link } from 'react-router-dom';
import './header-style.css';


export const Header = ( props ) => (
    <header>
        <Link to={'/'}>
            <h1>{props.title}</h1>
        </Link>
    </header>
);
