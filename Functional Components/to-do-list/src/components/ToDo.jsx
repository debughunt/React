import React, { useState } from 'react';

const ToDo = () => {

    let [task, setTask] = useState("");
    let [allToDo, setAllToDo] = useState([]);
    let [complete, setComplete] = useState(false);

    const submitToDo = (e) => {
        e.preventDefault();
        let toDo = { task, complete }
        setAllToDo([...allToDo, toDo])
        setTask("")
    }

    const checkComplete = (e, idx) => {
        let [...copyList] = allToDo;
            copyList[idx].complete = e.target.checked;
            setAllToDo(copyList);
    }

    const deleteToDo = (e, idx) => {
        let filteredCopy = allToDo.filter((toDo, i) => {
            return i != idx
        })
        setAllToDo(filteredCopy);
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={submitToDo}>
                    <div className="form-group">
                        <label htmlFor="">To Do:</label>
                        <input className="form-control mb-3" type="text" value={task} id="" onChange={(e) => { setTask(e.target.value) }} />
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
            <hr></hr>
            {
                allToDo.map((toDoObj, idx) => {
                    return <ul key={idx} className="list-group">
                        <li style={{textDecoration: toDoObj.complete? "line-through": ""}} className="list-group-item">{toDoObj.task} | <input type="checkbox" onChange={(e) => {checkComplete(e, idx)}}></input> | <button onClick={(e) => {deleteToDo(e, idx)}} className="btn btn-danger">Delete</button></li>
                    </ul>
                })
            }
        </>
    )
}





export default ToDo;