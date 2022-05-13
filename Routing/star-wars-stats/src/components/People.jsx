import React from 'react'

const People = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Name: {results.name}</h1>
            <p>Height: {results.height}</p>
            <p>Birth Year: {results.birth_year}</p>
            <p>Gender: {results.gender}</p>
        </div>
    )
}


export default People