import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './badguy-profile.styles.css'


export const BadguyProfile = (props) => {
    const badGuyId = props.match.params.id
    
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${badGuyId}`)
        .then( response => response.json()) 
        .then( guy => setBadGuy({...guy}) ) 
    },[])
    
    const [badGuy, setBadGuy] = useState({})



    return(
        <div className='bad-guy-wrapper'>
        {console.log(badGuy)}

            <h2>Bad Guy Full Profile</h2>
            <h3>This page will show you a badGuy number {badGuyId} full info</h3>
            <div>
                <img alt={`Bad guy named ${badGuy.name}`} src={`https://robohash.org/${badGuyId}set=set2`}/>
                <p>Ful name: {badGuy.name}</p>
                <p>Username: {badGuy.username}</p>
                <p>email: {badGuy.email}</p>
                <p>phone: {badGuy.phone}</p>
            </div>
            <Link to={'/'} className='back-btn'>Back to List</Link>
            
        </div>
    )
}