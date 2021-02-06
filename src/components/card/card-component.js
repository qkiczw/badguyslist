import React from 'react';

import './card-style.css'


export const Card = ( props ) => {
    console.log(props.badGuy)
    return(
    <div className="card-container"> 
        <img alt={`Bad guy named ${props.badGuy.name}`} src={`https://robohash.org/${props.badGuy.id}set=set2`}/>
        <h2>{props.badGuy.name}</h2>

        <div className="bad-guy-info">
            <p><strong>Gang:</strong> {props.badGuy.company.name}</p>
            <p><strong>City:</strong> {props.badGuy.address.city}</p>
        </div>
    </div>
    )
};