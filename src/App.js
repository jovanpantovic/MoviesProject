import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Genres } from './Genres';
//import { genres } from './data';

import MovieBuilder from '../src/containers/MovieBuilder';
import Form from '../src/containers/Form/Form';

  class App extends Component {
    render () {
      return (
        <BrowserRouter>
        <div className="App">
          
            <Switch>
              <Route exact path="/" component={Form}/>
              <Route path="/movies" component={MovieBuilder}/>
            </Switch>
          </div>
          
        </BrowserRouter>
      );
    }
  }

export default App;
