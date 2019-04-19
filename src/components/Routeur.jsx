import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Cuisine from '../pages/Cuisine';
import Quete from '../pages/Quete';
import { ProgressBar } from 'react-step-progress-bar';

export default class Routeur extends Component {

  render() {
    return (
     
      <div className="App">
     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quete/:id" component={Quete} />
          <Route path="/cuisine" component={Cuisine} />
          <Route path="/progressbar" component={ProgressBar} />
          <Route path="/contact" component={Contact} />
        </Switch>
        
      </div>
  
    );
  }
}

