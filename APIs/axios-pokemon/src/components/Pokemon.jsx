import React, { useEffect, useState } from "react";
import axios from 'axios';

const Pokemon = (props) => {

    const [responseData, setResponseData] = useState([]);

    const getPokemon = (e) => {
        console.log("fetching")
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1200')
            .then(response => { 
                console.log(response)
                setResponseData(response.data.results) 
            })
            .catch(err => {
                console.log("error", err)
            });
    }

    return (
        <>
            <div>
                <button onClick={getPokemon}>Click to fetch pokemon!</button>
            </div>
            <div>
                {responseData.map((pokemon, idx) => {
                    return (
                        <ul key={idx} className="list-group">
                            <li className="list-group-item">{pokemon.name}</li>
                        </ul>
                    )
                })}
            </div>
        </>
    )
}

export default Pokemon;