import React from 'react'

const Vehicles = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Name: {results.name}</h1>
            <p>Model: {results.model}</p>
            <p>Vehicle class: {results.vehicle_class}</p>
            <p>Cost in credits: {results.cost_in_credits}</p>
            <p>Crew needed: {results.crew}</p>
            <p>Passenger capacity: {results.passengers}</p>
        </div>
    )
}


export default Vehicles