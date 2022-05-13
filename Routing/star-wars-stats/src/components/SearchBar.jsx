import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {

    let [type, setType] = useState("");
    let [id, setId] = useState("");

    const history = useHistory();

    const selectHandler = (e) => {
        setType(e.target.value);
    }

    const idHandler = (e) => {
        setId(e.target.value);
    }

    const searchHandler = (e) => {
        e.preventDefault();
        history.push(`/${type}/${id}`)

    }

    return (
        <div>
            <form className='form-control' onSubmit={searchHandler}>
                <div className="form-group mb-3">
                    <label>Search For:</label>
                    <select className='form-select' onChange={selectHandler} defaultValue={"DEFAULT"}>
                        <option value="DEFAULT" disabled>Select an option:</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label>ID:</label>
                    <input type="number" name="" id="" onChange={idHandler}/>
                </div>
                <input type="submit" value="Submit" className='btn btn-success' />
            </form>
        </div>
    )
}

export default SearchBar