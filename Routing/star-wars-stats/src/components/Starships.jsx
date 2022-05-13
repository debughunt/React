import React from 'react'

const Starships = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Name: {results.name}</h1>
            <p>Model: {results.model}</p>
            <p>Class: {results.starship_class}</p>
            <p>Manufacturer: {results.manufacturer}</p>
            <p>Cost in credits: {results.cost_in_credits}</p>
            <p>Length: {results.length}</p>
            <p>Crew needed: {results.crew}</p>
            <p>Hyperdrive Rating: {results.hyperdrive_rating}</p>
        </div>
    )
}


export default Starships