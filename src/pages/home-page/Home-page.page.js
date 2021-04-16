import React from 'react';
import './Home-page.styles.css';

// Components
import CardList from '../../components/card-list/card-list-component';
import AddGuy from '../../components/add-guy/Add-guy-component'



export const HomePage = ({badGuys, handleRelease, addGuyHandler}) => {
    return (
        <div className='home-page'>
            <CardList badGuys={badGuys} handleRelease={handleRelease}/>
            <AddGuy addGuyHandler={addGuyHandler} />
        </div>
    )
}

