import React from 'react';

import {Card} from '../card/card-component';




import './card-list-style.css';



export const CardList = ( props ) => {
    return(
        <>
            <div className="card-list">
            
               {props.badGuys.map( badGuy => (
                   <Card key={badGuy.id} badGuy={badGuy} handleRelease={props.handleRelease}/>
               ) )}
            </div>
        </>
    )
}