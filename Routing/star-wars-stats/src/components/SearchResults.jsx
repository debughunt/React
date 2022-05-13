import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import People from './People';
import Planets from './Planets';
import Species from './Species';
import Films from './Films';
import Starships from './Starships';
import Vehicles from './Vehicles';


const SearchResults = props => {

    let { type, id } = useParams();
    let [results, setResults] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(response => {
                setResults(response.data)
            })
            .catch(err => console.log(err))
    }, [id])



    return (
        <div>
            {
                type == "people" ?
                    <People results={results}></People> : type == "planets" ?
                        <Planets results={results}></Planets> : type == "species" ?
                            <Species results={results}></Species> : type == "films" ?
                                <Films results={results}></Films> : type == "starships" ?
                                    <Starships results={results}></Starships> :
                                    <Vehicles results={results}></Vehicles>
            }
        </div>
    )
}

export default SearchResults