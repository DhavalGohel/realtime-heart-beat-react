import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomeComponent extends Component {
  state = {
    heartBeatVariations: 'no yet'
  };

  render() {
    return (
      <div className="App">
        <Link to='/heart-beat' className="btn btn-primary">
            Start Session
        </Link>
      </div>
    );
  }
}

export default HomeComponent;
