import React, { Component } from 'react';
import { LoadHeartBeat } from '../LoadHeartBeat';
import LineChart from 'react-linechart';
import '../../node_modules/react-linechart/dist/styles.css'

class HeartBeatChart extends Component {
  state = {
    heartBeatLevel: []
  };

  constructor(props) {
    super(props);
    LoadHeartBeat((err, data) => {
      const heartBeatLevel = [];
      data.forEach((key, value) => {
        heartBeatLevel.push({x : value, y: key.heartBeats});
      });
      this.setState({ 
        heartBeatLevel 
      })
    }, props.sessionId);
  }

  render() {
    const data = [
      {									
          color: "steelblue", 
          points: this.state.heartBeatLevel 
      }
    ];
    return (
      <div className="">
          <LineChart 
            width={600}
            height={400}
            data={data}
          />
      </div>
    );
  }
}

export default HeartBeatChart;
