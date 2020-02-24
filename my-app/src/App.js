import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import register from './register/register';
import patients from './patients/patients';
import './App.css';

class App extends Component {
  
  render(){
     return (
    <div className="App">
      <Switch>
        <Route exact path="/" component= { register } />
        <Route exact path="/patients" component= { patients } />
      </Switch>
    </div>
  )
}
 
}

export default App;
