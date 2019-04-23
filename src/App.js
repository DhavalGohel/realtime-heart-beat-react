import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeartBeatComponent from './components/HeartBeatComponent';
import HomeComponent from './components/HomeComponent';

class App extends Component {
  
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeComponent}/>
          <Route path="/heart-beat" component={HeartBeatComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
