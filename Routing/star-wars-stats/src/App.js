import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useParams } from 'react-router';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <SearchBar></SearchBar>
        <Switch>
          <Route exact path="/:type/:id">
            <SearchResults></SearchResults>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
