import React from 'react'

const Films = props => {

    const { results } = props;

    return (
        <div className='results'>
            <h1>Title: {results.title}</h1>
            <p>Director: {results.director}</p>
            <p>Episode: {results.episode_id}</p>
            <p>{results.opening_crawl}</p>
        </div>
    )
}


export default Films