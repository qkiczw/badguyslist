import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './badguy-profile.styles.css'


export const BadguyProfile = (props) => {
    const badGuyId = props.match.params.id

    const initialState = {
        "company": {
            "name": " ",
            
        },
        "address": {
            "street": " ",
            "city": " ",
            "zipcode": " ",
            "geo": {
                "lat": "",
                "lng": ""
              }
        }
    }
    
    useEffect( ()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${badGuyId}`)
        .then( response => response.json()) 
        .then( guy => setBadGuy({...guy}) ) 
    },[])
    
    const [badGuy, setBadGuy] = useState(initialState)
    const {company, address} = badGuy;

    console.log(company)

    return(
        <div className='bad-guy-wrapper'>
            <div className='bad-guy-photo'>
                {/* image of the guy */}
                <img alt={`A bad guy named ${badGuy.name}`} src={`https://robohash.org/${badGuyId}set=set2`}/>
            </div>
            <div className='bad-guy-data'>
                <h1>Ful name: {badGuy.name}</h1>
                <h2><strong>Nickname:</strong> {badGuy.username}</h2>
                <h2>Gang: {company["name"]}</h2>
                <div>
                    <h2>Address:</h2>
                    <p><strong>City:</strong> {address.city}</p>
                    <p><strong>Street:</strong> {address.street}</p>
                    <p><strong>Zip-code:</strong> {address.zipcode}</p>
                </div> 
                <h2>REWARD: {address.geo.lat.replace('-', '')}$</h2>
                <div className='back-btn-section'>
                    <Link to={'/'} className='back-btn'>Back to List</Link>
                </div>  
            </div>
            
            {/* <h2>Bad Guy Full Profile</h2>
            <h3>This page will show you a badGuy number {badGuyId} full info</h3>
            <div>
                <img alt={`Bad guy named ${badGuy.name}`} src={`https://robohash.org/${badGuyId}set=set2`}/>
                <p>Ful name: {badGuy.name}</p>
                <p>Username: {badGuy.username}</p>
                <p>email: {badGuy.email}</p>
                <p>phone: {badGuy.phone}</p>
            </div>
             */}
            
        </div>
    )
}