import React from 'react';

import './card-style.css'

export const Card = ( props ) => (
    <div className="card-container"> 
        <h2>{props.badGuy.name}</h2>
    </div>
);