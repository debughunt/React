import React from 'react'

const Species = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Name: {results.name}</h1>
            <p>Classification: {results.classification}</p>
            <p>Designation: {results.designation}</p>
            <p>Language: {results.language}</p>
        </div>
    )
}


export default Species