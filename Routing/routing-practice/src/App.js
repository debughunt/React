import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useParams } from 'react-router';

const Welcome = (props) =>{
  return(
    <h1>Welcome</h1>
  )
}

const Number = (props) => {
  const { val } = useParams();
  return(
    isNaN(val)?
    <h1>The word is: {val}</h1>:
    <h1>The number is: {val}</h1>
  )
}

const AllTogether = (props) => {
  const {val, col1, col2} = useParams();
  console.log(col1, col2)
  return(
    <>
      <div style={{backgroundColor: col1}}>
        {isNaN(val)?
        <h1 style={{color: col2}}>The word is: {val}</h1>:
        <h1 style={{color: col2}}>The number is: {val}</h1>
      }
      </div>
    </>
  )
}


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Welcome></Welcome>
        </Route>
        <Route exact path="/:val">
          <Number></Number>
        </Route>
        <Route exact path="/:val/:col1/:col2">
          <AllTogether></AllTogether>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
