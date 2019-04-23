import React, { Component } from 'react';
import { LoadHeartBeatVariation } from '../LoadHeartBeat';

class HeartBeatVariationCount extends Component {
  state = {
    hearbeatVeriationCount: []
  };

  constructor(props) {
    super(props);
    LoadHeartBeatVariation((err, heartBeatVariations) => 
    this.setState({ 
      hearbeatVeriationCount: heartBeatVariations.length 
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="card card-body">
          <h3>{this.state.hearbeatVeriationCount}</h3>
        </div>
      </div>
    );
  }
}

export default HeartBeatVariationCount;
