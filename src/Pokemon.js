import React from 'react'
import './Pokemon.css'
const Pokemon = ({name, set, image}) => {
    return (
        <div className='card-container'>
            <div className="desc">
                <h1 className='pokemon-name'>{name}</h1>
                <h2 className='pokemon-type'>Set: {set}</h2>
            </div>
            <div className="image-container">
                <img className='pokemon-image' src={image} alt="image" />
            </div>
        </div>
    )
}

export default Pokemon
