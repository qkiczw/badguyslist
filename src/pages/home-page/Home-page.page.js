import React from 'react';
import './Home-page.styles.css';
// Components
import {CardList} from '../../components/card-list/card-list-component';



export const HomePage = ({badGuys, handleRelease}) => {
    return (
        <div className='home-page'>
            <CardList badGuys={badGuys} handleRelease={handleRelease}/>
        </div>
    )
}

