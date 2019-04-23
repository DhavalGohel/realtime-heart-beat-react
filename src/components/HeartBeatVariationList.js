import React, { Component } from 'react';
import { LoadHeartBeatVariation } from '../LoadHeartBeat';

class HeartBeatVariationList extends Component {
  state = {
    heartBeatVariations: []
  };

  constructor(props) {
    super(props);
    LoadHeartBeatVariation((err, heartBeatVariations) => this.setState({ 
      heartBeatVariations 
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="">
          <h3> Heart Beat Variation rise 7</h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>HeartBeat</td>
            </tr>
          </thead>
          <tbody>
            { this.state.heartBeatVariations.map((value, key) => {
                return (
                  <tr key={key}>
                    <td >
                    { value._id } 
                    </td>
                    <td >
                      { value.heartBeats } 
                    </td>
                  </tr>
                  )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default HeartBeatVariationList;
