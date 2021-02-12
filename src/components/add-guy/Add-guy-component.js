import React from "react";
import './add-guy-style.css'

export const AddGuy = () => {
    return (
        <div className="add-guy-container">
            <h2>Fill in the form to add a bad guy</h2>
            <form className="add-guy-form">
                <input type="text" placeholder="Eneter a guy name"></input>
                <input type="text" placeholder="Enter City"></input>
                <input type="text" placeholder="Enter Gang name"></input>
                <button>Add +</button>
            </form>
        </div>

    )
};