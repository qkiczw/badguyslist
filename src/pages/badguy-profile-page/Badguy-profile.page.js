import React from 'react';


export const BadguyProfile = (props) => {
    const { match } = props;

    return(
        <div>
        {console.log(match.params.id)}
            <h2>Bad Guy Full Profile</h2>
            <h3>This page will show you a badGuy number {match.params.id} full info</h3>
        </div>
    )
}