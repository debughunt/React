import React from 'react'

const Planets = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Name: {results.name}</h1>
            <p>Population: {results.population}</p>
            <p>Climate: {results.climate}</p>
            <p>Terrain: {results.terrain}</p>
        </div>
    )
}


export default Planets