import React from 'react';

import './card-style.css'


export const Card = ( {badGuy, handleRelease} ) => {
    return(
    <div className="card-container"> 
        <img alt={`Bad guy named ${badGuy.name}`} src={`https://robohash.org/${badGuy.id}set=set2`}/>
        <h2>{badGuy.name}</h2>

        <div className="bad-guy-info">
            <p><strong>Gang:</strong> {badGuy.company.name}</p>
            <p><strong>City:</strong> {badGuy.address.city}</p>
        </div>
        <div className="buttons">
            <button className="release-btn" onClick={()=> handleRelease(badGuy.id)}>Release</button>
        </div>
    </div>
    )
};