import React from 'react';

import './card-style.css'


export const Card = ( props ) => {
    return(
    <div className="card-container"> 
        <img alt={`Bad guy named ${props.badGuy.name}`} src={`https://robohash.org/${props.badGuy.id}set=set2`}/>
        <h2>{props.badGuy.name}</h2>

        <div className="bad-guy-info">
            <p><strong>Gang:</strong> {props.badGuy.company.name}</p>
            <p><strong>City:</strong> {props.badGuy.address.city}</p>
        </div>
        <div className="buttons">
            <button className="release-btn" onClick={()=> props.handleRelease(props.badGuy.id)}>Release</button>
        </div>
    </div>
    )
};