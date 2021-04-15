import React from 'react';
// import './Home-page.styles.scss';

// Components
import {CardList} from '../../components/card-list/card-list-component';



export const HomePage = ({badGuys}) => {
    return (
        <div className='home-page'>
            <h1>Home Page</h1>
            {console.log(badGuys)}
            <CardList badGuys={badGuys} />
        </div>
    )
}

