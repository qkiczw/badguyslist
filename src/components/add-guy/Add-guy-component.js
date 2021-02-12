import React from "react";
import './add-guy-style.css'

export const AddGuy = ({addGuy}) => {
    return (
        <div className="add-guy-container">
            <h2>Fill in the form to add a bad guy</h2>
            <form onSubmit={addGuy} className="add-guy-form">
                <input name="name" type="text" placeholder="Enter a new guy name"></input>
                <input name="city" type="text" placeholder="Enter City"></input>
                <input name="gang" type="text" placeholder="Enter a guy Gang name"></input>
                <input type="submit" value="Add +"/>
            </form> 
        </div>
    )
};